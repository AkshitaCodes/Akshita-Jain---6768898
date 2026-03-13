let arr = [1,2,3,4,5,67]
let obj = {
  key1 : "value1",
  key2 : "value2"
}
// for in : used for obj
// for of : used for arr/list
for(let i in arr){
  console.log(i);
}
// for(let i of obj){
//   console.log(i);
// }
for(let ch in obj){
  console.log(ch);
}
for(let ch in obj){
  console.log(ch);
  console.log(obj[ch]);
}