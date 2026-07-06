/**
 * longest(a,b)
 *   object{
 *      length:number  
 * }
 */

function longest<T extends {length: number}>(a: T, b: T)
{
    return a.length >= b.length ? a : b;
}
console.log('longest ',longest("apple","banana"));
console.log('longest ',longest([1,2,3],[1,2]));
//console.log('longest ',longest<number>(1,3);

console.log('longest ',longest({
    length:10
},{length:20}));