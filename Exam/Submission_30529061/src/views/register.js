import { login, register } from '../api/users.js'
import { html } from '../lib.js'



const registerTemplate = (onSubmit) => html`<section id="register">
<div @submit = ${onSubmit}class="form">
  <h2>Register</h2>
  <form class="login-form">
    <input
      type="text"
      name="email"
      id="register-email"
      placeholder="email"
    />
    <input
      type="password"
      name="password"
      id="register-password"
      placeholder="password"
    />
    <input
      type="password"
      name="re-password"
      id="repeat-password"
      placeholder="repeat password"
    />
    <button type="submit">login</button>
    <p class="message">Already registered? <a href="/loginPage">Login</a></p>
  </form>
</div>
</section>
`

export function registerView(ctx) {

    ctx.render(registerTemplate(onSubmit))

    async function onSubmit(e) {
        e.preventDefault()
        const formData = new FormData(e.target)

        const email = formData.get('email')
        const password = formData.get('password')
        const repassword = formData.get('re-password')
if (!email || !password || !repassword) {
    return alert('submit correct data')
}
if(password != repassword){
    return alert('repeat-password is different than password!')
}
 
  await register(email, password)
        ctx.updateNav()
ctx.page.redirect('/')
    }

}