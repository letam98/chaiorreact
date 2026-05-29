const arr12=[23,45,112,1212,23];
const newArr = arr12.map((num) => num * num);
console.log(newArr);


const store = {
    storeName: "Ketan Mart",
    location: "Pune",
    products: [
        {
            id: 1,
            name: "Laptop",
            price: 55000,
            category: "Electronics",
            stock: 10
        },
        {
            id: 2,
            name: "Mobile",
            price: 20000,
            category: "Electronics",
            stock: 25
        },
        {
            id: 3,
            name: "Shoes",
            price: 3000,
            category: "Fashion",
            stock: 50
        },
        {
            id: 4,
            name: "Watch",
            price: 2500,
            category: "Accessories",
            stock: 15
        }
    ]
};

// console.log(store);
const newProduct =store.products.filter((product) => product.price > 2500).map((prod) =>({name:prod.name,price:prod.price}));
console.log(newProduct);


// const data = store.products.map((prod) =>({name:prod.name,price:prod.price}));
// console.log(data);
