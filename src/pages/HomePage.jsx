import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import "./HomePage.css";

const HomePage = () => {
  return (
    <>
    <div className="titulo-container">
    <div className="linea"></div>

    <h1 className="titulo-productos">
        Lista de Productos
    </h1>

    <div className="linea"></div>
    </div>
    <div>
      <title>Lista de Productos | Mi Tienda</title>
      <meta name="description" content="Lista de todos los productos de Mi Tienda" />
    </div>
      <ItemListContainer />
    </>
  );
};

export default HomePage
