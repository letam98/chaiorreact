const details = {
    orderId: "12233",
    food: ["Pizza", "Biryani"],
    cost: 540,
    name: "ketan kanoje",
    location: "mumbai",
    restaurantlocation: "kalyan"
};

// Step 1: Place Order
function placeOrder(details) {
    console.log(`payment ${details.cost} is in progress :`);

    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("payment is received and order get placed");
            resolve(details);
        }, 3000);
    });
}

// Step 2: Prepare Order
function prepareOrder(details) {
    console.log("your food preparation is started");

    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("your order now prepared");
            resolve(details);
        }, 3000);
    });
}

// Step 3: Pickup Order
function pickupOrder(details) {
    console.log("Delivery boy order is on the way for pickup order");

    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Order is picked up");
            resolve(details);
        }, 3000);
    });
}

// Step 4: Deliver Food
function deliveryFood(details) {
    console.log("I am delivering order on the way");

    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Order delivered successfully ✅");
            resolve();
        }, 3000);
    });
}