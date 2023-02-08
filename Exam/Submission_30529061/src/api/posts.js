import { del, get, post, put } from './api.js'



export async function getAllPosts() {

    return get('/data/shoes?sortBy=_createdOn%20desc')
}

export async function createPost(posts){

return post('/data/shoes', posts)
}

export async function getPostById(id){
    return get('/data/shoes/' + id)
}

export async function deletePost(id){
    return del('/data/shoes/' + id)
}

export async function updatePost(id, post){
    return put('/data/shoes/' + id, post)
}

export async function searchItem(queryString){
    return get(`/data/shoes?where=brand%20LIKE%20%22${queryString}%22`)
}