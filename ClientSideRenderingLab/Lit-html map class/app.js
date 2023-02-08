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
        highlight: { //class map работи с булеви стойности
            activi: true, //имената на свойствата са имената на класовете
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
    const item = data.find(i => i.id == id);
    update()
}

function update() {
    render(table(data, onClick), root);
}




