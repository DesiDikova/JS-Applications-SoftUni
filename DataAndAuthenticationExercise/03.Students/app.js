const formElement = document.getElementById('form');
formElement.addEventListener('submit', createStudent)

function createStudent(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const facultyNumber = formData.get('facultyNumber');
    const grade = formData.get('grade');

    const body = {
        firstName,
        lastName,
        facultyNumber,
        grade,
    }

    const url = 'http://localhost:3030/jsonstore/collections/students';
    

    fetch (url, {
        method:"POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    })
    .then(res => res.json())
    .then(user => {
        console.log(user);
        localStorage.setItem('token', user.accessToken); 
        localStorage.setItem('username', user.username); 
        localStorage.setItem('_id', user._id);           
    });

}
        
//         //Хакерски вариант на ВТОРИ ВАРИАНТ:
//         // let formElement = document.getElementById('login-form');
//         // formElement.addEventListener('submit', (e) => {
//         //     e.preventDefault();
//         //     let formData = new FormData(e.currentTarget); // - създава се нова FormData (или нова инстанция), която взима e.currentTarget (елемента, върху който поставяме eventa-a), т.е взима цялата информация от формата. 
//         //     let { username, password } = Object.fromEntries(formData);
//         //     console.log(username);
//         //     console.log(password);
//         // })

//         // с помощта на POSTMAN и fetch заявка
//         let formElement = document.getElementById('login-form');
//         formElement.addEventListener('submit', (e) => {
//             e.preventDefault();

//             let formData = new FormData(e.currentTarget);
            
//             let username = formData.get('username');
//             let password = formData.get('password');
//             let data = {
//                 email: username,
//                 password
//             };
//             //ЗАЯВКА ЧРЕЗ Fetch
//             fetch('http://localhost:3030/users/login', {
//                 method: 'POST',
//                 headers: {
//                     'content-type': 'application/json'
//                 },
//                 body: JSON.stringify(data)
//             })
//                 .then(res => res.json())
//                 .then(user => {
//                     console.log(user);
//                     localStorage.setItem('token', user.accessToken); //запазване на token (или казваме token е равен на accessToken на дадения user)
//                     localStorage.setItem('username', user.username); //запазване на token (или казваме token е равен на accessToken на дадения user)
//                     localStorage.setItem('_id', user._id); //запазване на token (или казваме token е равен на accessToken на дадения user)
                    
//                 });
//         });

//     </script>