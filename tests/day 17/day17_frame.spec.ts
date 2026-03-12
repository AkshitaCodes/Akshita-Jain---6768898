import { test } from '@playwright/test';

test('frame', async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames/")
  let frame = await page.frames()
  console.log(frame.length);
  
  for(let i of frame){
    console.log(await i.title())
  }
  await page.title()
  let frame1 = await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"})  //we can user name,visible text and url only
  await frame1?.locator('//input[@name="mytext1"]').fill("Akshita")


let frame2 = await page.frameLocator('//frame[@src="frame_2.html"]')   //prefer this method instead of contentframe
await frame2.locator('//input[@name="mytext2"]').fill('abcd')

let frame3 = page.frameLocator('//frame[@src="frame_3.html"]');
let innerFrame = frame3.frameLocator('//frame[@class="o3Dpx"]');
await innerFrame.locator('//div[@class="geS5n"]').check();




// await page.locator('//frame[@src="frame_2.html"]').contentFrame()
})
