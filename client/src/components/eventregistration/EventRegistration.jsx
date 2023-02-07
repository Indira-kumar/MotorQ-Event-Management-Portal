import axios from "axios";
import { useState } from "react";
import PrintEvent from "../eventprinter/PrintEvent";
import { useNavigate } from "react-router-dom";

const EventRegistration = (props) => {
  const [payload, setPayload] = useState({
    city: "Karur",
  });
  const [showEvents, setShowEvents] = useState(false);
  const [rcvData, setRcvData] = useState({});

  const handleChange = (e) => {
    setPayload((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
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
  const [Data, setData] = useState({
    name: undefined,
  });

  const navigate = useNavigate();
  const handleChangeRegister = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
      eventid: rcvData[0]._id,
    }));
  };

  const handleClickRegister = async (e) => {
    console.log(Data);
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8800/events/register",
        Data
      );

      navigate("/adminlogin/crudevents");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="login">
        <div className="lContainer">
          <div className="lContainerChild "></div>
        </div>
        <button onClick={handleClick} className="lButton">
          Register
        </button>
        {showEvents && PrintEvent(rcvData[0])}
        <>
          UserName:
          <input
            type="text"
            placeholder="name"
            id="name"
            name="name"
            onChange={handleChangeRegister}
            className="lInput"
            required
          />
          <button onClick={handleClickRegister} className="lButton">
            Register for this event
          </button>
        </>
      </div>
    </>
  );
};

export default EventRegistration;
