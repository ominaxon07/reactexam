import "./Today.css";
import { products } from "../../mock";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleLike, addToCart } from "../../redux/shopSlice";

function Today({ onLike, onbasket }) {
  const dispatch = useDispatch();
  const liked = useSelector((state) => state.shop.liked);

  const handleLike = (item) => {
    dispatch(toggleLike(item));
    onLike && onLike(item);
  };

  const handleClick = (item) => {
    dispatch(addToCart(item));
    onbasket && onbasket(item);
  };

  const timerLabels = ["Days", "Hours", "Minutes", "Seconds"];

  return (
    <div className="month-container">
      <div className="month-header">
        <span className="red-line"></span>
        <p className="month-title">Today's</p>
      </div>

      <div className="month-top">
        <h2 className="month-heading">Flash Sales</h2>
      </div>
      <div className="timer-box">
        {timerLabels.map((time, i, arr) => (
          <div className="time-block" key={i}>
            <p>{time}</p>
            <h3 className="time-num">03</h3>
            {i !== arr.length - 1 && <p className="separator">:</p>}
          </div>
        ))}
      </div>
      <div className="month-cards">
        {products.map((item) => {
          const isLiked = liked.some((prod) => prod.id === item.id);
          return (
            <div key={item.id} className="month-card">
              {item.discount && (
                <div className="discount-badge">-{item.discount}%</div>
              )}

              <Link to={`/product/${item.id}`}>
                <img src={item.image} alt={item.name} className="month-image" />
              </Link>

              <div
                className="like-btn"
                onClick={() => handleLike(item)}
                style={{ color: isLiked ? "red" : "#777" }}
              >
                {isLiked ? <FaHeart /> : <FaRegHeart />}
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
          );
        })}
      </div>
    </div>
  );
}

export default Today;
