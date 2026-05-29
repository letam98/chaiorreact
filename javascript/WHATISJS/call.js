function fullName() {
    return this.firstName+" "+this.lastName;
}

let person ={
    firstName:"ketan",
    lastName:"lkanoje"
}

let res =fullName.call(person);
console.log(res);


