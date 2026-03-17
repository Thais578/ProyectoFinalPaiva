import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeItem, clearCart, totalPrice } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="text-center mt-5">
        <h2>Carrito vacío 🛒</h2>
        <Link to="/" className="btn btn-dark mt-3">
          Ir a comprar
        </Link>
      </div>
    );
  }

  return (
    <div className="container my-4">
      <h2>Tu carrito</h2>

      {cart.map((item) => (
        <div key={item.id} className="border p-3 my-2">
          <h4>{item.name}</h4>
          <p>Cantidad: {item.quantity}</p>
          <p>Precio unitario: ${item.price}</p>
          <p>Subtotal: ${item.price * item.quantity}</p>

          <button
            onClick={() => removeItem(item.id)}
            className="btn btn-danger"
          >
            Eliminar
          </button>
        </div>
      ))}

      <h3>Total: ${totalPrice()}</h3>

      <button onClick={clearCart} className="btn btn-warning m-2">
        Vaciar carrito
      </button>

      <Link to="/checkout" className="btn btn-success">
        Finalizar compra
      </Link>
    </div>
  );
};

export default Cart;