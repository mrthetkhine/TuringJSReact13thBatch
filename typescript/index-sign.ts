interface StringArray {
  [index: number]: string;
}
let str:StringArray = ["Apple","Orange","Banana"];

interface DynamicObject {
  [index:string]: string;
}
let obj : DynamicObject = {
  name : "Jhon",
  age : "30"
}