import React, { useEffect, useState } from "react";
import banner1 from "../../assets/banner1.png";
import { FaChevronRight } from "react-icons/fa";
import "./Banner.css";

const Banner = () => {
  const images = [banner1];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="container">
      <div className="main-content">
        <ul className="sidebar">
          {[
            "Woman’s Fashion",
            "Men’s Fashion",
            "Electronics",
            "Home & Lifestyle",
            "Medicine",
            "Sports & Outdoor",
            "Baby’s & Toys",
            "Groceries & Pets",
            "Health & Beauty",
          ].map((item, i) => (
            <li key={i}>
              {item} <FaChevronRight className="arrow" />
            </li>
          ))}
        </ul>

        <div className="slider">
          <img src={images[current]} alt="banner" className="banner-img fade" />
          
        </div>
      </div>
    </div>
  );
};

export default Banner;
