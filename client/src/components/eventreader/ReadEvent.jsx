import axios from "axios";
import PrintEvent from "../eventprinter/PrintEvent";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./createevent.css";

const Login = () => {
  const [payload, setPayload] = useState({});
  const [rcvData, setRcvData] = useState({});
  const [showEvents, setShowEvents] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setPayload((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    console.log(payload);
    e.preventDefault();
    try {
      const res = await axios.get("http://localhost:8800/events/", payload);
      console.log(res);
      setRcvData(res.data);
      setShowEvents(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
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
            />
            From date:
            <input
              type="Date"
              placeholder="fromDate"
              id="fromDate"
              name="fromDate"
              onChange={handleChange}
              className="lInput"
            />
            To date:
            <input
              type="Date"
              placeholder="toDate"
              id="toDate"
              name="toDate"
              onChange={handleChange}
              className="lInput"
            />
            Latitude:
            <input
              type="text"
              placeholder="latitude"
              id="latitude"
              name="latitude"
              onChange={handleChange}
              className="lInput"
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
            />
            Country:
            <input
              type="text"
              placeholder="Country"
              id="country"
              name="country"
              onChange={handleChange}
              className="lInput"
            />
            City:
            <input
              type="text"
              placeholder="city"
              id="city"
              name="city"
              onChange={handleChange}
              className="lInput"
            />
            Capacity:
            <input
              type="number"
              placeholder="capacity"
              id="capacity"
              name="capacity"
              onChange={handleChange}
              className="lInput"
            />
          </div>
        </div>
        <button onClick={handleClick} className="lButton">
          Get Event
        </button>
      </div>
      <h2>Events:</h2>
      {showEvents && rcvData.map((e) => PrintEvent(e))}
    </>
  );
};

export default Login;
