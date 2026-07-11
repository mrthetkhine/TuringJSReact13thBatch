class MyClass {
  static x = 0;
  counter =0;

  static{
    console.log('Static block1');
    MyClass.x = 100;
  }
  inc()
  {
    this.counter ++;
    MyClass.x++;
  }
  static{
    console.log('Static block 2');
  }
  static incX() {
    console.log('static this ');
    MyClass.x++;
  }

  static printX() {
    console.log(MyClass.x);
  }
}
let obj = new MyClass();
obj.inc();
obj.inc();
MyClass.incX();
MyClass.printX();

let obj2 = new MyClass();
obj2.inc();

console.log('obj ',obj);
console.log('obj2 ',obj2);
console.log('MyClass ',MyClass);