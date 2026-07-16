import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import CategoryPage from "./pages/CategoryPage";
import ProductDetailPage from "./pages/ProductDetailPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx";
import Layout from "./Layout/layout.jsx";

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