import { html } from 'https://unpkg.com/lit-html?module';
import { styleMap } from 'https://unpkg.com/lit-html/directives/style-map.js?module';
import { classMap } from 'https://unpkg.com/lit-html/directives/class-map.js?module';
import { repeat } from 'https://unpkg.com/lit-html/directives/repeat.js?module';

//repeat: Първи параметър: масивът, който искам да обходя (items); Втори параметър - id функция(функция, която връща уникална стойност); Трети параметър(функцията, която до сега съм подавала)
export const table = (items, onClick) => html`
<table> 
    ${repeat(items, i => i.id, i=> tableRow(i, onClick))}
</table>`

const tableRow = (item, onClick) => html`
<tr style=${styleMap(item.style || {})}>
    <td class=${classMap(item.highlight || {})}>${item.name}</td>  
    
    <td>
        ${item.canEdit 
            ? html`<button>Edit</button><button @click=${onClick.bind(null, item.id)}>Delete</button>` 
            : null
        }
    </td> 
</tr>`;
