import { createPost } from '../api/posts.js'
import {html} from '../lib.js'
import { getUserData } from '../util.js'



const createTemplate = (onSubmit) => html`<section id="create">
<div class="form">
  <h2>Add item</h2>
  <form @submit = ${onSubmit} class="create-form">
    <input
      type="text"
      name="brand"
      id="shoe-brand"
      placeholder="Brand"
    />
    <input
      type="text"
      name="model"
      id="shoe-model"
      placeholder="Model"
    />
    <input
      type="text"
      name="imageUrl"
      id="shoe-img"
      placeholder="Image url"
    />
    <input
      type="text"
      name="release"
      id="shoe-release"
      placeholder="Release date"
    />
    <input
      type="text"
      name="designer"
      id="shoe-designer"
      placeholder="Designer"
    />
    <input
      type="text"
      name="value"
      id="shoe-value"
      placeholder="Value"
    />

    <button type="submit">post</button>
  </form>
</div>
</section>
`

export function createView(ctx){

ctx.render(createTemplate(onSubmit))

async function onSubmit(e){
e.preventDefault()

const formData = new FormData(e.target)

const post = {
    brand: formData.get('brand'),
    model: formData.get('model'),
    imageUrl: formData.get('imageUrl'),
    release: formData.get('release'),
    designer: formData.get('designer'),
    value: formData.get('value')
}


if(!post.brand || !post.model || !post.imageUrl || !post.release|| !post.designer || !post.value){
    return alert('all inputs should be filled!')
}

await createPost(post)
e.target.reset()
ctx.page.redirect('/dashboardPage')
}


}