
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import './index.css';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer mensaje="¡Bienvenido a Bean Box!" />
    </div>
  );
}

export default App;

