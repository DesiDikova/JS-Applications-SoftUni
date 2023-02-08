import { html, render } from 'https://unpkg.com/lit-html?module';

const baseUrl = 'http://localhost:3030/jsonstore/advanced/dropdown';

async function getElement() {
    let response = await fetch(baseUrl);
    let data = await response.json();

    return data;
}

let result = Object.values(await getElement());

let finishResult = html`${result.map((res) => html`<option value = ${res._id}>${res.text}</option>`)}`;

let menuElement = document.getElementById('menu');
render(finishResult, menuElement);


document.querySelector('input[type="submit"]').addEventListener('click', addItem);

async function addItem(e) {
    e.preventDefault();
    let text = document.querySelector('#itemText').value;
    let response = await fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
    });
    let data = await response.json();

    result.push(data);
    if (response.ok) {
        finishResult = html`${result.map((res) => html`<option value = ${res._id}>${res.text}</option>`)}`;
        render(finishResult, menuElement);
    }
}


