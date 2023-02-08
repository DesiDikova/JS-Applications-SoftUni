import { html, render } from 'https://unpkg.com/lit-html?module';
import { towns } from './towns.js';

let templateTowns = (town) => html `
<ul>
   <li id=${town}>${town}</li>
</ul>`;

let result = towns.map(templateTowns);
let mainElement = document.getElementById('towns');

render(result, mainElement);

document.querySelector('button').addEventListener('click', search);

function search() {
   let searchTextElement = document.getElementById('searchText').value;
   let resultElement = document.getElementById('result');
   let match = 0;
   towns.map(towns => {
      if (towns.includes(searchTextElement)) {
         let town = document.getElementById(`${towns}`);
         town.setAttribute('class', 'active');
         match++;
      }
   });
   
   resultElement.textContent = `${match} matches found`;
}
