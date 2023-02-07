import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <div className="navItems">
          <Link
            to="/register"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <button className="navButton">Register</button>
          </Link>
          <Link
            to="/Login"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <button className="navButton">Login</button>
          </Link>
          <Link
            to="/adminlogin"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <button className="navButton">Admin Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
