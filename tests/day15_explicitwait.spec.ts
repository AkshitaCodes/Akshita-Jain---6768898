import { test, expect } from '@playwright/test';

test('Explicit Wait', async ({ page }) => {

  await page.goto('https://www.amazon.com');

  await page.locator('[data-csa-c-content-id="nav_cs_fresh"]')
    .waitFor({ state: 'detached' , timeout : 5000});

});