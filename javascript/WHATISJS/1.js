
for(let a=0;a<5;a++)
{
    console.log('inside the loop :',a);
    
}


let x=30;
let y=89;

// const  additon = (a,b) =>{
// return a + b;
// }

function additon(a,b)
{
    return a+b;
}
let res =additon(x,y);
console.log(res);


const items = [2,5,3,21,2];

for(let i=0;i<items.length;i++)
{
    console.log(items[i]);
    
}
console.log('diffenet');

for(let item of items)
{
console.log(item);

}
