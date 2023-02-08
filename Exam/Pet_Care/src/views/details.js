import { deletePets, getPetById } from '../api/pets.js';
import { html } from '../lib.js';
import { getUserData } from '../util.js';

const detailsTemplate = (pet, hasUser, onDelete) => html `
<section id="detailsPage">
    <div class="details">
        <div class="animalPic">
        <img src="${pet.image}">
        </div>
        <div>
            <div class="animalInfo">
                <h1>Name: ${pet.name}</h1>
                <h3>Breed: ${pet.breed}</h3>
                <h4>Age: ${pet.breed}</h4>
                <h4>Weight: ${pet.weight}</h4>
                <h4 class="donation">Donation: 0$</h4>
            </div>       
            ${hasUser ? html`
            <div class="actionBtn">
                <a href="/edit/${pet._id}" class="edit">Edit</a>
                <a  @click=${onDelete} href="javascript:void(0)" class="remove">Delete</a>
                <a href="#" class="donate">Donate</a>
            </div>
        ` : ''}
        </div>
    </div>
</section>`;

export async function detailsView(ctx) {
    const pet = await getPetById(ctx.params.id);

    // const hasUser = Boolean(ctx.user);
    // const isOwner = hasUser && ctx.user._id == pet._ownerId;
    const hasUser = getUserData();

    ctx.render(detailsTemplate(pet, hasUser, onDelete));

    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this pet?');

        if (choice) {
            await deletePets(ctx.params.id)
            ctx.page.redirect('/');
        }
    }
}

            // ${hasUser ? html`
            // <div class="actionBtn">
            //     ${isOwner 
            //     ? html`
            //     <a href="/edit/${pet._id}" class="edit">Edit</a>
            //     <a href="javascript:void(0)" class="remove">Delete</a>`
            //     : html `
            //     <a href="#" class="donate">Donate</a>`} 
            // </div>` : ''} 