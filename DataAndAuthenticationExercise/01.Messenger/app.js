function attachEvents() {

    // ПЪТВИ ВАРИАНТ
    //1.взимам наличните бутоните и закрепят eventListener;
    //2.създавам функция addComment към бутона submit, чрез която правя POST заявка с author и content към дадения url;
    //3.съдавам функция displayCommanets към бутона refresh, чрез която правя GET заявка и показвам всички съобщения в textArea;

    // document.getElementById('submit').addEventListener('click', submit);
    // document.getElementById('refresh').addEventListener('click', refresh);

    // const url = 'http://localhost:3030/jsonstore/messenger';

    // function submit() {
    //     const author = document.querySelector('[name="author"]');
    //     const content = document.querySelector('[name="content"]');

    //     if (!author.value || !content.value) {
    //         return;
    //     }

    //     fetch(url, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             author: author.value.trim(),
    //             content: content.value.trim(),
    //         }),
    //     })
    //         .then(response => {
    //             if (response.status !== 200) {
    //                 throw new Error('Response submit dont value');
    //             }

    //             return response.json();
    //         })
    //         .catch(err => alert(err));

    //     author.value = '';
    //     content.value = '';

    //     refresh();
    // }

    // function refresh() {
    //     const textArea = document.getElementById('messages');
    //     const comments = [];

    //     fetch(url)
    //         .then(response => {
    //             if (response.status !== 200) {
    //                 throw new Error('Error response it refresh');
    //             }

    //             return response.json();
    //         })
    //         .then(data => {
    //             Object.values(data).forEach(author => comments.push(`${author.author}: ${author.content}`));

    //             textArea.value = comments.join('\n');
    //         })
    //         .catch(err => alert(err))
    // }


    //ВТОРИ ВАРИАНТ С ASYNC AWAIT

        document.getElementById('refresh').addEventListener('click', getRequest);
        document.getElementById('submit').addEventListener('click', save);
    }

    function refresh(data) {
        const textArea = document.getElementById('messages');
        const content = Object.values(data).map(entry => `${entry.author}: ${entry.content}`).join('\n');
        textArea.textContent = content;
    }

    function save() {
        const author = document.querySelector('input[name="author"]');
        const content = document.querySelector('input[name="content"]');

        const body = {
            author: author.value.trim(),
            content: content.value.trim(),
        }

        author.value = "";
        content.value = "";

        postRequest(body);
    }

    async function getRequest() {
        const url = 'http://localhost:3030/jsonstore/messenger';
        const response = await fetch(url);
        const data = await response.json();

        refresh(data);
    }

    async function postRequest(body) {
        const url = 'http://localhost:3030/jsonstore/messenger';
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
        
        getRequest();
}

attachEvents();