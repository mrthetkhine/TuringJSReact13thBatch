type Box<T> ={
    value :T;
}
let box: Box<number> = {value:10};
console.log('box ',box);

let boxString: Box<string> = {value: "hello"};
console.log('boxString ',boxString.value.toUpperCase());

