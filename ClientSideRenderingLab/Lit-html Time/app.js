import { html, render } from 'https://unpkg.com/lit-html?module';

const timer = (time) => html`
<p>The time is ${time}</p>
<p>Have a nice day!</p>`;

const message = () => html `<p>Static message</p>`;
const root = document.querySelector('main');

function show() {
    render(message(), root);
}

function update() {
    render(timer(new Date()), root);
}

document.querySelector('button').addEventListener('click', update);

//Ако искаме часовника да се мести на всяка секунда
setInterval(update, 1000);

window.show = show;
window.update = update;



