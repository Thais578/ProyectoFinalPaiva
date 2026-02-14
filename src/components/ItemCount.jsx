import { useState } from "react";

const ItemCount = ({ stock }) => {
  const [count, setCount] = useState(1);

  const increase = () => {
    if (count < stock) setCount(count + 1);
  };

  const decrease = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div>
      <button onClick={decrease}>-</button>
      <span style={{ margin: "0 10px" }}>{count}</span>
      <button onClick={increase}>+</button>
    </div>
  );
};

export default ItemCount;
