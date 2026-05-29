import { useState, useCallback } from "react";
import ProductItem from "./ProductItem";

const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" },
  { id: 3, name: "Watch" }
];

function ParentComponent() {
  const [cartCount, setCartCount] = useState(0);

  // ✅ FIX: useCallback + functional update
  const addToCart = useCallback((id) => {
    console.log("Add product:", id);

    // ✅ Important change (real-world safe update)
    setCartCount((prev) => prev + 1);

  }, []);  // ✅ empty dependency → function reused

  return (
    <div>
      <h2>Cart: {cartCount}</h2>

      {products.map((p) => (
        <ProductItem key={p.id} product={p} onAdd={addToCart} />
      ))}
    </div>
  );
}

export default ParentComponent;