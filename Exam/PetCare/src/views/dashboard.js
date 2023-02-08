import { getAllPosts } from '../api/posts.js'
import {html} from '../lib.js'



const dashboardTemplate = (posts) => html`<section id="dashboard">
<h2>Collectibles</h2>
<ul class="card-wrapper">
  <!-- Display a li with information about every post (if any)-->
 ${posts.length == 0 ?html`<h2>There are no items added yet.</h2>` :
  posts.map(shoeCard)}
</ul>


</section>
`
const shoeCard = (post) => html ` <li class="card">
<img src="${post.imageUrl}" alt="travis" />
<p>
  <strong>Brand: </strong><span class="brand">${post.brand}</span>
</p>
<p>
  <strong>Model: </strong
  ><span class="model">${post.model}</span>
</p>
<p><strong>Value:</strong><span class="value">${post.value}</span>$</p>
<a class="details-btn" href="/dashboardPage/${post._id}">Details</a>
</li>`

export async function dashboardView(ctx){
    const shoes = await getAllPosts()
ctx.render(dashboardTemplate(shoes))



}