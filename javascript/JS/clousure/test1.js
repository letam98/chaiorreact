// let a=10;
// const b=20;
//global level
// function print()
// {
//     console.log(a);
// }

// print();

        let d=10;

//functional level
function print()
{
    let a=10;
    var c=50;

    console.log(d);
}

print();

if(true)
{
    let a=10;
    var b=20;
    console.log("true",a);
}
    console.log(b);
