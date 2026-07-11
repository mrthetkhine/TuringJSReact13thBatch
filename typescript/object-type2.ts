let obj:object = {};
console.log('obj ',obj);

obj ={
    name: 'Jhon',
    age :30
};
console.log('Obj ',obj);

//obj ="Hello";
function f1(a: any) {
  a.b(); // OK
}
f1({
    b()
    {
        console.log('Hello');
    }
})

function f2(a: unknown) {
  //a.b();
  console.log('A ',a);
}

let str = JSON.stringify(obj);
console.log('str ',str);

let obj2 = JSON.parse(str);
console.log('obj2 ',obj2);

function throwError():never
{
    throw new Error("Error");
}

let obj3:never;
//obj3 = throwError();

let fun : Function ;
function hello()
{
    console.log('Hello');
}
fun = hello;
fun();

function add(a:number,b:number)
{
    return a + b;
}
fun = add;
console.log('Fun ',fun(1,2));