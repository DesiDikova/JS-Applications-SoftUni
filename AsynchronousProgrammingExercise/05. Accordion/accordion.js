async function solution() {

    //1. fetch all article from server
    //2. if response.ok !== true => Error
    //3. create div element with div class="accordion" from html
    //4. on click fetch detail data
    //5. update html with data

    const mainElement = document.getElementById('main');

    try {
        const url = 'http://localhost:3030/jsonstore/advanced/articles/list';
        let response = await fetch(url);

        let data = await response.json();

        data.forEach(info => {
            let title = info.title;
            let id = info._id;

            let divElement = document.createElement('div');
            divElement.classList.add('accordion');
            divElement.innerHTML =
            `
            <div class="head">
                <span>${title}</span>
                <button class="button" id="${id}" onclick="clickButton(event)">More</button>
            </div> 
            <div class="extra"></div>
            `

            mainElement.appendChild(divElement);
        });
    } catch (error) {
        console.log(error);
    }
}

async function clickButton(e) {
    try {
        let currentTarget = e.currentTarget;
        let url = 'http://localhost:3030/jsonstore/advanced/articles/details/' + currentTarget.id;
        let parent = currentTarget.parentNode.parentNode;
        let div = parent.querySelector('div.extra');

        let response = await fetch(url);

        let data = await response.json();
        
        div.innerHTML = `<p>${data.content}</p>`;


        if (currentTarget.textContent === 'More') {
            currentTarget.textContent = 'Less';
            div.style.display = 'block';
        } else {
            currentTarget.textContent = 'More';
            div.style.display = 'none';
        }
    } catch (error) {
        console.log(error);
    }
}


solution();