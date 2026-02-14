import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ id, name, price, image }) => {
  return (
    <Card className="mb-4 shadow-sm" style={{ borderRadius: "10px" }}>
      <Card.Img
        variant="top"
        src={image}     
        alt={name}
        style={{ height: "180px", objectFit: "cover" }}
      />

      <Card.Body className="text-center">
        <Card.Title>{name}</Card.Title>
        <Card.Text className="text-muted">${price}</Card.Text>
        <Link to={`/item/${id}`}>
          <Button variant="dark">Ver detalle</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Item;

