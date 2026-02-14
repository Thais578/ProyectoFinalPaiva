import { Container } from "react-bootstrap";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Products } from "../Products";

const ItemListContainer = ({ mensaje }) => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const getProducts = new Promise((resolve) => {
      setTimeout(() => resolve(Products), 1000);
    });
    getProducts.then(res => {
      if (categoryId) setItems(res.filter(p => p.category === categoryId));
      else setItems(res);
    });
  }, [categoryId]);

  return (
    <Container className="my-4">
      {mensaje && <h1 className="text-center mb-4">{mensaje}</h1>}
      <ItemList items={items} />
    </Container>
  );
};

export default ItemListContainer;
