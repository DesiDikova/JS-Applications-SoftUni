document.querySelector('form').addEventListener('submit', register);

async function register(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const email = formData.get('email');
    const password = formData.get('password');
    const rePass = formData.get('rePass');

    try {
        if (email === '' || password === '') {
            throw new Error('All fields are required');
        }

        if (password !== rePass) {
            throw new Error('Password dont match');
        }

        const response = await fetch('http://localhost:3030/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });

        if (response.ok === false) {
            const error = await response.json();
            throw Error(error.message);
        };

        const data = await response.json();

        sessionStorage.setItem('accessToken', data.accessToken);
    
        location.reload();
    } catch (err) {
        alert(err.message);
    }
}

