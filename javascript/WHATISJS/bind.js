function greet()
{
    return this.name;
}

const person ={
    name:"ketan"
}

const nameD =greet.bind(person);
console.log(nameD());


