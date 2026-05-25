function factorial(n)
{
    let result = 1;
    for (let i = 2; i <= n; i++)
    {
        result *= i;
    }
    return result;
}
function delay(ms)
{
    let start = new Date();
    while ( (new Date() - start) < ms);
}
delay(5000);
console.log(factorial(5));