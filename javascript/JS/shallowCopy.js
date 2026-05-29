const details ={
    name:"ketan",
    lastName:"kanoje",
    address:{
        city:"pune",
        pinCode:"422206"
    }
}

console.log(details);

const newObject = () => ({...details});
newObject.name="sanket";
console.log(newObject)

const copy=newObject();
copy.address.city="kerala";
console.log(copy);
console.log(details);