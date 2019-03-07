/*
 * https://medium.com/@e_mad_ehsan/getting-started-with-puppeteer-and-chrome-headless-for-web-scrapping-6bf5979dee3e
 */

const puppeteer = require('puppeteer-core');

function sleep(ms){
    return new Promise(resolve=>{
        setTimeout(resolve,ms)
    })
}

async function run() {
    const browser = await puppeteer.launch({args:['--no-sandbox','--remote-debugging-address=0.0.0.0','--remote-debugging-port=9222',],executablePath: '/usr/bin/chromium-browser'});
    const page = await browser.newPage();
    await page.goto('https://agetic.gob.bo');
    console.log('sleeping  ...')
    await sleep(7000);
    await page.goto('https://mbasic.facebook.com');
    console.log('sleeping  ...')
    await sleep(7000);
    await page.goto('https://twitter.com');
    console.log('sleeping  ...')
    await sleep(7000);
    await page.goto('https://web.whatsapp.com');
    //browser.close();
    return page;
}

run();
