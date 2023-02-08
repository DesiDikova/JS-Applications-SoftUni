// FETCH
function solve() {

    //1. get all elemnts;
    //2. depart function - 1.fetch; 2.update infoElement with busId; 3.departBtnElement.disabled = true; 4.arriveBtnElement.disabled = false
    //3. arrive function - 1.departBtnElement.disabled = false; 2.arriveBtnElement.disabled = true; 3.update infoElement with busId

    const url = 'http://localhost:3030/jsonstore/bus/schedule';
    const infoElement = document.querySelector('.info');
    const departBtnElement = document.getElementById('depart');
    const arriveBtnElement = document.getElementById('arrive');

    let busId = {
        next: 'depot',
    }

    function depart() {
        fetch(`${url}/${busId.next}`)
            .then(response => response.json())
            .then(data => {

                // чупим референцията; взимаме полетата като data, но нямаме референция към този обект (правя копие на обекта и работя с него)
                // busId = JSON.parse(JSON.stringify(data)); 
                busId = data;
                infoElement.textContent = `Next stop ${busId.name}`;
            })
        departBtnElement.disabled = true;
        arriveBtnElement.disabled = false;
    }

    function arrive() {
        departBtnElement.disabled = false;
        arriveBtnElement.disabled = true;
        infoElement.textContent = `Arriving at ${busId.name}`;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();


// //ASYNC - AWAI
// function solve() {

//     //1. get all elemnts;
//     //2. depart function - 1.fetch; 2.update infoElement with busId; 3.departBtnElement.disabled = true; 4.arriveBtnElement.disabled = false
//     //3. arrive function - 1.departBtnElement.disabled = false; 2.arriveBtnElement.disabled = true; 3.update infoElement with busId

//     const url = 'http://localhost:3030/jsonstore/bus/schedule';
//     const infoElement = document.querySelector('.info');
//     const departBtnElement = document.getElementById('depart');
//     const arriveBtnElement = document.getElementById('arrive');

//     let busId = {
//         next: 'depot',
//     }

//     async function depart() {
//         try {
//             const response = await (fetch(`${url}/${busId.next}`));
//             const data = await response.json();

//             busId = data;

//             infoElement.textContent = `Next stop ${data.name}`;
//             departBtnElement.disabled = true;
//             arriveBtnElement.disabled = false;
//         } catch (error) {
//             console.log(error)
//         }
//     }

//     async function arrive() {
//         try {
//             departBtnElement.disabled = false;
//             arriveBtnElement.disabled = true;
//             infoElement.textContent = `Arriving at ${data.name}`
//         } catch (error) {
//             console.log(error)
//         }
//     }

//     return {
//         depart,
//         arrive
//     };
// }

// let result = solve();