import { useState } from "react";
import CartItem from "./CartItem";

const initData = [
  { id: 1, label: "noodles", price: 80, quantity: 1 },
  { id: 2, label: "biryani", price: 120, quantity: 2 },
  { id: 3, label: "chips", price: 60, quantity: 3 }
];

const CartContainer = () => {
  const [data, setData] = useState(initData);

  const handleDataChange = (id, value) => {
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + value } : item
    );
    setData(updatedData);
  };

  console.log(data);
  return (
    <div style={{ background: "pink" }}>
      {data.map((item) => (
        <CartItem key={item.id} {...item} handleDataChange={handleDataChange} />
      ))}
      <h2>
        Total :{" "}
        {data.reduce((acc, el) => {
          return acc + el.price * el.quantity;
        }, 0)}
      </h2>
    </div>
  );
};

export default CartContainer;
