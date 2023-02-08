const view = [...document.querySelectorAll('.view-section')]; //превръщаме node list-a в масив

function hideAll() {
    view.forEach(v => v.style.display = 'none');
}

export function showView(section) {
    hideAll();
    section.style.display = 'block';
}

export function spinner() {
    const element = document.createElement('p');
    element.innerHTML = 'Loading &hellip;';

    return element;
}

export function updateNav() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        document.querySelectorAll('.user').forEach(m => m.style.display = 'inline-block');
        document.querySelectorAll('.guest').forEach(m => m.style.display = 'none');
    } else {
        document.querySelectorAll('.user').forEach(m => m.style.display = 'none');
        document.querySelectorAll('.guest').forEach(m => m.style.display = 'inline-block');
    }
}