import { html, render } from 'https://unpkg.com/lit-html?module';
import { cats } from './catSeeder.js';

let cardCat = (c) => html`
<ul>
    <li>
        <img src="./images/${c.imageLocation}.jpg" width="250" height="250">
            <div class="info">
                <button class="showBtn" @click=${onclick}>Show status code</button>
                    <div class="status" style="display: none" id=${c.id}>
                        <h4>Status Code: ${c.statusCode}</h4>
                        <p>${c.statusMessage }</p>
                    </div>
            </div>
    </li>
</ul>`;

function onclick(e) {
    let btn = e.target.parentElement;
    let statusElement = btn.querySelector('div .status');
    if (statusElement.style.display == 'none') {
        statusElement.style.display = 'block'
    }else {
        statusElement.style.display = 'none'
    }
}

let result = cats.map(cardCat);
let sectionElement = document.getElementById('allCats');
render(result, sectionElement);
