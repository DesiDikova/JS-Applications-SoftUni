import { html, render } from 'https://unpkg.com/lit-html?module';

        //1. СЪЗДАВАМ РЪЧНО "р" ЕЛЕМЕНТ
// const p = document.createElement('p');
// p.textContent = 'Hello, world!';

        //2. СЪЗДАВАМ "р" ЕЛЕМЕНТ ЧРЕЗ HTML
// render се използва в комбинация с html; html е т.нар.тагнат темплейтинг литерал (``), или това е функция, която се използва с темплейтинг литерал (``)
// const p = html `<p>Hello world!</p>`;

        //3. СЪЗДАВАМ "р" ЕЛЕМЕНТ ЧРЕЗ ИЗПОЛЗВАНЕ НА ПРОМЕНЛИВА "name"
// const name = 'Peter';
// const p = html `<p>Hello ${name}!</p>`;

//render очаква да получи две неща: Първо - съдържание, което искме да визуализираме; Второ - елементът, в който искаме да го сложим
// render(p, document.querySelector('main')); //сложи р в querySelector('main')
// render(p, document.querySelector('nav')); 


        //4. СЪЗДАВАМ "р" ЕЛЕМЕНТ - ДИНАМИЧЕН ВАРИАНТ
// function createP(name) { 
//     return html `<p>Hello ${name}!</p>`;
// }

// render(createP('world'), document.querySelector('main'));
// render(createP('Peter'), document.querySelector('nav')); 

        //5. ПО КОНВЕНЦИЯ: СЪЗДАВАМ "р" ЕЛЕМЕНТ ЧРЕЗ АНОНИМНА ФУНКЦИЯ В ПРОМЕНЛИВА
// const p = name => html `<p>Hello ${name}!</p>`;

// render(p('world'), document.querySelector('main'));
// render(p('Peter'), document.querySelector('nav')); 


        //6. Стойности може да подаваме и на АТРИБУТИТЕ
// const p = (name, className) => html`<p class=${className}>Hello ${name}!</p>`;

// render(p('world', 'greeting'), document.querySelector('main'));
// render(p('Peter', 'content'), document.querySelector('nav'));


        //7. СЪЗДАВАМ input ПОЛЕ, което e булев атрибут и ВИНАГИ се приема, че е true, използване ?, за да зададем true или false за атрибута
// const p = (name, className) => html`<p class=${className}>Hello ${name}!</p>`;
// const input = (disabled) => html`<input ?disabled=${disabled}>`;

// render(p('Peter', 'content'), document.querySelector('nav'));
// //render(input(true), document.querySelector('main')); //НЕ може да пишем в input полето
// render(input(false), document.querySelector('main')); //МОЖЕ да пишем в input полето


        //8. МОЖЕ да сетваме стойности на ПРОПЪРТИТАТА чрез .value
// const p = (name, className) => html`<p class=${className}>Hello ${name}!</p>`;
// const input = (value) => html`<input .value=${value}>`;

// render(p('Peter', 'content'), document.querySelector('nav'));
// render(input('hello'), document.querySelector('main')); 


        //9. МОЖЕ да подадем ОБЕКТ и на обекта да му вадим стойностите
const p = (name, className) => html`<p class=${className}>Hello ${name}!</p>`;
const input = (data) => html`<input .value=${data.value}>`;
        
render(p('Peter', 'content'), document.querySelector('nav'));
render(input({value: 'hello'}), document.querySelector('main')); 
 

