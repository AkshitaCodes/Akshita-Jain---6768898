import {test, expect} from "@playwright/test"
test.use({ actionTimeout: 3000 });

test("Assertions", async({page}) => {
  await page.setDefaultTimeout(3000)
    
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    // await page.locator('selector').fill('text',{timeout:5000});

    await expect(page.locator("//input[contains(@type,'text')]")).toBeAttached()
    await expect(page.locator("//input[contains(@type,'text')]")).not.toContainClass("form-control")
    // await expect(page).locator(/Welcome, Test User/).toHaveText

    // await expect(page.locator("//input[contains(@type,'password')]"))

    await page.screenshot({path:""});
    
})



// npx playwright show-report --port 9324

// types of wait:
// auto wait
// explicit wait
// hardcoded wait

// explicit wait - waitfortimeout (will wait even after the task is completed)