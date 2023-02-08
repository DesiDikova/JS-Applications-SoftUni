import { getToken } from "../auth.js";

const createDesplay = document.querySelector('.create');
const createForm = createDesplay.querySelector('form');

createForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);

    let name = formData.get('name');
    let img = formData.get('img');
    let ingredients = formData.get('ingredients').split('\n');
    let steps = formData.get('steps').split('\n');

    let data = {
        name,
        img,
        ingredients,
        steps,
    };

    fetch('http://localhost:3030/data/recipes', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': getToken(),
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            alert('Successful recipe create')
        });
})
export function renderCreate() {
    createDesplay.style.display = 'block';
}