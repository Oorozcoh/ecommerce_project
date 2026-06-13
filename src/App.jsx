import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ItemListContainer />} />

        <Route
          path="category/:categoria"
          element={<ItemListContainer />}
        />

        <Route
          path="item/:itemId"
          element={<ItemDetailContainer />}
        />
      </Route>
    </Routes>
  );
}

export default App;