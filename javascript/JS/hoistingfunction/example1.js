//var

// console.log(a)
// var a=10;
// var b=20;
// console.log(a)

// var sumResult= addTwoNumber(a,b);
// console.log(sumResult)

// function addTwoNumber(num1,num2)
// {
//     var res= num1+num2;
//     return res;
// }


//let and const - if value is not come or intilize  that time tak dont access this 
//memory allocate(temporal dead zone)
//a = < uninitialize

// console.log(a);

let a=10;
let b=20;

console.log(a);



// const sumResult= addTwoNumber(a,b);
// console.log(sumResult)
// function addTwoNumber(num1,num2)
// {
//     const res= num1+num2;
//     return res;
// }


const addNum = function(num1,num2)
{
    const res= num1+num2;
    return res;
}

const sumResult= addNum(a,b);
console.log(sumResult)

