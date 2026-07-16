import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import "./BackToTop.css";

const BackToTop = () => {

  const [visible, setVisible] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);

  const scrollToTop = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };

  return (

    visible && (
      <div
        className="back-to-top"
        onClick={scrollToTop}
      >
        <span>TOP</span>

        <FaChevronUp className="icon-top" />
      </div>
    )

  );
};

export default BackToTop;