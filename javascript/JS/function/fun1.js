function greeting()
{
    console.log("hello world")
}

function addTwoNumbers(num1,num2)
{
    const sum=num1+num2;
    console.log(sum);
}

greeting();
addTwoNumbers(12,45);

const add = (add1,add2) =>{
  return add1+add2;
}

console.log(add(12,23));


const addi1 = (addi12,addi22) => addi12+addi22;


console.log(addi1(12,23));

let arr=[32,1,2,43,23];
arr.sort((a,b) => a-b);
console.log(arr);

//not required add value into bracket
const squreNumber = num1 => num1* num1;

console.log(squreNumber(23));
