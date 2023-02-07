import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./createevent.css";

const Login = () => {
  const [Data, setData] = useState({
    name: undefined,
    fromDate: undefined,
    toDate: undefined,
    latitude: undefined,
    longitude: undefined,
    country: undefined,
    city: undefined,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    console.log(Data);
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8800/events/", Data);
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
          Name:
          <input
            type="text"
            placeholder="name"
            id="name"
            name="name"
            onChange={handleChange}
            className="lInput"
            required
          />
          From date:
          <input
            type="Date"
            placeholder="fromDate"
            id="fromDate"
            name="fromDate"
            onChange={handleChange}
            className="lInput"
            required
          />
          To date:
          <input
            type="Date"
            placeholder="toDate"
            id="toDate"
            name="toDate"
            onChange={handleChange}
            className="lInput"
            required
          />
          Latitude:
          <input
            type="text"
            placeholder="latitude"
            id="latitude"
            name="latitude"
            onChange={handleChange}
            className="lInput"
            required
          />
        </div>
        <div className="lContainerChild ">
          Longitude:
          <input
            type="text"
            placeholder="longitude"
            id="longitude"
            name="longitude"
            onChange={handleChange}
            className="lInput"
            required
          />
          Country:
          <input
            type="text"
            placeholder="Country"
            id="country"
            name="country"
            onChange={handleChange}
            className="lInput"
            required
          />
          City:
          <input
            type="text"
            placeholder="city"
            id="city"
            name="city"
            onChange={handleChange}
            className="lInput"
            required
          />
          Capacity:
          <input
            type="number"
            placeholder="capacity"
            id="capacity"
            name="capacity"
            onChange={handleChange}
            className="lInput"
            required
          />
        </div>
      </div>
      <button onClick={handleClick} className="lButton">
        Register
      </button>
    </div>
  );
};

export default Login;
