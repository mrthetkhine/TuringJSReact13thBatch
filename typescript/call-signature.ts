function hello()
{
    console.log('Hello');
}
hello.description = "This function says hello";
type DescribableFunction = {
  description: string;
  (): void;
};
function callFun(fun: DescribableFunction) {
    console.log(fun.description);
    fun();
}
callFun(hello);

function hi()
{
    console.log('Hi');
}
//callFun(hi);