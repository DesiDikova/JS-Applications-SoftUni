import { render } from 'https://unpkg.com/lit-html?module';
import { table } from './table.js';

const data = [
    {
        name: 'Peter',
        id: 'asd1',
        canEdit: false,
    },
    {
        name: 'Mary',
        id: 'asd2',
        canEdit: true,
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
    const item = data.find(i => i.id == id);
    update()
}

function update() {
    render(table(data, onClick), root);
}


