import Footer from "../../components/footer/Footer";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="homeContainer">
        <h1 className="homeTitle">Welcome to Eventingo!</h1>
        <h2 className="homeTitle">The best Event Organizer in India</h2>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
