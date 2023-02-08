import { getAllMemes } from '../api/memes.js';
import { html } from '../lib.js';

const catalogTemplate = (books) => html `
<section id="dashboard-page" class="dashboard">
    <h1>Dashboard</h1>
    <ul class="other-books-list">s
    ${books.length == 0
            ? html`<p class="no-books">No books in database!</p>`
                : books.map(bookCard)}
    </ul>
</section>`;


const bookCard = (book) => html`
<li class="otherBooks">
    <h3>A Court of Thorns and Roses</h3>
    <p>Type: Fiction</p>
    <p class="img"><img src="${book.imageUrl}"></p>
    <a class="button" href="/books/${book._id}">Details</a>
</li>`;

export async function catalogView(ctx) {
    const books = await getAllMemes();
    
    ctx.render(catalogTemplate(books));
}