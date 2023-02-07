import axios from "axios";
import { useState } from "react";
import PrintEvent from "../eventprinter/PrintEvent";

const EventRegisteredByUser = (props) => {
  const [payload, setPayload] = useState({
    name: "Indira",
  });
  const [showEvents, setShowEvents] = useState(false);
  const [rcvData, setRcvData] = useState({});

  const handleChange = (e) => {
    // setPayload((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      console.log(payload);
      const res = await axios.get(
        "http://localhost:8800/events/register/?name='Indira'",
        payload
      );
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
          <div className="lContainerChild "></div>
        </div>
        <>
          UserName:
          <input
            type="text"
            placeholder="Username"
            id="name"
            name="name"
            onChange={handleChange}
            className="lInput"
            required
          />
          <button onClick={handleClick} className="lButton">
            Show all your registered events
          </button>
        </>
        {showEvents && PrintEvent(rcvData[0])}
      </div>
    </>
  );
};

export default EventRegisteredByUser;
