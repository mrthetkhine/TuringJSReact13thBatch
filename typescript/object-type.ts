type Coord = {
    x:number,
    y:number,
    z?:number,
}
function showCoord(coord:Coord){
    console.log('Coord x ',coord.x,' y ',coord.y);
}
showCoord({x:10,y:20});

/*
type Coord = {
    k:number,
}
*/