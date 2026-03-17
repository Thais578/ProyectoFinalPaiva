// src/components/NotFound.jsx
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center mt-5">
      <h2>Página no encontrada</h2>
      <p>La ruta a la que intentas acceder no existe.</p>

      <img
        src="/images/404.png" 
        alt="404 Not Found"
        style={{ width: "300px", margin: "20px 0" }}
      />

      <br />
      <Link to="/" className="btn btn-dark mt-3">
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;