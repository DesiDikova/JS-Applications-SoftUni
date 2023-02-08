import { html } from 'https://unpkg.com/lit-html?module';

export const table = (items, onClick) => html`
<table>
    ${items.map(i => tableRow(i, onClick))}
</table>`

const tableRow = (item, onClick) => html`
<tr>
    <td>${item.name}</td>  
    
    <td>
        ${item.canEdit 
            ? html`<button>Edit</button><button>Delete</button>` 
            : null
        }
    </td> 
</tr>`;


