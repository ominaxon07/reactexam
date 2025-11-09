import "./ThisMonth.css";
import { products } from "../../mock";
import { FaRegHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleLike, addToCart } from "../../redux/shopSlice";
import image from "../../assets/image.png";

function ThisMonth({ onLike, onbasket }) {
  const dispatch = useDispatch();

  const handleLike = (item) => {
    dispatch(toggleLike(item));
    onLike && onLike();
  };

  const handleClick = (item) => {
    dispatch(addToCart(item));
    onbasket && onbasket();
  };

  return (
    <div className="month-container">

      <div className="month-header">
        <span className="red-line"></span>
        <p className="month-title">This Month</p>
      </div>
      <div className="month-top">
        <h2 className="month-heading">Best Selling Products</h2>
        <button className="view-btn">View All</button>
      </div>
      <div className="month-cards">
        {products.map((item) => (
          <div key={item.id} className="month-card">
            {item.discount && <div className="discount-badge">-{item.discount}%</div>}

            <Link to={`/product/${item.id}`}>
              <img src={item.image} alt={item.name} className="month-image" />
            </Link>

            <div className="like-btn" onClick={() => handleLike(item)}>
              <FaRegHeart />
            </div>

            <h3 className="month-name">{item.name}</h3>

            <p className="month-price">
              <b>${item.price}</b>
              <span className="old-price">${item.oldPrice}</span>
            </p>

            <p className="stars">⭐⭐⭐⭐⭐</p>

            <button className="month-add" onClick={() => handleClick(item)}>
              🛒 Add To Cart
            </button>
          </div>
        ))}
      </div>

      <div className="black-section">
        <div className="black-left">
          <p className="categories-text">Categories</p>
          <h4 className="black-title">Enhance Your<br />Music Experience</h4>

          <div className="timer">
            <div className="timer-box">
              <p>23</p>
              <span>Hours</span>
            </div>
            <div className="timer-box">
              <p>05</p>
              <span>Days</span>
            </div>
            <div className="timer-box">
              <p>58</p>
              <span>Minutes</span>
            </div>
            <div className="timer-box">
              <p>35</p>
              <span>Seconds</span>
            </div>
          </div>

          <button className="buy-btn">Buy Now!</button>
        </div>

        <div className="black-right">
          <img src={image} alt="Promo" className="black-image" />
        </div>
      </div>

    </div>
  );
}

export default ThisMonth;
