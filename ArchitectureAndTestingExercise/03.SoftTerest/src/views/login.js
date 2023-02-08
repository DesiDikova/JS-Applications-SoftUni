const section = document.getElementById('loginPage'); 
section.remove(); 

export function showLogin(contex) { 
    contex.showSection(section); 
}