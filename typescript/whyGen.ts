type Box ={
    value :number;
}
let box: Box = {value:10};
console.log('box ',box);

type BoxString = {
    value: string;
}
let boxString: BoxString = {value: "hello"};
console.log('boxString ',boxString.value.toUpperCase());

type BoxAny = {
    value :any;
}
let boxAny: BoxAny = {value: 10};
console.log('boxAny ',boxAny.value);

boxAny.value = "hello";
boxAny.value = true;
console.log('boxAny ',boxAny.value.toUpperCase());