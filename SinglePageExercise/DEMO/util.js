//     //ПЪРВИ ВАРИАНТ ЗА export
// export function sum(a, b) {
//     return a + b;
// }

    //ВТОРИ ВАРИАНТ, възможност да се export - ват повече функции наведнъж (имаме списък с всички експортнати функции на едно място)
function sum(a, b) {
    return a + b;
}

function product(a, b) {
    return a * b;
}

export {
    sum, 
    product
}
