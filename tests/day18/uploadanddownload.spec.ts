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

  await page.locator('//input[@id="singleFileInput"]').setInputFiles(path.join(__dirname,"uploadfile/demo.txt"))
  await page.getByRole("button",{name:"Upload Single File"}).click()

  // await page.locator("#multipleFilesInput").setInputFiles([
  //   "C:/Akshita Jain - 6768898/tests/uploadfile/demo.txt" ,
  //   "C:/Akshita Jain - 6768898/tests/uploadfile/demo1.xlsx"
  // ])
})

test.only("Task 4",async({browser})=>{
     const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0");
    await page.getByPlaceholder("Enter text here").fill("dhgdhsgxcdgxxkkhdkhdskh");
    await page.getByPlaceholder("Filename").fill("newFile.txt");
    const [downloadfile]=await Promise.all([
        page.waitForEvent("download"),
        page.getByRole("button",{name:'Download'}).click()
    ])
    // await page.pause();
    let downloadfolder="C:/Akshita Jain - 6768898/downloads"
    let filename=await downloadfile.suggestedFilename()
    // path.join(downloadfolder,filename)
    await downloadfile.saveAs(path.join(downloadfolder,filename))
})