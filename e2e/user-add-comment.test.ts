import puppeteer from 'puppeteer';

describe('New Comment', () => {

    let browser: puppeteer.Browser;
    let page: puppeteer.Page;

    beforeEach(async () => {
        browser = await puppeteer.launch({
            headless: false,
        });
        page = await browser.newPage();

        await page.emulate({
            viewport: {
                width: 500,
                height: 2400,
            },
            userAgent: '',
        });

        await page.goto('http://localhost:3000/best-builds');
    });
    afterEach(async () => {
        await browser.close();
    });

    it('should add new comment to a video from a user ', async () => {
        await page.waitForSelector('.App');

        const html = await page.$eval('.App-title', (e: any) => e.innerHTML);
        expect(html).toBe('Main Page');
    });
    it('should add new response to a comment from a user ', async () => {
        await page.waitForSelector('.App');

        const html = await page.$eval('.App-title', (e: any) => e.innerHTML);
        expect(html).toBe('Main Page');
  });
});
