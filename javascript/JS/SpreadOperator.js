const arr1=[2,4,45,321,22];
const arr2=["arr",33,78];
const arr3=["sandesh",33,78];


// arr.push(arr2);

// console.log(arr);
// arr.concat(arr2);
// console.log(arr);
// const arr3 =arr.concat(arr2);
// console.log(arr3);

//spread operator
const arr5=[...arr1,...arr2,...arr3];
console.log(arr5);


const name=["ketan","maoj","sures",10];
console.log(name.toString());

console.log(name.join(" "));

console.log(name.indexOf("ketan"));

name.sort();
console.log(name);

const arr =[10,20,40,[50,90,[74,33,22],80]];
console.log(arr);

const a=arr.flat(Infinity);
console.log(a);

const details ={
    name:"ketan",
    lastName:"kanoje",
    address:{
        city:"pune",
        pinCode:"422206";
    }
}

console.log(details);








