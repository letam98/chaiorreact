function greeting()
{
    console.log("hello i am parent");
}

function childCallback(calllback)
{
    console.log("I am child class")
    calllback()
}

childCallback(greeting);
