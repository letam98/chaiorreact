function add()
{
    let sum=0
    for (let index = 0; index < arguments.length; index++) {
        sum = sum + arguments[index];
        
    }
    return sum
}

let res =console.log(add(1,2,3,4,5,6));

