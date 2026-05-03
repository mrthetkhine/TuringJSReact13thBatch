function pipe(...funs)
{
    return function(x)
    {
        return funs.reduce((acc,fn) => fn(acc), x);
    }
}
function compose(...funs)
{
    return function(x)
    {
        return funs.reduceRight((acc,fn) => fn(acc), x);
    }
}
 function curry(fn)
{
    return function(x)
    {
        if(fn.length === 1)
        {
            return fn(x);
        }
        else
        {
            return curry(fn.bind(null,x));
        }
    }
}