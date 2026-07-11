function fun(n?:number)
{
    if(n)
    {
        console.log('n ',n.toFixed());
    }
    else
    {
        console.log('n is undefined');
    }
}
fun();
fun(100);
function greet(message="Hello")
{
    console.log('Greet ',message);
}
greet();
greet('hi');

const user = {
  id: 123,
 
  admin: false,
  becomeAdmin: function () {
    this.admin = true;
  },
};
user.becomeAdmin();
console.log('user ',user);