import "./eventmanage.css";
import CreateEvent from "../../components/eventcreater/CreateEvent";
import UpdateEvent from "../../components/eventupdater/UpdateEvent";
import ReadEvent from "../../components/eventreader/ReadEvent";
import DeleteEvent from "../../components/eventdeleter/DeleteEvent";

const Crudevents = () => {
  return (
    <div>
      <div className="navbar">
        <div className="navContainer">Welcome to Event CRUD page</div>
      </div>
      <div classname="crud">
        <div classname="cruditem">
          <h1>Create an Event:</h1>
          <CreateEvent />
        </div>
        <div classname="cruditem">
          <h1>Read an Event:</h1>
          <ReadEvent />
        </div>
        <div classname="cruditem">
          <h1>Update an Event:</h1>
          <UpdateEvent />
        </div>
        <div classname="cruditem">
          <h1>Delete an Event:</h1>
          <DeleteEvent />
        </div>
      </div>
    </div>
  );
};

export default Crudevents;
