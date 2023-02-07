import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./createevent.css";

const Login = () => {
  const [Data, setData] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    console.log(Data);
    e.preventDefault();
    try {
      const res = await axios.delete(
        "http://localhost:8800/events/" + Data.id,
        Data
      );
      if (res.isAdmin) {
        navigate("/adminlogin/crudevents");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login">
      <div className="lContainer">
        <div className="lContainerChild ">
          Enter the ID you want to delete:
          <input
            type="text"
            placeholder="ID"
            id="id"
            name="id"
            onChange={handleChange}
            className="lInput"
          />
          <button onClick={handleClick} className="lButton">
            Detele the Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
