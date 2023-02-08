import "./src/api/api.js";
import { showHome } from "./src/views/home.js";
import { showLogin } from "./src/views/login.js";
import { showRegister } from "./src/views/register.js";
import { showCatalog } from "./src/views/catalog.js";
import { showCreate } from "./src/views/create.js";
import { showDetails } from "./src/views/details.js";

const mainElement = document.querySelector('main');

const links = {
    'homeLink': 'home',
    'getStartedLink': 'home',
    'loginLink': 'login',
    'registerLink': 'register',
    'createLink': 'create',
    'catalogLink': 'catalog',
    'detailsLink': 'details',
}

const views = {
    'home': showHome,
    'login': showLogin,
    'register': showRegister,
    'catalog': showCatalog,
    'create': showCreate,
    'details': showDetails,
}

const navElement = document.querySelector('nav');
navElement.addEventListener('click', onNavigation);

function onNavigation(e) {
    e.preventDefault();

    const name = links[e.target.id];

    console.log(name);
    goTo(name);
}

const contex = {
    showSection,
    goTo,
    updateNav,
    
}

function goTo(name, ...params) {
    const view = views[name];
    view(contex, ...params);
}

function showSection(name) {
    mainElement.replaceChildren(name); 
}

function updateNav() {
    const userData = JSON.parse(sessionStorage.getItem('userData'));

    if(userData != null) {
        [...navElement.querySelectorAll('#user')].forEach(li => li.style.display = 'block');
        [...navElement.querySelectorAll('#guest')].forEach(li => li.style.display = 'none');
    } else {
        [...navElement.querySelectorAll('#user')].forEach(li => li.style.display = 'none');
        [...navElement.querySelectorAll('#guest')].forEach(li => li.style.display = 'block');
    }
}
showHome(contex);