import NavBar from "../components/NavBar/NavBar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";
import BackToTop from "../components/BackToTop/BackToTop";

const Layout = () => {
  return (
    <>
      <NavBar />

      <main className="main-content">
        <Outlet />
      </main>

      <BackToTop />
      
      <Footer />
    </>
  );
};

export default Layout;