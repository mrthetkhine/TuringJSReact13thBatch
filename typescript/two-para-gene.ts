type Pair<T,U> ={
    first :T;
    second :U;
} 

function div(a:number,b:number):Pair<number,Error|null>
{
    if(b==0)
    {
        return {first:0,second:new Error("Divide by zero")};
    }
    else
    {
        return {first:a/b,second:null};
    }
}
let result = div(10,2);
if(result.second==null)
{
    console.log('result ',result.first);
}
else
{
    console.log('error ',result.second.message);
}

result = div(10,0);
if(result.second==null)
{
    console.log('result ',result.first);
}
else
{
    console.log('error ',result.second.message);
}