import {test} from "@playwright/test"
import Example from "C:/Akshita Jain - 6768898/test-data/PageObjectModel/example.page.ts"
test("", async({page}) => {

    let examplepage = new Example(page)

    await page.goto("https://practicetestautomation.com/practice-test-login/")

    await examplepage.usernameTF.fill("Akshita")

})