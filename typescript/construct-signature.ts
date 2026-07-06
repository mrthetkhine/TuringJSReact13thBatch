class Human
{
  name:string;
  constructor(name:string)
  {
    this.name = name;
    console.log('Human constructor called');
  }
  display()
  {
    console.log('Name is ',this.name);
  }
}
class Teacher extends Human
{
  constructor(name:string)
  {
    super(name);
    console.log('Teacher constructor called');
  }
}
type SomeConstructor = {
  new (s: string): Human;
};
let fun:SomeConstructor = Teacher;
let obj = new fun("John");
console.log('Obj ',obj);
obj.display();

fun = Human;
obj = new fun("John");
console.log('Obj ',obj);
obj.display();