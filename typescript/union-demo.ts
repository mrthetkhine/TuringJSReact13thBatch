type Alignemnt = "left" | "right" | "center";
let align:Alignemnt = "left";
align = "right";
align = "center";

//align = "other";
type ID = number | string;
let id:ID = 123;
id = "abc";
//id = true;

console.log('id ',id);

function printId(id: ID) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toString());
  }
}
printId(123);
printId("abc");