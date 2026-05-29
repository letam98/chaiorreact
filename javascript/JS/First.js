let marks1=100;
let marks2=200;
let marks3=500;

let marks=[34,22,55,67];

console.log(marks);
console.log(marks.length)

let arr=[34,22,"ketan",true];
console.log(arr);

console.log(typeof arr);

arr[1]=90;
console.log(arr);

arr.push(33);
console.log(arr);

arr.unshift(1);
console.log(arr);

arr.shift(1);
console.log(arr);

for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}


let marks12=[34,22,55,67];
marks12=[33,90,87];

console.log(marks12);

const arr2=marks12.slice(0,2);
console.log(arr2);

const arr3=marks12.splice(1,3,"kiran",78);
console.log(arr3);






// const marks123=[34,22,55,67];
// marks123=[33,90,87];

// console.log(marks123);






  const obj = {
  name: "Ketan",
  greet: () => {
    console.log(this.name);
  }
};
 
obj.greet();




