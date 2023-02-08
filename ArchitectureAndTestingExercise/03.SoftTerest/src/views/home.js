const section = document.getElementById('homePage'); //селектирам homePage
section.remove(); //махам section

// section.querySelector('#getStartedLink').addEventListener('click', (ev) => {
//     ev.preventDefault();
//     context.goTo('catalog');
// });

// const context = null;

export function showHome(contex) { //contex е обект, който има showSection(или ютилити фукции) вътре в него 
    contex.showSection(section); // показвам дадената страница
}