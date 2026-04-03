import { test,expect } from "@playwright/test";
import path from "path";
import ExcelJs from "exceljs"

test("write_excel_data",async({page})=>{

    let book = new ExcelJs.Workbook();

    await book.xlsx.readFile(path.join(__dirname,"../../test_data/readexcel.xlsx"))

    let sheet=await book.getWorksheet('Sheet4');

    if(!sheet){
        sheet=await book.addWorksheet('Sheet4')
    }

    sheet.getRow(1).getCell(1).value="Akshita";

    await book.xlsx.writeFile(path.join(__dirname,"../../test-data/readexcel.xlsx"))
    
})