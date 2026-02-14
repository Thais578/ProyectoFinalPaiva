
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer mensaje="¡Bienvenido a Bean Box!" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />

        <Route
          path="*"
          element={
            <div className="text-center mt-5">

              <img
                src="/images/404.png"       
                alt="Página no encontrada"
                style={{ width: "300px", margin: "20px 0" }}
              />

              <Link to="/" className="btn btn-dark">Volver al inicio</Link>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
