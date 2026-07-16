import NavBar from "../components/NavBar/NavBar.jsx";
import Footer from "../components/Footer/footer.jsx";
import { Outlet } from "react-router-dom";
import BackToTop from "../components/BackToTop/BackToTop.jsx";

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