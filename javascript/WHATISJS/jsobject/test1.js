const person={
name:"ketan",
lastname:"kanoje",

getFullName: function()

{
  return this.name +" "+this.lastname;
}
};

getFullNameDetails =(() =>{
      return this.name +" "+this.lastname;

})


person.data = function()
{
    console.log(`hello my ${this.name} details is`);
    
}
person.data();
let name =person.getFullName();
console.log(name);

let name1 =person.getFullName();
console.log(name1);


