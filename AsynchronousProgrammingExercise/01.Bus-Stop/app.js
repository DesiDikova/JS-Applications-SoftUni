//FETCH
// function getInfo() {
//     //1. get all elements
//     //2. fetch data
//     //3. clear bus info
//     //4. forEach bus, create li element 
//     //5. append li to ul
//     //6. error - name changes to Error

//     const url = 'http://localhost:3030/jsonstore/bus/businfo';
//     const stopIdElement = document.getElementById('stopId');
//     const stopNameElement = document.getElementById('stopName');
//     const busesElement = document.getElementById('buses');

//     fetch(`${url}/${stopIdElement.value}`)
//         .then(response => response.json())
//         .then(data => {

//             let busInfo = data.buses;
//             let nameBus = data.name;

//             busesElement.innerHTML = '';
//             stopNameElement.textContent = nameBus;

//             Object.entries(busInfo).forEach(bus => {
//                 let busId = bus[0];
//                 let time = bus[1];

//                 liElement = document.createElement('li');
//                 liElement.textContent = `Bus ${busId} arrives in ${time} minutes`;
//                 busesElement.appendChild(liElement);
//             });           
//         })
//         .catch(error => {
//             busesElement.innerHTML = '';
//             stopNameElement.textContent = 'Error';
//         });
// }


//ASYNC - AWAIT
async function getInfo() {

    //1. get all elements
    //2. fetch data
    //3. clear bus info
    //4. forEach bus, create li element 
    //5. append li to ul
    //6. error - name changes to Error

    const url = 'http://localhost:3030/jsonstore/bus/businfo';
    const stopIdElement = document.getElementById('stopId');
    const stopNameElement = document.getElementById('stopName');
    const busesElement = document.getElementById('buses');

    try {
        const response = await fetch(`${url}/${stopIdElement.value}`);
        const data = await response.json();

        busesElement.replaceChildren();

        let busInfo = data.buses;
        let name = data.name;
        stopNameElement.textContent = name;

        Object.entries(busInfo).forEach(bus => {
            let busId = bus[0];
            let time = bus[1];

            let liElement = document.createElement('li');
            liElement.textContent = `Bus ${busId} arrives in ${time} minutes`;
            busesElement.append(liElement);
        });
    } catch (error) {
        busesElement.replaceChildren();
        stopNameElement.textContent = 'Error';
    }
}