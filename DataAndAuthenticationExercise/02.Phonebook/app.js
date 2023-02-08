function attachEvents() {
    // const url = 'http://localhost:3030/jsonstore/phonebook';

    // document.getElementById('btnLoad').addEventListener('click', load);
    // document.getElementById('btnCreate').addEventListener('click', create);
    // document.getElementById('phonebook').addEventListener('click', deleted);

    // const phonebook = document.getElementById('phonebook');

    // function load() {
    //     phonebook.replaceChildren();

    //     fetch(url)
    //         .then(response => {
    //             if (response.status !== 200) {
    //                 throw new Error('Dont valid response in load')
    //             }

    //             return response.json();
    //         })
    //         .then(data => {
    //             Object.values(data).forEach(user => {
    //                 const liElement = document.createElement('li');
    //                 liElement.textContent = `${user.person}: ${user.phone}`;

    //                 const btnDelete = document.createElement('button');
    //                 btnDelete.textContent = 'Delete';
    //                 btnDelete.setAttribute('id', user._id);

    //                 liElement.appendChild(btnDelete);
    //                 phonebook.appendChild(liElement);
    //             })
    //         })
    //         .catch(err => alert(err))
    // }

    // function create() {
    //     const person = document.getElementById('person');
    //     const phone = document.getElementById('phone');

    //     if (!person.value || !phone.value) {
    //         return;
    //     }

    //     fetch(url, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             person: person.value.trim(),
    //             phone: phone.value.trim(),
    //         })
    //     })
    //         .then(response => {
    //             if (response.status !== 200) {
    //                 throw new Error('Error response it create');
    //             }

    //             return response.json();
    //         })
    //         .catch(err => alert(err.message))

    //     person.value = '';
    //     phone.value = '';
    // }

    // function deleted(e) {
    //     let currentId = e.target.id;

    //     if (e.target.textContent == 'Delete') {
    //         fetch(`${url}/${currentId}`, {
    //             method: 'DELETE'
    //         })
    //             .then(response => {
    //                 load();
    //                 return response.json()
    //             })
    //             .catch(err => alert(err.message))
    //     }
    // }


        //ВАРИАНТ С ASYNC - AWAIT
    document.getElementById('btnLoad').addEventListener('click', getRequest);
    document.getElementById('btnCreate').addEventListener('click', create);
    
}

function load(data) {
    const ulElement = document.getElementById('phonebook');
    ulElement.replaceChildren();
    const info = Object.values(data).forEach(data => {
        const liElement = document.createElement('li');
        liElement.textContent = `${data.person}: ${data.phone}`;

        const btnDelete = document.createElement('button');
        btnDelete.textContent = 'Delete';
        btnDelete.setAttribute('id', data._id);
        btnDelete.addEventListener('click', deleteUser);

        liElement.appendChild(btnDelete);
        ulElement.appendChild(liElement);
    }); 
}

function deleteUser(e) {
    const idUser = e.target.id;

    deleted(idUser);
    liElement.remove();
}

function create() {
    const person = document.getElementById('person');
    const phone = document.getElementById('phone');

    postRequest(person.value.trim(), phone.value.trim());

    person.value = '';
    phone.value = '';
}

async function getRequest() {
    const url = 'http://localhost:3030/jsonstore/phonebook';
    const response = await fetch(url);
    const data = await response.json();

    return load(data);
    //load(data);
}

async function postRequest(person, phone) {
    const url = 'http://localhost:3030/jsonstore/phonebook';
    const body = {
        person,
        phone,
    }
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });
    const data = await response.json();

    return data;
}

async function deleted(id) {
    const url = `http://localhost:3030/jsonstore/phonebook/${id}`;
    const response = await fetch(url, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(null),
    });
    const data = await response.json();

    return data;

}

attachEvents();