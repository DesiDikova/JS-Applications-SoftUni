import { html } from '../lib.js';
import { register } from '../api/users.js';
// import { notify } from '../notify.js';

const registerTemplate = (onSubmit) => html`
<section id="register-page" class="register">
<form @submit=${onSubmit} id="register-form" action="" method="">
    <fieldset>
        <legend>Register Form</legend>
        <p class="field">
            <label for="email">Email</label>
            <span class="input">
                <input type="text" name="email" id="email" placeholder="Email">
            </span>
        </p>
        <p class="field">
            <label for="password">Password</label>
            <span class="input">
                <input type="password" name="password" id="password" placeholder="Password">
            </span>
        </p>
        <p class="field">
            <label for="repeat-pass">Repeat Password</label>
            <span class="input">
                <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password">
            </span>
        </p>
        <input class="button submit" type="submit" value="Register">
    </fieldset>
</form>
</section>`;

export function registerView(ctx) {
    ctx.render(registerTemplate(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);

        const email = formData.get('email').trim();
        const password = formData.get('password').trim();
        const repeatPass = formData.get('repeat-pass').trim();

        if (username == '' || email == '' || password == '') {
            return alert('All fields are required!');
        }

        if (password != repeatPass) {
            return alert('Passwords don\'t match!');
        }

        await register(email, password);
        ctx.updateNav();
        ctx.page.redirect('/');
    }
}