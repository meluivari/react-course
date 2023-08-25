import { useState } from "react";
import { Button } from "./Button";

const initialProducts = [
  {
    id: 0,
    name: "Baklava",
    count: 1,
  },
  {
    id: 1,
    name: "Cheese",
    count: 5,
  },
  {
    id: 2,
    name: "Spaghetti",
    count: 2,
  },
];

export function PlagroundCart() {
  const [products, setProducts] = useState(initialProducts);

  function handleIncreaseClick(productId) {}
  function handleDecreaseClick(productId) {}

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id} className="flex flex-row gap-4 mt-4">
          <Button label="-" onClick={() => handleDecreaseClick(product.id)} />
          <Button
            label="+"
            onClick={() => {
              handleIncreaseClick(product.id);
            }}
          />
          <div className="bg-red-100 w-60 h-10 flex flex-row">
            <span> {product.name} </span>(<b>{product.count}</b>)
          </div>
        </li>
      ))}
    </ul>
  );
}
