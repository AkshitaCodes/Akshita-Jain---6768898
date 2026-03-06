import { test, expect } from '@playwright/test';

test('Search phones and filter Android 12', async ({ page }) => {

  // Open Amazon
  await page.goto('https://www.amazon.in');

  // Search for phones
  await page.fill('#twotabsearchtextbox', 'phones');
  await page.keyboard.press('Enter');

  // Wait for results
  await page.waitForSelector("//div[@data-component-type='s-search-result']");

  // Scroll to filters
  await page.mouse.wheel(0, 2000);

  // Select OS filter Android 12.0
  await page.locator("//span[text()='Android 12.0']").click();

  // Wait for page to reload after filter
  await page.waitForTimeout(3000);

});