import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Bean Box</div>
      <a href="#">Inicio</a>
      <a href="#">Productos</a>
      <a href="#">Contacto</a>
      <CartWidget />
    </nav>
  );
};

  export default NavBar;