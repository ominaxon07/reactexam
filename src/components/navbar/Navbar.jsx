import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  FaHeart,
  FaShoppingCart,
  FaUserCircle,
  FaUser,
  FaBox,
  FaTimesCircle,
  FaStar,
  FaSignOutAlt,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const liked = useSelector((state) => state.shop.liked);
  const cart = useSelector((state) => state.shop.cart);
  const user = useSelector((state) => state.shop.user);
  const navigate = useNavigate();

  const [openMenu, setOpenMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const goToLikes = () => navigate("/like");
  const goToCart = () => navigate("/basket");

  return (
    <header className="site-header">
      <div className="logo-and-hamburger">
        <h2 className="logo">Exclusive</h2>

        <div className="hamburger" onClick={() => setMobileMenu(!mobileMenu)}>
          {mobileMenu ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      <nav className={`site-nav ${mobileMenu ? "active" : ""}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/signin">Sign In</Link></li>
        </ul>
      </nav>

      <div className="nav-actions">
        {/* search */}
        <div className="input-wrap">
          <input type="text" placeholder="Search for products..." />
          <button><FaSearch /></button>
        </div>

        {/* icons */}
        <div className="icons">
          {/* Likes */}
          <div className="icon-wrapper" onClick={goToLikes}>
            <FaHeart className="icon" style={{ color: liked.length > 0 ? "red" : "#555" }} />
            {liked.length > 0 && <span className="badge">{liked.length}</span>}
          </div>

          {/* Cart */}
          <div className="icon-wrapper" onClick={goToCart}>
            <FaShoppingCart className="icon" style={{ color: cart.length > 0 ? "red" : "#555" }} />
            {cart.length > 0 && <span className="badge">{cart.length}</span>}
          </div>

          {/* User */}
          <div className="icon-wrapper" onClick={() => setOpenMenu(!openMenu)}>
            <FaUserCircle className="icon" />
          </div>

          {openMenu && (
            <div className="dropdown">
              <p><strong>{user.name}</strong></p>
              <p>{user.email}</p>
              <hr />
              <div className="drop-item"><FaUser /> Manage Account</div>
              <div className="drop-item"><FaBox /> My Orders</div>
              <div className="drop-item"><FaTimesCircle /> Cancellations</div>
              <div className="drop-item"><FaStar /> My Reviews</div>
              <div className="drop-item"><FaSignOutAlt /> Logout</div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
