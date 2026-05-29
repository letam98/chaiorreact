//zomato application

const details ={
    orderId:"12233",
    food:["Pizza","Biryani"],
    cost:540,
    name: "ketan kanoje",
    location:"mumbai",
    restaurantlocation:"kalyan"
}

function placeOrder(details,prepareOrder)
{
    console.log(`payment ${details.cost} is progress :`);

    setTimeout(() =>{
    console.log("payment is received and order get placed");
    prepareOrder(details);
    },3000)
}

function prepareOrder(details,callback)
{
    console.log("your food preparation is started")

    setTimeout(() => {
            console.log("yyour order now prepared")
            callback();
    }, 3000);
}

function pickupOrder(callback)
{
      console.log("Delivery boy order is on the way for pickup order")
      setTimeout(() =>{
      console.log("Order is pickup")
      callback();
      },3000)
  
}

function deliveryFood()
{
      console.log("I am delivery order on the way")
      setTimeout(() =>{
      console.log("Order deliver succssfully")
      },3000)
  
}

// placeOrder(prepareOrder(pickupOrder));
// prepareOrder();

placeOrder(details,(details) =>{
    prepareOrder(details,() =>{
        pickupOrder(details,(details)=>{
            deliveryFood(details)
        });
    });
})