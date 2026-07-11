class Base {
  private x = 0;
}
const b = new Base();
//console.log('b ',b.x);
let data :any = b;
data.x= 100;
console.log("B ",b);