/* 
 * https://medium.com/@e_mad_ehsan/getting-started-with-puppeteer-and-chrome-headless-for-web-scrapping-6bf5979dee3e
 */

const puppeteer = require('puppeteer-core');

async function run() {
      const browser = await puppeteer.launch({args:['--no-sandbox'],executablePath: '/usr/bin/chromium-browser'});
      const page = await browser.newPage();
      address = 'https://github.com';
      console.log('capturing '+ address); 
      await page.goto(address);
      console.log('page opened'); 
      await page.screenshot({ path: 'img/capture.png' });
      console.log('screenshot taken'); 
      
      browser.close();
}

run();
