// import { logout } from './api/users.js';
import { page, render } from './lib.js';
// import { getUserData } from './util.js';
// import { createView } from './views/create.js';
// import { dashboardView } from './views/dashboard.js';
// import { detailsView } from './views/details.js';
// import { EditView } from './views/edit.js';
import {showHome} from './views/home.js'
// import { loginView } from './views/login.js';
// import { registerView } from './views/register.js';
// import { searchPage } from './views/search.js';



const main = document.getElementById('content');
// console.log(main);

// document.getElementById('logoutBtn').addEventListener('click',  onLogout)
page(decorateContext);
//page('/', homeView)
page('/', showHome);
page('/catalog', () => console.log('catalog'));
page('/catalog/:id', () => console.log('ditails'));
page('/edit/:id', () => console.log('edit'));
page('/create', () => console.log('create'));
page('/login', () => console.log('login'));
page('/register', () => console.log('register'));
// page('/dashboardPage', dashboardView)
// page('/dashboardPage/:id', detailsView)
// page('/editPage/:id', EditView)
// page('/searchPage', searchPage)
// page('/addPairPage', createView)
// page('/loginPage', loginView)
// page('/registerPage', registerView)

// updateNav()
page.start();

function decorateContext(ctx, next) {
    //ctx.updateNav = updateNav
    ctx.render = renderMain;
    next();
}

function renderMain(content) {
    render(content, main);
}

// function updateNav(){

//     const userData = getUserData()
//     if(userData){
//        [...document.querySelectorAll('.guest')].forEach(s => s.style.display = 'none');
//        [...document.querySelectorAll('.user')].forEach(s => s.style.display = 'inline');
//        }
//        else{
//            [...document.querySelectorAll('.guest')].forEach(s => s.style.display = 'inline');
//            [...document.querySelectorAll('.user')].forEach(s => s.style.display = 'none');
       
//        }
       
   
//    }

//    function onLogout(){
//     logout()
//     updateNav()
//     page.redirect('/')
//    }