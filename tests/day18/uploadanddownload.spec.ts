import {test} from "@playwright/test"
import path from "path"
test("upload file", async({page}) => {
  console.log(__dirname);
  console.log(__filename);
  await page.goto("https://testautomationpractice.blogspot.com/")
  // await page.locator('//input[@id="singleFileInput"]').setInputFiles("C:/Akshita Jain - 6768898/tests/uploadfile/demo.txt")
  // // await page.locator('//input[@id="singleFileInput"]').setInputFiles("file:///C:/Users/91946/Documents/22BCON270.pdf")
  // await page.getByRole("button",{name:"Upload Single File"}).click()
  // await page.waitForTimeout(3000)

  await page.locator('//input[@id="singleFileInput"]').setInputFiles(path.join(__dirname,"../../demo.txt"))
  await page.getByRole("button",{name:"Upload Single File"}).click()

  // await page.locator("#multipleFilesInput").setInputFiles([
  //   "C:/Akshita Jain - 6768898/tests/uploadfile/demo.txt" ,
  //   "C:/Akshita Jain - 6768898/tests/uploadfile/demo1.xlsx"
  // ])
})