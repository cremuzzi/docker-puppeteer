/* 
 * https://medium.com/@e_mad_ehsan/getting-started-with-puppeteer-and-chrome-headless-for-web-scrapping-6bf5979dee3e
 */

const puppeteer = require('puppeteer-core');

async function run() {
      const browser = await puppeteer.launch({args:['--no-sandbox'],executablePath: '/usr/bin/chromium-browser'});
      const page = await browser.newPage();
      
      await page.goto('https://github.com');
      await page.screenshot({ path: 'screenshots/github.png' });
      
      browser.close();
}

run();
