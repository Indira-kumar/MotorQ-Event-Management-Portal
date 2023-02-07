import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Adminlogin from "./pages/adminLogin/Login";
import Eventmanage from "./pages/eventmanage/Eventmanage";
import Crudevents from "./pages/eventmanage/Crudevents";
import Event from "./pages/event/Event";
import RegisterList from "./pages/event/RegisterList";
import EventRegistration from "./components/eventregistration/EventRegistration";
import EventRegisteredByUser from "./components/userevents/EventRegisteredByUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/adminlogin" element={<Adminlogin />} />
        <Route path="/eventmanage" element={<Eventmanage />} />
        <Route path="/eventmanage/crudevents" element={<Crudevents />} />
        <Route path="/event" element={<Event />} />
        <Route path="/event/register" element={<RegisterList />} />
        <Route path="/event/register/new" element={<EventRegistration />} />
        <Route path="/event/registered" element={<EventRegisteredByUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
