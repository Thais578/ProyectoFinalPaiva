import { Card } from "react-bootstrap";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => (
  <Card className="p-4 shadow-sm mb-4" style={{ borderRadius: "10px" }}>
    <Card.Body>
      <Card.Title>{item.name}</Card.Title>
      <Card.Text>{item.description}</Card.Text>
      <Card.Text className="fw-bold">Precio: ${item.price}</Card.Text>
      <Card.Text>Stock: {item.stock}</Card.Text>
      <ItemCount stock={item.stock} />
    </Card.Body>
  </Card>
);

export default ItemDetail;

