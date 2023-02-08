const baseUrl = 'http://localhost:3030/jsonstore/collections/books';

export async function getBooks() {
    let response = await fetch(baseUrl);
    let data = await response.json();

    return data;
}

getBooks()