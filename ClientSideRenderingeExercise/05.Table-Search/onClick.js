export function onClick() {
    let tableRows = document.querySelector('.container tbody').children;
    let searchText = document.getElementById('searchField');

    let search = searchText.value;
    searchText.value = '';

    for (let row of tableRows) {
        row.classList.remove('select');
        if (row.textContent.toLowerCase().includes(search.toLowerCase())) {
            row.classList.add('select');
        }
    }
}

