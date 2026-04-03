import { test } from "@playwright/test"
import fs from "fs"
import path from "path"

let data = fs.readFileSync(
  path.join(__dirname,'../../test-data/data1.json')
)
console.log(data.toString())
let datafile = JSON.parse(String(data))

test("json data", async ({page}) => {

  console.log(datafile.url)
  console.log(datafile.searchProduct)

})