const section = document.getElementById('detailsPage');
section.remove();

export function showDetails(contex) {
    contex.showSection(section);
}