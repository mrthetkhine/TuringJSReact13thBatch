function firstElement(arr: any[]) {
  return arr[0];
}
//console.log('firstElement ',firstElement([1,2,3]).toUpperCase());
console.log('firstElement ',firstElement(['1',2,3]).toUpperCase());

function firstElementV2<T>(arr: T[]) {
  return arr[0];
}
console.log('firstElement ',firstElementV2(['apple','2','3']).toUpperCase());
console.log('firstElement ',firstElementV2([1,2,3]).toFixed());