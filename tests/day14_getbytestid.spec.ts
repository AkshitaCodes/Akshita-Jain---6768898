import { test } from '@playwright/test';


test('web element', async ({ page }) => {

  await page.goto("https://www.amazon.in/")
  await page.locator("input#twotabsearchtextbox").fill("shoes")
  await page.keyboard.press("Enter")

  await page.locator('//span[@class="a-size-base-plus a-color-base"]').first().waitFor()    // first element is getting loaded
  let element = await page.locator('//span[@class="a-size-base-plus a-color-base"]').all()

  console.log(element);




  
  // await page.goto("https://www.saucedemo.com/")

  // // await page.getByTestId("username", {exact : true})
  
  // await page.goto("https://practicetestautomation.com/practice-test-login/")

  // await page.getByLabel("Username", {exact : true}).type("student")
  // await page.getByLabel("Username", {exact : true}).type("student1")    // just continue writing afterwards

  // const username = "Khushi"

  // // await page.getByLabel("Password").fill("password123")
  // await page.getByLabel("Password").fill("password1234")
  await page.getByText("Submit").first().click()

  // await page.getByLabel("Password").isVisible()
  // await page.getByLabel("Password").isEnabled()
  // await page.getByLabel("Password").isEditable()
  // await page.getByLabel("Password").isHidden()

  

});


// //input[contains(@data-test,'username')]



// web element controls
/**
 * .fill
 * .textContent (one of one)
 * .innerText
 * .click
 * .allTextContent  (one of many)
 * .innerHTML
 * .first
 * .last
 * .nth child
 * .waitFor
 * 
 * slow is an annotation
 * 
 * 
 * 
 * difference between innerText and textContent ??
 * 
 * innerText

innerText returns only the visible text of an element as it appears on the webpage.
 * 
 * 
 * 
 * textContent

textContent returns all text inside the element, including hidden text.
 */





/**
 * why we cannot use textContent here ?
 */