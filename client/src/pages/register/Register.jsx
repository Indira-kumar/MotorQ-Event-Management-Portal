import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
    email: undefined,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8800/auth/register",
        credentials
      );
      if (res.isAdmin) {
        navigate("/adminlogin");
      } else {
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login">
      <div className="lllContainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="email"
          placeholder="email"
          id="email"
          onChange={handleChange}
          className="lInput"
        />
        <label for="isAdmin">Are you an Event Organizer?</label>
        <span>
          <input
            type="radio"
            value="true"
            name="isAdmin"
            id="isAdmin"
            onChange={handleChange}
            className="lInput"
          />
          Yes
        </span>
        <span>
          <input
            type="radio"
            value="false"
            name="isAdmin"
            id="isAdmin"
            onChange={handleChange}
            className="lInput"
          />
          No
        </span>
        <button onClick={handleClick} className="lButton">
          Register
        </button>
      </div>
    </div>
  );
};

export default Login;
