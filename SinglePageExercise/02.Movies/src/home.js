import { showView, spinner } from "./util.js";

const section = document.querySelector('#home-page');
const movieList = section.querySelector('#movie .row.d-flex.d-wrap');

export function homePage() {
    showView(section);
    displayMovies();
}

async function displayMovies() {
    movieList.replaceChildren(spinner());
    const movie = await getMovie();
    movieList.replaceChildren(...movie.map(createMoviePreview));
}

function createMoviePreview(movie) {
    const ul = document.createElement('ul');
    ul.className = 'card-deck d-flex justify-content-center';
    ul.innerHTML = `
    <img class = "card-img-top" src="${movie.img}"
        alt="Card image cap" width="400">
    <div class="card-body">
        <h4 class="card-foother">${movie.title}</h4>
    </div>
    <div class="card-footer">
        <a data-id=${movie._id} href="/details/${movie._id}">
            <button type="button" class="btn-info">Details</button>
        </a>
    </ul>
    `

    return ul;
}

async function getMovie() {
    const url = 'http://localhost:3030/data/movies';
    const res = await fetch(url);
    const data = await res.json();

    return data;
}

//window.getMovie = getMovie; //по този начин визуализирам заявката, за да проверя дали се изпълнява правилно