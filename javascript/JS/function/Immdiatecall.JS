function greeting()
{
    console.log("hello world");
}

greeting()

//
(function greeting()
{
    console.log("hello world");
})(); //immeditate call once run


(() =>{
        console.log("Arrow function");

})()