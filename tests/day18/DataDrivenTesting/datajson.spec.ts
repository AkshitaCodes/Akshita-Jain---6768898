import {test} from "@playwright/test"
import fs from "fs"
import path from "path"
let data = fs.readFileSync(path.join(__dirname,"../../../test-data/data.json"))
let datafile=JSON.parse(data)
test("json data",async({page})=>{
  // console.log(data.greet);
  datafile.forEach(d=>{
    console.log(d.greet);
    
  })
  
})