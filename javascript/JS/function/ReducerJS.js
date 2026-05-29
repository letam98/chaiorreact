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

const ttl =store.products.reduce((acc,curr) =>{
    return acc+curr.price;
})

console.log(ttl)