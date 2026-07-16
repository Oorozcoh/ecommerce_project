import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartProvider.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <CartProvider>
        <App />
        <ToastContainer />
      </CartProvider>
    </BrowserRouter>
);