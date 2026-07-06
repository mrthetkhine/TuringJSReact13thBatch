interface Circle  {
    radius:number;
}
interface Colorful {
    color:string;
}
type ColorfulCircle = Circle & Colorful;
let c:ColorfulCircle = {
    radius:10,
    color:"red"
}

console.log('c ',c);