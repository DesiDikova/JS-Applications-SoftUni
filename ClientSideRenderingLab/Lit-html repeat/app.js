import { render } from 'https://unpkg.com/lit-html?module';
import { table } from './table.js';

const data = [
    {
        name: 'Peter',
        id: 'asd1',
        canEdit: false,
        style: {
            color: 'red',
        }
    },
    {
        name: 'Mary',
        id: 'asd2',
        canEdit: true,
        highlight: { 
            activi: true, 
            content: true,
        }
    },
    {
        name: 'John',
        id: 'asd3',
        canEdit: false,
    }
]

const root = document.querySelector('main');

update();

function onClick(id) {
    const index = data.findIndex(i => i.id == id);
    data.splice(index, 1);
    update();
}

function update() {
    render(table(data, onClick), root);
}
