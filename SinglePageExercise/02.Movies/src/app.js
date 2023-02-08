// showView('#home-page');

import { homePage } from "./home.js";
import { loginPage } from "./login.js";
import { createPage } from "./create.js";
import { registerPage } from "./register.js";

const routes = {
    '/': homePage,
    '/login': loginPage,
    '/create': createPage,
    '/register': registerPage,
    '/logout': logout,
};

document.querySelector('nav').addEventListener('click', onNavigation)
document.querySelector('#add-movie-button').addEventListener('click', onNavigation)

function onNavigation(e) {
    if (e.target.tagName == 'A' && e.target.href) {
        e.preventDefault();
        const url = new URL(e.target.href);
        const view = routes[url.pathname];
        if (typeof view == 'function') {
            view();
        }
    }
}  

function logout() {
    alert('logged out');
}

//Стартиране на страницата с каталога 
homePage();





