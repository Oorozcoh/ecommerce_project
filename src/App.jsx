import "../src/App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer saludo="¡Bienvenido a Mi Tienda online!" />
    </>
  );
}

export default App;