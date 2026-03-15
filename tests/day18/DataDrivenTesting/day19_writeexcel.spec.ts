import { test } from "@playwright/test"
import excel from "exceljs"
import path from "path"

test("write excel data", async ({ page }) => {

  let book = new excel.Workbook()

  await book.xlsx.readFile(path.join(__dirname, "../../../test-data/readexcel.xlsx"))

  let sheet = book.getWorksheet("Sheet4")

  if (!sheet) {
    sheet = book.addWorksheet("Sheet4")
  }

  sheet.getRow(1).getCell(1).value = "playwright"

  await book.xlsx.writeFile(path.join(__dirname, "../../../test-data/readexcel.xlsx"))

})