function nothing()
{
    console.log('nothing');
}
let data = nothing();
console.log('data ',data);

type Fun = ()=>void;
let fun:Fun = nothing;
//data = 1 + fun();