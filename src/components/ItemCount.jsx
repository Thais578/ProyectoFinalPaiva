import { useState } from "react";

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);

  return (
    <div className="d-flex align-items-center justify-content-center my-3">
  <button className="btn btn-outline-dark" onClick={() => setCount(count - 1)} disabled={count <= 1}>-</button>
  <span className="mx-3">{count}</span>
  <button className="btn btn-outline-dark" onClick={() => setCount(count + 1)} disabled={count >= stock}>+</button>
  <button className="btn btn-primary ms-3" onClick={() => onAdd(count)}>Agregar</button>
</div>
  );
};

export default ItemCount;