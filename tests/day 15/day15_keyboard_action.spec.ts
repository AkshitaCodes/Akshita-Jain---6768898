// import {test} from "@playwright/test"
// test("test",async({page})=>{
//   await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
//   await page.getByPlaceholder('Enter your name').click();
//   await page.locator("#name").type("Akshita");


// })
import { test, expect } from '@playwright/test';

test('Keyboard actions demo', async ({ page }) => {

  await page.goto('https://demoapps.qspiders.com/ui?scenario=1',{timeout:30000});
  await page.getByPlaceholder('Enter your name').click();
  await page.locator("#name").click();
  await page.locator("#name").type("Akshita");
  await page.keyboard.press('Tab');
  await page.keyboard.insertText("AkshitaJain@example.com");
  await page.keyboard.press('Control+A');
  await page.keyboard.press('Control+C');
  await page.keyboard.press('Tab');
  await page.keyboard.down('Shift');
  await page.keyboard.type('india');
  await page.keyboard.up('Shift');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Control+V');
  await page.keyboard.press('Enter');

});