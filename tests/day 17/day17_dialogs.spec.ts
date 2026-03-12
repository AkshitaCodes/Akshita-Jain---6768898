import {test} from "@playwright/test"
test("",async({page})=>{
  page.on("dialog",async(d)=>{
    // await d.accept("gvschbs")
    if(d.type()=="alert"){
      await d.accept("")
    }
    else if(d.type()=="confirm"){
      await d.dismiss()
      await d.message()
    }
    else if (d.type() == "prompt") {

      if(d.defaultValue() == "Harry Potter") {
          console.log(await d.defaultValue());
          await d.accept();
      } 
      else {
          await d.accept("tom");
          // console.log(d.defaultValue());
    
      }

    }

    //for confirmation alert use confirm
    //for promt alert use prompt
  })
  await page.goto("https://testautomationpractice.blogspot.com/")
  await page.locator('//button[@id="alertBtn"]').click()
  await page.getByRole("button",{name:"Confirmation Alert"}).click()
  await page.getByRole("button",{name:"Prompt Alert"}).click()

  //page.on("dialog",()=>{})
  //page.("event",()=>{})= these both are used for dialogs
})

