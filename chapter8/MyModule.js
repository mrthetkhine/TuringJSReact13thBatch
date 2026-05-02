window.MyModule = window.MyModule || (function() {
    console.log("MyModule loaded");
    function api()
    {
        console.log("api called");
    }
    return {
        api
    }
}());