import {test} from "playwright/test"
// test("standard dropdoen",async({page})=>{
//   await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
//   await page.locator("#country_code").selectOption({value:"+91"})
//   await page.locator("#select3").selectOption({value:"India"})
//   await page.locator("#select5").selectOption({value:"Rajasthan"})
//   await page.locator("//label[@for='cities']/following-sibling::select").selectOption({value:"Jaipur"})
// })

// test("multi select",async({page})=>{
//   await page.goto("https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1")
//   await page.locator('#select-multiple-native').selectOption([{
//     value:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
//   },{index:3},{}])
// })

// test("custom dropdown",async({page})=>{
//   await page.goto("https://www.myntra.com/shoes?rawQuery=shoes")
//   await page.locator('//div[@class="sort-sortBy"]').click({force:true})
//   await page.waitForTimeout(3000)
//   await page.locator('//label[@class="sort-label"]').first().waitFor()
//   let options = await page.locator('//label[@class="sort-label"]').all()

//   for(let opt of options){
//     let text = await opt.textContent()
//     console.log(text);
//     if(text?.includes("Better ")){
//       await opt.click()
//       break;
//     }
//   }
// })

test ("auto dropdown",async({page})=>{
  await page.goto("https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_5szpgfto9i_e&adgrpid=155259813593&hvpone=&hvptwo=&hvadid=674893540034&hvpos=&hvnetw=g&hvrand=13054739904787089898&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9061786&hvtargid=kwd-64107830&hydadcr=14452_2316413&gad_source=1")
  await page.locator("#twotabsearchtextbox").click()
  await page.locator("#twotabsearchtextbox").fill("shoes")
  let options = await page.locator(".left-pane-results-container").all()

  for (let opt of options) {
    const text = await opt.textContent();
    console.log(text);

    if (text?.includes("women")) {
      await opt.click();
      break; 
    }
  }
  // // await suggestionList.waitFor({ state: "visible" });
  // let targetOption = await page.locator(".s-suggestion-container", { hasText: "shoes for women" })
  
  // await targetOption.click();
  // // await page.locator("//div[@aria-label=shoes for women").click()
})