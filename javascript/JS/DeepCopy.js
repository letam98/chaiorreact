const emp = {
    name:"ketan",
    lastname:"kanoje",
    address:{
        post:"harsul",
        tel:"trimbak",
        dist:"nashik",
        pinCode:422204
    }
}

const newObje=structuredClone(emp);
newObje.name="swapnil";

console.log(newObje);
console.log(emp)