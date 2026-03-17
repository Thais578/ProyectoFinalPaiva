import { FaShoppingCart } from "react-icons/fa";
import { Badge } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link
      to="/cart"
      style={{ display: "flex", alignItems: "center", gap: "5px", textDecoration: "none" }}
    >
      <FaShoppingCart size={24} />
      {totalQuantity() > 0 && (
        <Badge
          bg="dark"
          style={{ position: "relative", top: "-10px", left: "-5px" }}
        >
          {totalQuantity()}
        </Badge>
      )}
    </Link>
  );
};

export default CartWidget;