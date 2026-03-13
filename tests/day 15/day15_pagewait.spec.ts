import { test, expect } from '@playwright/test';
test('Page wait', async ({ browser }) => {
  let context=await browser.newContext()
  let page = await context.newPage()
  await page.goto('https://www.flipkart.com');
  await page.locator("//span[@class='b3wTLE']").click()
  await page.locator("//input[@class='nw1UBF vlzwn25']").first().click()
  await page.locator("//button[@class=XFwm1H']").first().click()
  // await page.waitForNavigation()
  await page.url()
  let [page2] = await Promise.all([
    page.waitForNavigation(),
    page.locator("//a[@class='k7wcnx']").first().click()
  ])
  await page.url()
  await page2.url()

})
