import { html, render } from 'https://unpkg.com/lit-html?module';
import { getBooks } from './getBooks.js';
import { dataBooks } from './catalog.js';

let data = Object.values(await getBooks());
let info = dataBooks(data);

let body = document.querySelector('body');

render(info, body);