import { render } from 'https://unpkg.com/lit-html?module';
import { table } from './table.js';

const data = [
    {
        name: 'Peter',
        id: 'asd1',
    },
    {
        name: 'Mary',
        id: 'asd2',
    },
    {
        name: 'John',
        id: 'asd3',
    }
]

const root = document.querySelector('main');

update();


//Ще направим бутона delete да намира, изтрива от масива и да вика повторно render
function onDelete(id) {
    data.splice(data.findIndex(i => i.id == id), 1);
    update()
}

function update() {
    render(table(data, onDelete), root);
}


