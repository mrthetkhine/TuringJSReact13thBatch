class Params {
  constructor(
    public readonly x: number,
    protected y: number,
    private z: number
  ) {
    // No body necessary
  }
}
let obj = new Params(10,20,30);
console.log('obj ',obj);