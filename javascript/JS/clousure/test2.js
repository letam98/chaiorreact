function cretateCounter()
{
function increment()
{
    console.log("increment");
}
return increment;
}

const count =cretateCounter();
 console.log(count);
count();