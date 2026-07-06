function greet(message:string)
{
    console.log('Greet ',message);
}
greet("Hello, world!");

function add(a:number,b:number):number
{
    return a+b;
}
let result = add(10,20);
console.log('result ',result.toFixed());

const names = ["Alice", "Bob", "Eve"];
 
// Contextual typing for function - parameter s inferred to have type string
names.forEach(function (s) {
  console.log(s.toUpperCase());
});
 