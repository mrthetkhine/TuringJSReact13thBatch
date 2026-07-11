class Greeter {
  name = "Something";
  public greet() {
    console.log("hi!");
  }
  protected getName() {
    return "hi";
  }
}
class Greeter2 extends Greeter {
  
  display()
  {
    console.log('Name is ',super.getName());
  }
}
const g = new Greeter();
g.greet();
console.log('G.name ',g.name);
//console.log('g.getNamdr ',g.getName());

let g2 =new Greeter2();
g2.display();