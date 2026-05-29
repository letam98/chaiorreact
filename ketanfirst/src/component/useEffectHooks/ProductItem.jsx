import React from "react";

const ProductItem = ({ product, onAdd }) => {
  console.log("Rendering:", product.name);

  return (
    <div>
      <h3>{product.name}</h3>
      <button onClick={() => onAdd(product.id)}>
        Add to Cart
      </button>
    </div>
  );
};

export default React.memo(ProductItem);