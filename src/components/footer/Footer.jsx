import "./Footer.css";
import img9 from "../../assets/Frame 719.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-section">
          <h4 className="footer-logo">Exclusive</h4>
          <p className="footer-label">Subscribe</p>
          <p>Get 10% off your first order</p>
          <input type="email" placeholder="Enter your email" className="footer-input" />
        </div>

        <div className="footer-section">
          <h4>Support</h4>
          <p>111 Bijoy sarani, Dhaka</p>
          <p>DH 1515, Bangladesh</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        <div className="footer-section">
          <h4>Account</h4>
          <p>My Account</p>
          <p>Login / Register</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Shop</p>
        </div>

        <div className="footer-section">
          <h4>Quick Link</h4>
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>

        <div className="footer-section">
          <h4>Download App</h4>
          <p>Save $3 with App New User Only</p>
          <img src={img9} alt="App Store QR" className="footer-app-img" />
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2022 Rimel. All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
