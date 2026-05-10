console.log('initialized');
function api()
{
    console.log('Module Api');
    internal();
}
function api2()
{
    console.log('Api 2');
}
function internal()
{
    console.log('Internal');
}
module.exports ={
    api,
    api2,
}