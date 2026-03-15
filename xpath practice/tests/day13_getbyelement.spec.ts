import {test} from "@playwright/test"

test("get by methods", async({page})=>{
  await page.goto("https://practicetestautomation.com/practice-test-login/")
  // await page.getByLabel("Username",{exact:true}).fill("student")
  // await page.getByLabel("password").fill("password123")
  // await page.getByText("Submit").first().click()

  await page.getByRole("textbox",{name:"username",exact:true})
  await page.getByRole("textbox",{name:"password",exact:true})
  await page.getByRole("button",{class:"btn",exact:true})
  await page.getByAltText("image",{alt:"Practice Test Automation",exact:true})
})