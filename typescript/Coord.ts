interface Coord
{
    x :number;
    y : number;
    z ?: number;
}
let coord:Coord = {x:10,y:20,z:30};
console.log('coord ',coord);

interface Human
{
    readonly name : string;
    age : number;
    readonly address:Readonly<{
        city : string;
        state : string;
    }>
}
let h:Human = {
    name : "Jhon",
    age : 30,
    address : {
        city : "New York",
        state : "NY"
    }
}
//h.name = "Wick";
/*
h.address = {

}
*/
//h.address.city = "YGN";