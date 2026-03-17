import { Container } from "react-bootstrap";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/Config";

const ItemListContainer = ({ mensaje }) => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {

    const productsRef = collection(db, "products");

    const q = categoryId
      ? query(productsRef, where("category", "==", categoryId))
      : productsRef;

    getDocs(q)
      .then(res => {
        const products = res.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setItems(products);
      });

  }, [categoryId]);

  return (
    <Container className="my-4">

      {mensaje && (
  <h1 className="text-center mb-4">
    {mensaje}
  </h1>
)}
{items.length === 0 ? (
  <div className="text-center my-5">
    <div className="spinner-border text-dark" role="status">
      <span className="visually-hidden">Cargando...</span>
    </div>
  </div>
) : (
  <ItemList items={items} />
)}

    </Container>
  );
};

export default ItemListContainer;