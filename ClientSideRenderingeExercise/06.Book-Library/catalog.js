import { html, render } from 'https://unpkg.com/lit-html?module';

export const dataBooks = (data) => html`
<button id="loadBooks">LOAD ALL BOOKS</button>
<table>
    <thead>
        <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
        </tr>
    </thead>
${data.map((d => 
    html `
    <tbody>
        <tr>
            <td>${d.title}</td>
            <td>${d.author}</td>
            <td>
                <button>Edit</button>
                <button>Delete</button>
            </td>
        </tr>
    </tbody>
</table>`))}`

{/* <form id="add-form">
    <h3>Add book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title...">
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author...">
    <input type="submit" value="Submit">
</form>

<form id="edit-form">
        <input type="hidden" name="id">
        <h3>Edit book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input type="submit" value="Save">
    </form> */}
