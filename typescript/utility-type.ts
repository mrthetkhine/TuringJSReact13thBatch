type Point = { x: number; y: number };
type P = keyof Point; //"x"|"y"

let data:P = "x";
console.log('data ',data);

type Predicate = (x: unknown) => boolean;
type K = ReturnType<Predicate>;
let data2:K = false;

type Coord = {
    x: number;
    y:number;
}

type PartialCoord = Partial<Coord>;
let data3:PartialCoord = {x:10};