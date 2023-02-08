import { getAllIdeas } from "../api/data.js";

const section = document.getElementById('dashboard-holder');
section.remove();

export function showCatalog(contex) {
    contex.showSection(section)
    loadIdeas();
}

async function loadIdeas() {
    const idea = await getAllIdeas();
    console.log(idea)
}