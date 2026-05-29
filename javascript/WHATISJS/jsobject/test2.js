global.color = 'Red';
console.log(globalThis.color);

let car = {
    brand: 'Honda',
    getBrand: function () {
        return this.brand;
    }
}

console.log(car.getBrand()); // Honda

let brandedCar =car.getBrand.bind(car);
console.log(brandedCar());

let person = {
    firstName: 'John',
    lastName: 'Doe',
    ssn: '299-24-2351'
};

for(let prop in person) {
    console.log(prop + ':' + person[prop]);
}
