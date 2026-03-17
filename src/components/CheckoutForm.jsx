import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { db } from "../firebase/Config";
import { collection, addDoc } from "firebase/firestore";

const CheckoutForm = () => {

  const { cart, totalPrice, clearCart } = useContext(CartContext);

  const [buyer, setBuyer] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const [orderId, setOrderId] = useState(null);

  const handleChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const order = {
      buyer,
      items: cart,
      total: totalPrice()
    };

    const ordersRef = collection(db, "orders");

    addDoc(ordersRef, order)
      .then(res => {
        setOrderId(res.id);
        clearCart();
      });
  };

  if (orderId) {
    return (
      <div className="text-center mt-5">
        <h2>¡Compra realizada! 🎉</h2>
        <p>ID de tu orden: {orderId}</p>
      </div>
    );
  }

  return (
    <div className="container">

      <h2>Finalizar compra</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Nombre"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Teléfono"
          onChange={handleChange}
          required
        />

        <button type="submit" className="btn btn-success mt-3">
          Comprar
        </button>

      </form>

    </div>
  );
};

export default CheckoutForm;