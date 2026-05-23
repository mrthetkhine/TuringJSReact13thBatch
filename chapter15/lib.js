console.log('Lib.js loaded');
function api()
{
    console.log('API called');
}
function delay(ms)
{
    let start = new Date();
    while(Date.now() - start < ms);
}
//delay(3000);