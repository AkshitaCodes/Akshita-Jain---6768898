// import { test } from '@playwright/test';
// test('notification', async ({ browser}) => {
//   await page.goto("https://demoapps.qspiders.com/ui/browserNot?sublist=0")
//   await page.locator('//button[@id="browNotButton"]').click()
//   let context = await browser.newContext({permissions:["notifications"]})
//   let result=await page.evaluate(()=>){
//     return Notification.requestPermission()
//   }
// })

import { test } from '@playwright/test';

test('notification', async ({ browser }) => {

  const context = await browser.newContext({
    permissions: ['notifications']
  });

  const page = await context.newPage();

  await page.goto("https://demoapps.qspiders.com/ui/browserNot?sublist=0");

  await page.locator('//button[@id="browNotButton"]').click()

  const result = await page.evaluate(() => {
    return Notification.requestPermission();
  });

  console.log(result);

});