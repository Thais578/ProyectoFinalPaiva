import { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ item }) => {

  const { addItem } = useContext(CartContext);
  const [added, setAdded] = useState(false);

  const handleAdd = (quantity) => {
    addItem(item, quantity);
    setAdded(true);
  };

  return (
    <div className="container text-center">

      <h2>{item.name}</h2>

      <img 
        src={item.image} 
        alt={item.name} 
        style={{ width: "250px", margin: "20px 0" }}
      />

      <p>{item.description}</p>
      <h4>Precio: ${item.price}</h4>
      <p>Stock: {item.stock}</p>

      {!added ? (
        <ItemCount stock={item.stock} onAdd={handleAdd} />
      ) : (
        <p>Producto agregado al carrito ✅</p>
      )}

    </div>
  );
};

export default ItemDetail;


