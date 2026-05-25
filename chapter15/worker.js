function factorial(n)
{
    let result = 1;
    for (let i = 2; i <= n; i++)
    {
        result *= i;
    }
    return result;
}
//console.log('woker, Document ',document);
//console.log('woker, window ',window);
//console.log('worker loaded ',window.localStorage);
function delay(ms)
{
    let start = new Date();
    while ( (new Date() - start) < ms);
}
onmessage = (event) => {
    console.log('Message received in worker:', event.data);
    delay(5000); // Simulate a time-consuming task
    postMessage({
        result: factorial(event.data.value)
    });
}