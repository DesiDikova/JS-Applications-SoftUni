import { html, render } from 'https://unpkg.com/lit-html?module';
import { getRequest } from './api.js';
import { infoUsers } from './infoUsers.js';
import { onClick } from './onClick.js';

let users = Object.values(await getRequest());
let infoUser = infoUsers(users);
let main = document.querySelector('tbody');

render(infoUser, main);

document.querySelector('#searchBtn').addEventListener('click', onClick);
