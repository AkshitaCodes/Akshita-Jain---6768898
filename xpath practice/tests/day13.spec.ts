import { test } from '@playwright/test';

test('Locate name and price together', async ({ page }) => {

  await page.goto("https://www.amazon.in");

  await page.locator("//input[@id='twotabsearchtextbox']").fill("Samsung phones");
  await page.locator("//input[@id='nav-search-submit-button']").click();

  await page.locator("//span[@class='a-price-whole']').nth(2).innertext();
    await page.locator('//span[@class="a-price-whole"]|//h2[@class="a-size-])


  await page.locator('//span[@class="a-price-whole"]|//h2 [@class="a-size-base-plus a-spacing-none a-color-base

a-text-normal"]/child::span').allInnerTexts()

})
  console.log(data);

});