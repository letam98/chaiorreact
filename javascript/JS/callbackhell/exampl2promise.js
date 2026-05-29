const details = {
    orderId: "12233",
    food: ["Pizza", "Biryani"],
    cost: 540,
    name: "ketan kanoje",
    location: "mumbai",
    restaurantlocation: "kalyan"
};

// Step 1: Payment
function placeOrder(details) {
    console.log(`payment ${details.cost} is in progress :`);

    return new Promise((resolve, reject) => {
        let isPaymentDone = true;

        setTimeout(() => {
            if (isPaymentDone) {
                console.log("payment is received ✅");
                resolve(details);
            } else {
                reject("Payment failed ❌");
            }
        }, 2000);
    });
}

// Step 2: Prepare Order
function prepareOrder(details) {
    console.log("your food preparation is started");

    return new Promise((resolve, reject) => {
        let isFoodAvailable = false; // ❌ simulate failure

        setTimeout(() => {
            if (isFoodAvailable) {
                console.log("your order now prepared ✅");
                resolve(details);
            } else {
                reject("Food not available ❌ order failed");
            }
        }, 2000);
    });
}

// Step 3
function pickupOrder(details) {
    console.log("pickup started");

    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("order picked ✅");
            resolve(details);
        }, 2000);
    });
}

// Step 4
function deliveryFood(details) {
    console.log("delivery started");

    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("order delivered ✅");
            resolve();
        }, 2000);
    });
}

// ✅ Flow
placeOrder(details)
    .then(prepareOrder)
    .then(pickupOrder)
    .then(deliveryFood)
    .catch((err) => {
        console.log("❌ ERROR:", err);
    });