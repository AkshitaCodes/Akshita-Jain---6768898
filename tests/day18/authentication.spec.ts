import {test} from "@playwright/test"

// test("Authentication", async({browser}) => {
//   let context = await browser.newContext({httpCredentials:{username:"admin", password:"admin"}})   //use only when the site loaded and gives ppopup
//   let page = await context.newPage()
//   await page.goto("https://basic-auth-git-main-shashis-projects-4fa03ca5.vercel.app/")
// })

test("authentication1",async({browser})=>{
  let context = await browser.newContext({httpCredentials:{username:"admin", password:"admin"}})
  let page = await context.newPage()
  await page.goto("https://the-internet.herokuapp.com/basic_auth")
})