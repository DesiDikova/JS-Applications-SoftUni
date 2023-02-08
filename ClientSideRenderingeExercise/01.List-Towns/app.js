import { html, render } from 'https://unpkg.com/lit-html?module';

document.getElementById('btnLoadTowns').addEventListener('click', createTownsArray);

function createTownsArray(e) {
    e.preventDefault();

    let townsElement = document.getElementById('towns').value;
    let result = townsElement.split(', ');

    let towns = html`
        <ul>
            ${result.map(t => html `<li>${t}</li>`)}
        </ul>`;

    let root = document.getElementById('root');
    render(towns, root);
}




