import {test} from "@playwright/test"
// test("test1",async({page})=>{
//   await page.goto("https://demoapps.qspiders.com/ui/button/buttonDouble?sublist=2")
//   await page.locator("#btn_a").click({button:"right", clickCount:2, force:true })
//   await page.locator("#btn_a").dblclick()
//   // await page.locator('//img[@class="w-5 h-5 mt-5 ml-3 cursor-pointer "]').hover()
//   await page.locator("#btn_a").hover()
//   await page.mouse.down()
//   await page.mouse.up()
// })
// test("test2",async({page})=>{
//   await page.goto("https://demoapps.qspiders.com/ui/button/buttonDisabled?sublist=4",{timeout:30000})
//   // await page.locator("#submit").click({force:true})
//   await page.locator("#submit").dispatchEvent("click")
// })
   
// test("test3",async({page})=>{
//   await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2",{timeout:30000})
  // await page.locator("#submit").click({force:true})
  // await page.locator("#submit").dispatchEvent("click")
  // await page.locator('//div[text()="Mobile Charger"]').dragTo(page.locator('//div[text()="Mobile Accessories"]/parent::div'))
  // await page.locator('//div[text()="Mobile Cover"]').dragTo(page.locator('//div[text()="Mobile Accessories"]/parent::div'))
  // await page.locator('//div[text()="Laptop Charger"]').dragTo(page.locator('//div[text()="Laptop Accessories"]/parent::div'))
  // await page.locator('//div[text()="Laptop Cover"]').dragTo(page.locator('//div[text()="Laptop Accessories"]/parent::div'))

  // await page.mouse.down()
  // await page.locator("//*[contains(@class,'draggable')]").hover()
  // await page.mouse.up()

// })

test("test4",async({page})=>{
  await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabVertical",{timeout:30000})
  await page.locator('//input[@type="checkbox"]').scrollIntoViewIfNeeded()
  await page.locator('//input[@type="checkbox"]').uncheck()
  await page.mouse.move(100,100) 
  // here instead of move use hover as in move cordinates should be known
})