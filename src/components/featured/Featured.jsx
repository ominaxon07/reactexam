import "./Featured.css";

import ps5 from "../../assets/ps5.png";
import womenImg from "../../assets/women.png";
import speakerImg from "../../assets/speacer.png";
import perfumeImg from "../../assets/perfume.png";

import img6 from "../../assets/Services.png";
import img7 from "../../assets/Services1.png";
import img8 from "../../assets/Services2.png";

function Featured() {
  return (
    <div className="featured-section">

      <div className="section-header features-header">
        <span className="red-line"></span>
        <p className="section-title">Featured</p>
      </div>
      <h2 className="section-heading">New Arrival</h2>

      <div className="featured-grid">
        <div className="featured-card">
          <img src={ps5} alt="ps5" />
        </div>
        <div className="featured-card">
          <img src={womenImg} alt="women" />
        </div>
        <div className="featured-card">
          <img src={speakerImg} alt="speaker" />
        </div>
        <div className="featured-card">
          <img src={perfumeImg} alt="perfume" />
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

    </div>
  );
}

export default Featured;
