const section = document.getElementById('registerPage');
section.remove();

export function showRegister(contex) {
    contex.showSection(section); 
}

