import { FaShoppingCart } from "react-icons/fa";
import { Badge } from "react-bootstrap";

const CartWidget = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
      <FaShoppingCart size={24} />
      <Badge bg="dark">3</Badge>
    </div>
  );
};

export default CartWidget;
