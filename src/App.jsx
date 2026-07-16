import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import Layout from "./layout/layout.jsx";

function App() {
  return (
    <Routes>

      <Route element={<Layout />}>

        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/category/:categoryId"
          element={<CategoryPage />}
        />

        <Route
          path="/item/:itemId"
          element={<ProductDetailPage />}
        />

        <Route
          path="/cart"
          element={<CartPage />}
        />

        <Route
          path="/checkout"
          element={<CheckoutPage />}
        />

      </Route>

    </Routes>
  );
}

export default App;