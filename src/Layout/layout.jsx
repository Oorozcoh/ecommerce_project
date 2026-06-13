import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <NavBar />

      <main className="main-content">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default Layout;git initi