import { deletePost, getPostById } from '../api/posts.js'
import {html} from '../lib.js'
import { getUserData } from '../util.js'



const detailsTemplate = (post, isOwner, onDelete) => html`<section id="details">
<div id="details-wrapper">
  <p id="details-title">Shoe Details</p>
  <div id="img-wrapper">
    <img src="${post.imageUrl}" alt="example1" />
  </div>
  <div id="info-wrapper">
    <p>Brand: <span id="details-brand">${post.brand}</span></p>
    <p>
      Model: <span id="details-model">${post.model}</span>
    </p>
    <p>Release date: <span id="details-release">${post.release}</span></p>
    <p>Designer: <span id="details-designer">${post.designer}</span></p>
    <p>Value: <span id="details-value">${post.value}</span></p>
  </div>

  ${isOwner ? html`<div id="action-buttons">
  <a href="/editPage/${post._id}" id="edit-btn">Edit</a>
  <a href="javascript:void(0)" @click = ${onDelete} id="delete-btn">Delete</a>
</div>` : ""}
  <!--Edit and Delete are only for creator-->
  
</div>
</section>
`

export async function detailsView(ctx){
const userData = getUserData()

const post =  await getPostById(ctx.params.id)
const isOwner = userData?.id == post._ownerId
ctx.render(detailsTemplate(post, isOwner, onDelete))

async function onDelete(){

    const choice = confirm('are you sure you want to delete this post?')
    if(choice){
        await deletePost(ctx.params.id)
        ctx.page.redirect('/dashboardPage')
    }
}
}