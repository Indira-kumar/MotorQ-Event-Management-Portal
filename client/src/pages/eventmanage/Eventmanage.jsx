import PropertyList from "../../components/propertyList/PropertyList";
import { Link } from "react-router-dom";

import "./eventmanage.css";

const Home = () => {
  return (
    <div>
      <div className="navbar">
        <div className="navContainer">
          <div className="navItems">
            <Link
              to="/eventmanage/crudevents"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <button className="navButton">CRUD Events</button>
            </Link>
            <Link
              to="/eventmanage/verify"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <button className="navButton">Verify Events</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
