import { html, render } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";
import { getUserData } from "./util.js";
import { logout } from "./api/api.js";
import { loginPage } from "./view/login.js";

let mainElement = document.getElementById('site-content');

function decorationContext(ctx, next) {
    ctx.render = (content) => render(content, mainElement);
    ctx.updateUserNav = updateUserNav;

    next();
}

export function updateUserNav() {
    let userData = getUserData();
    let guest = document.getElementById('guest');
    let user = document.getElementById('user');
    let span = document.querySelector('#user span');

    if (userData) {
        guest.style.display = 'none';
        user.style.display = 'inline-block';
        span.textContent = `Welcome, ${userData.email}`;
    } else {
        guest.style.display = 'inline-block';
        user.style.display = 'none';
    }
}

document.getElementById('logoutBtn').addEventListener('click', () => {
    logout();
    updateUserNav();
    page.redirect('/');
})

page(decorationContext);
page('/login', loginPage);
updateUserNav();
page.start();