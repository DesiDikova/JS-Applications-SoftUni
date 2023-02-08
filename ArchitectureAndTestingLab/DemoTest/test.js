// const { chromium } = require('playwright-chromium');
// (async () => {
//     const browser = await chromium.launch(); //стартирай браузъра
//     const page = await browser.newPage(); //отвори нова страница
//     await page.goto('https://google.com/'); //странице, отиди на https://google.com
//     await page.screenshot({ path: `example.png` }); //странице, направи скрийншот и го запази в example.png
//     await browser.close(); //браузър затвори се
// })();


const { chromium } = require('playwright-chromium');
const { expect } = require('chai');
const { describe } = require('node:test');

let browser, page;
describe('E2E tests', async function () {
    this.timeout(5000);
    
    before(async () => { browser = await chromium.launch(); });
    after(async () => { await browser.close(); });
    beforeEach(async () => { page = await browser.newPage(); });
    afterEach(async () => { await page.close(); });
});    