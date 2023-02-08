function attachEvents() {
    document.getElementById('btnLoadPosts').addEventListener('click', getPosts);
    document.getElementById('btnViewPost').addEventListener('click', getComments);
}

async function getPosts() {

    //взимам всички налични данни чрз fetch, създавам optionи го наливам с получените данни от завката
    const postsElement = document.getElementById('posts');
    const url = 'http://localhost:3030/jsonstore/blog/posts';

    const response = await fetch(url);
    const data = await response.json();

    Object.values(data).forEach(info => {
        let title = info.title;
        let id = info.id;

        let createOptionElement = document.createElement('option');
        createOptionElement.value = id;
        createOptionElement.textContent = title;
        postsElement.appendChild(createOptionElement);
    });
}

async function getComments() {

    //1. Взимам коректните коментари, чрез fetch и ги закрепвам за post-comments
    const urlComments = 'http://localhost:3030/jsonstore/blog/comments';
    const postsElementId = document.getElementById('posts').value;
    const postCommentsElement = document.getElementById('post-comments');

    const responseComments = await fetch(urlComments);
    const dataComments = await responseComments.json();

    const currentComments = Object.values(dataComments).filter(comment => postsElementId == comment.postId);
    postCommentsElement.replaceChildren();

    currentComments.forEach(t => {
        const liElement = document.createElement('li');
        liElement.textContent = t.text;
        postCommentsElement.appendChild(liElement);
    });

    //2. Взимам title и body, чрез fetch, закрепвам ги съответно за post-title и post-body
    const urlPosts = 'http://localhost:3030/jsonstore/blog/posts';
    const postTitle = document.getElementById('post-title');
    const postBody = document.getElementById('post-body');

    const responsePosts = await fetch(urlPosts);
    const dataPosts = await responsePosts.json();

    const currentInfo = Object.values(dataPosts).filter(info => postsElementId == info.id)
    currentInfo.forEach(info => {
        postTitle.textContent = info.title;
        postBody.textContent = info.body;
    });   
}

attachEvents();