import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Products } from "../Products";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const getItem = new Promise((resolve) => {
      setTimeout(() => {
        const product = Products.find((prod) => prod.id === itemId);
        resolve(product);
      }, 1000);
    });

    getItem.then((res) => setItem(res));
  }, [itemId]);

  return (
    <div>
      {item ? <ItemDetail item={item} /> : <p>Cargando...</p>}
    </div>
  );
};

export default ItemDetailContainer;

