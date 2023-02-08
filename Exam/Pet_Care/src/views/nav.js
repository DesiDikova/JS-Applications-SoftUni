import { logout } from '../api/users.js';
import { html, render, page } from '../lib.js';
import { getUserData } from '../util.js';
//import { getUserData } from '../util.js';

const header = document.querySelector('header');

const navTemplate = (hasUser) => html`
<nav>
    <section class="logo">
        <img src="./images/logo.png" alt="logo">
    </section>
    <ul>
        <!--Users and Guest-->
        <li><a href="/">Home</a></li>
        <li><a href="/catalog">Dashboard</a></li>
        ${!hasUser 
            ? html`<li class="guest"><a href="/login">Login</a></li>
                    <li class="guest"><a href="/register">Register</a></li>`
            : html`<li class="users"><a href="/create">Create Postcard</a></li>
                    <li class="users"><a @click=${onLogout} id="logoutBtn" href="javascript:void(0)">Logout</a></li>`}           
    </ul>
</nav>`;

export function updateNav() {
    const userData = getUserData();
    render(navTemplate(userData), header);
}

function onLogout() {
    logout();
    updateNav();
    page.redirect('/');
}

