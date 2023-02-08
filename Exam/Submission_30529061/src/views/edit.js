
import { getPostById, updatePost } from '../api/posts.js';
import {html} from '../lib.js'



const EditTemplate = (post, onSubmit) => html`
<section id="edit">
<div class="form">
  <h2>Edit item</h2>
  <form @submit = ${onSubmit} class="edit-form">
    <input
      type="text"
      name="brand"
      id="shoe-brand"
      placeholder="Brand"
      value = ${post.brand}
    />
    <input
      type="text"
      name="model"
      id="shoe-model"
      placeholder="Model"
      value = ${post.model}
    />
    <input
      type="text"
      name="imageUrl"
      id="shoe-img"
      placeholder="Image url"
      value = ${post.imageUrl}
    />
    <input
      type="text"
      name="release"
      id="shoe-release"
      placeholder="Release date"
      value = ${post.release}
    />
    <input
      type="text"
      name="designer"
      id="shoe-designer"
      placeholder="Designer"
      value = ${post.designer}
    />
    <input
      type="text"
      name="value"
      id="shoe-value"
      placeholder="Value"
      value = ${post.value}
    />

    <button type="submit">post</button>
  </form>
</div>
</section>

`


export async function EditView(ctx){
    
    const post = await getPostById(ctx.params.id)
ctx.render(EditTemplate(post, onSubmit))


async function onSubmit(event){
    event.preventDefault()
    const formData = new FormData(event.target)

const post = {
    brand: formData.get('brand'),
    model: formData.get('model'),
    imageUrl: formData.get('imageUrl'),
    release: formData.get('release'),
    designer: formData.get('designer'),
    value: formData.get('value')
  
}
if(!post.brand || !post.model || !post.imageUrl || !post.release|| !post.designer || !post.value){
    return alert('all fields are required!')
}

await updatePost(ctx.params.id, post)
event.target.reset()
ctx.page.redirect('/dashboardPage/' + ctx.params.id)
}
}
