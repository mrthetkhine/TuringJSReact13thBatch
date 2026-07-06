function add(a:number,b:number):number{
    return a+b;
}
function subtract(a:number,b:number):number{
    return a-b;
}
function hello()
{
    console.log('Hello');
}
type BinaryOpFn = (a:number,b:number)=>number;
let fun:BinaryOpFn = add;
console.log('add ',fun(10,20));

fun = subtract;
console.log('subtract ',fun(10,20));

type Fun =()=>void;
let fun1:Fun = hello;
fun1();