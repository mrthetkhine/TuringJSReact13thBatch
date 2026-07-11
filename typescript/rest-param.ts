function total(...num:number[])
{
    let sum = 0;
    for(const n of num)
    {
        sum +=n;
    }
    return sum;
}
console.log('total ',total(1,2,3));
console.log('total ',total(3,4));