const section = document.getElementById('createPage');
section.remove();

export function showCreate(contex) {
    contex.showSection(section);
}