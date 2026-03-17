import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/Config";

import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {

    const docRef = doc(db, "products", itemId);

    getDoc(docRef)
      .then(res => {
        if (res.exists()) {
          setItem({ id: res.id, ...res.data() });
        }
      });

  }, [itemId]);

  return (
    <div className="container">
      {item ? <ItemDetail item={item} /> : <p>Cargando producto...</p>}
    </div>
  );
};

export default ItemDetailContainer;