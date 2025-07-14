import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        ></motion.span>
        <div className="social">
          <motion.button
            className="download-btn"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/VanshikaSananResume.pdf";
              link.download = "VanshikaSananResume.pdf";
              link.click();
            }}
          >
            Download Resume
          </motion.button>

          <a href="https://www.linkedin.com/in/vanshika-sanan-21a68b177/">
            <img src="/LinkedinLogo.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
