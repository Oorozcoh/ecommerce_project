import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

const CategoryPage = () => {

  const { categoryId } = useParams();

  useEffect(() => {
    document.title = `${categoryId} | Mi Tienda`;
  }, [categoryId]);

  return (
    <div>

      <div className="titulo-container">
        <div className="linea"></div>

        <h1 className="titulo-productos">
          Lista de {categoryId}
        </h1>

        <div className="linea"></div>
      </div>

      <ItemListContainer />

    </div>
  );
};

export default CategoryPage;