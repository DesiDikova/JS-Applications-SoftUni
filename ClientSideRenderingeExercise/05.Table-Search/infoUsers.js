import { html, render } from 'https://unpkg.com/lit-html?module';

export const infoUsers = (users) => html`
${users.map((user) => html`
<tr>
   <td>${user.firstName} ${user.lastName}</td>
   <td>${user.email}</td>
   <td>${user.course}</td>
</tr>`)}`;