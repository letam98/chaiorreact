const arr=[23,44,323,12];

// arr.forEach((num,index,arr) =>{
//     console.log(num,index,arr);
// })
let sum=0;
arr.forEach((num) =>{
    sum = sum + num;
})

console.log(sum)