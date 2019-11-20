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

  it('should select a video and view details ', async () => {
    await page.waitForSelector('[data-testid="video-item-1"]');
    const button = await page.$('[data-testid="video-item-1"]');
    if (button) {
      await button.evaluate((element: Element) => element.click());
    }

    const html = await page.$eval('[data-testid="video-details-title-1"]', (e: any) => e.innerHTML);
    expect(html).toBe('La amiga imaginaria y otros relatos de terror');
  });
});
