import "./About.css";
import img6 from "../assets/Services.png";
import img7 from "../assets/Services1.png";
import img8 from "../assets/Services2.png";
import aboutImg from "../assets/rasm.png"; 
import { FaStore, FaShoppingBag, FaMoneyBillWave, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa6";
import Footer from '../components/footer/Footer';

const About = () => {

  const stats = [
    { id: 1, icon: <FaStore />, number: "10.5k", text: "Sellers active our site" },
    { id: 2, icon: <FaDollarSign />, number: "33k", text: "Monthly Product Sale", active: true },
    { id: 3, icon: <FaShoppingBag />, number: "45.5k", text: "Customer active in our site" },
    { id: 4, icon: <FaMoneyBillWave />, number: "25k", text: "Annual gross sale in our site" },
  ];

  const members = [
    { id: 1, name: "Michael Stone", role: "Founder & Chairman", img: "https://randomuser.me/api/portraits/men/32.jpg" },
    { id: 2, name: "Sophia Carter", role: "Managing Director", img: "https://randomuser.me/api/portraits/women/44.jpg" },
    { id: 3, name: "James Parker", role: "Product Designer", img: "https://randomuser.me/api/portraits/men/41.jpg" },
  ];

  return (
    <div className="about-page">
      <div className="about-wrapper">
        <div className="about-left">
          <p className="about-path">Home / About</p>
          <h1>Our Story</h1>
          <p className="about-text">
            Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh.
          </p>
          <p className="about-text">
            Exclusive has more than 1 Million products to offer, growing at a very fast pace.
          </p>
        </div>

        <div className="about-right">
          <img src={aboutImg} alt="Our Story" />
        </div>
      </div>
      <div className="stats-container">
        {stats.map(item => (
          <div key={item.id} className={`stats-card ${item.active ? "active" : ""}`}>
            <div className="stats-icon">{item.icon}</div>
            <h2>{item.number}</h2>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
      <div className="team-wrapper">
        <h2 className="team-title">Our Team</h2>
        <div className="team-container">
          {members.map(person => (
            <div className="team-card" key={person.id}>
              <img src={person.img} alt={person.name} />
              <h3>{person.name}</h3>
              <p>{person.role}</p>
              <div className="icons">
                <FaTwitter />
                <FaInstagram />
                <FaLinkedin />
              </div>
            </div>
          ))}
        </div>
      </div>


      <div className="service-cards">
              <div className="service-card">
                <img src={img8} alt="delivery" />
                <h5>FREE AND FAST DELIVERY</h5>
                <p>Free delivery for all orders over $140</p>
              </div>
      
              <div className="service-card">
                <img src={img7} alt="customer service" />
                <h5>24/7 CUSTOMER SERVICE</h5>
                <p>Friendly 24/7 customer support</p>
              </div>
      
              <div className="service-card">
                <img src={img6} alt="secure payment" />
                <h5>SECURE PAYMENT</h5>
                <p>We ensure secure payment</p>
              </div>
            </div>
      <Footer/>
    </div>
  );
};

export default About;
