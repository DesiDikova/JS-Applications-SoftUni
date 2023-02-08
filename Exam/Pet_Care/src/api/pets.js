import { del, get, post, put } from "./api.js";

export async function getAllPets() {
    return get('/data/pets?sortBy=_createdOn%20desc&distinct=name');
}

export async function getPetById(id) {
    return get ('/data/pets/' + id);
}

// export async function getDonationPetId(petId, userId) {
//     return get (`/data/donation?where=petId%3D%22${petId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
// }

export async function createPetCard(pet) {
    return post ('/data/pets', pet);
}

export async function editPet(id, pet) {
    return put ('/data/pets/' + id, pet); 
}

export async function deletePets(id) {
    return del ('/data/pets/' + id);
}

