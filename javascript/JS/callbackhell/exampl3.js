// 1️⃣ LOGIN API
function loginApi(username, password) {
  return new Promise((resolve, reject) => {
    console.log("🔐 Logging in...");

    setTimeout(() => {
      try {
        if (username === "ketan" && password === "123") {
          resolve({ userId: 101, name: "Ketan", token: "abc123" });
        } else {
          reject("Invalid credentials");
        }
      } catch (err) {
        reject("Login error");
      }
    }, 1000);
  });
}

// 2️⃣ GET PRODUCTS
function getProducts(token) {
  return new Promise((resolve, reject) => {
    console.log("📦 Fetching products...");

    setTimeout(() => {
      try {
        if (!token) {
          throw new Error("Unauthorized");
        }

        resolve([
          { id: 1, name: "Laptop", price: 50000 },
          { id: 2, name: "Mobile", price: 20000 },
        ]);
      } catch (err) {
        reject(err.message);
      }
    }, 1000);
  });
}

// 3️⃣ ADD TO CART
function addToCart(user, product) {
  return new Promise((resolve, reject) => {
    console.log("🛒 Adding to cart...");

    setTimeout(() => {
      try {
        if (!product) throw new Error("Product not found");

        resolve({
          user,
          cart: [product],
          total: product.price,
        });
      } catch (err) {
        reject(err.message);
      }
    }, 1000);
  });
}

// 4️⃣ PLACE ORDER
function placeOrder(cartData) {
  return new Promise((resolve, reject) => {
    console.log("📦 Placing order...");

    setTimeout(() => {
      try {
        if (cartData.total <= 0) {
          throw new Error("Invalid cart");
        }

        resolve({
          orderId: 999,
          amount: cartData.total,
          user: cartData.user.name,
        });
      } catch (err) {
        reject(err.message);
      }
    }, 1000);
  });
}

// 5️⃣ PAYMENT
function makePayment(order) {
  return new Promise((resolve, reject) => {
    console.log("💳 Processing payment...");

    setTimeout(() => {
      try {
        if (!order.orderId) throw new Error("Payment failed");

        resolve({
          ...order,
          status: "SUCCESS",
        });
      } catch (err) {
        reject(err.message);
      }
    }, 1000);
  });
}


// ✅ ✅ MAIN FLOW (TRY + CATCH)
async function startEcommerceFlow() {
  try {
    // LOGIN
    const user = await loginApi("ketan", "123");
    console.log("✅ User:", user);

    // GET PRODUCTS
    const products = await getProducts(user.token);
    console.log("✅ Products:", products);

    // ADD TO CART
    const cart = await addToCart(user, products[0]);
    console.log("✅ Cart:", cart);

    // PLACE ORDER
    const order = await placeOrder(cart);
    console.log("✅ Order:", order);

    // PAYMENT
    const payment = await makePayment(order);
    console.log("✅ Payment:", payment);

    console.log("🎉 Order Completed Successfully!");

  } catch (error) {
    console.log("❌ ERROR OCCURRED:", error);
  }
}


// ✅ RUN
startEcommerceFlow();