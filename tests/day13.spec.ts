import { test } from '@playwright/test';

test('Locate name and price together', async ({ page }) => {

  await page.goto("https://www.amazon.in");

  await page.locator("//input[@id='twotabsearchtextbox']").fill("phones");
  await page.locator("//input[@id='nav-search-submit-button']").click();

  await page.waitForSelector("//div[@data-component-type='s-search-result']");

  const data = await page.locator(
    "//div[@data-component-type='s-search-result']//h2/span | //div[@data-component-type='s-search-result']//span[@class='a-price-whole']"
  ).allTextContents();

  console.log(data);

});