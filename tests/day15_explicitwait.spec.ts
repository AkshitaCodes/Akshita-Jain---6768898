import { test, expect } from '@playwright/test';

test('Explicit Wait', async ({ page }) => {

  await page.goto('https://www.amazon.in');

  await page.waitForSelector('text=Fresh', { timeout: 20000 });

  await page.click('text=Fresh');

});