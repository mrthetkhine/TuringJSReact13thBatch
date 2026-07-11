interface TwoD{
    x:number,
    y:number
}
interface ThreeD extends TwoD{
    z:number    
}
let coord:ThreeD = {x:10,y:20,z:30};
console.log('coord ',coord);

interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}
 
type ColorfulCircle = Colorful & Circle;