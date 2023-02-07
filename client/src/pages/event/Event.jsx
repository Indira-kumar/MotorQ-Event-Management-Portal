import "./event.css";
import { Link } from "react-router-dom";

const Event = () => {
  return (
    <>
      <div className="navbar">
        <div className="navContainer">
          <div className="navItems">
            <Link
              to="/event/register"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <button className="navButton">Register for Events</button>
            </Link>
            <Link
              to="/event/registered"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <button className="navButton">Registered Events</button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <h1>Welcome to Eventingo!</h1>
      </div>
    </>
  );
};

export default Event;
