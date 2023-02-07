import "./listevent.css";
import { Link } from "react-router-dom";

const ListEvent = (data) => {
  return (
    <div>
      <div className="Event">
        <div className="lContainerChild ">
          <b>ID:</b>
          {data._id}
          <b>Name:</b>
          {data.name}
          <b>From date:</b>
          {data.fromDate}
          <b>To date:</b>
          {data.toDate}
          <b>Latitude:</b>
          {data.latitude}
        </div>
        <div className="lContainerChild ">
          <b>Longitude:</b>
          {data.longitude}
          <b>Country:</b>
          {data.country}
          <b>City:</b>
          {data.city}
          <b>Capacity:</b>
          {data.capacity}
        </div>
        <Link
          to={"/event/register/new/"}
          style={{ color: "inherit", textDecoration: "none" }}
          target="_blank"
          props={data._id}
        >
          <button className="navButton">Register for this Event</button>
        </Link>
      </div>
    </div>
  );
};

export default ListEvent;
