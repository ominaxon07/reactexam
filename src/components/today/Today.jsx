import "./Today.css"
import { FaRegHeart } from "react-icons/fa6";
import { products } from "../../mock";
import { Link } from "react-router-dom";
import { toggleLike, addToCart } from "../../redux/shopSlice";
import { useDispatch } from "react-redux";

function Today({ onLike, onBasket }) {
  const dispatch = useDispatch();

  const handleLike = (item) => {
    dispatch(toggleLike(item));
    onLike(item);
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    onBasket(item);
  };

  return (
    <div className="today-container">

      <div className="today-header">
        <div className="today-label"></div>
        <p className="today-title">Today's</p>
      </div>

      <div className="flash-section">
        <h2 className="flash-title">Flash Sales</h2>

        <div className="timer-box">
          {["Days", "Hours", "Minutes", "Seconds"].map((time, i) => (
            <div className="time-block" key={i}>
              <p>{time}</p>
              <h3 className="time-num">03</h3>
              {i !== 4 && <p className="separator">:</p>}
            </div>
          ))}
        </div>
      </div>

      <div className="cards">
        {products.map((item) => (
          <div key={item.id} className="card">
            <div className="discount">-{item.discount}%</div>

            <Link to={`/product/${item.id}`}>
              <img src={item.image} alt={item.name} className="product-img" />
            </Link>

            <div
              className="like-icon"
              onClick={() => handleLike(item)}
            >
              <FaRegHeart />
            </div>

            <h3>{item.name}</h3>
            <p>
              <b>${item.price}</b> <span className="old-price">${item.oldPrice}</span>
            </p>
            <p>⭐⭐⭐</p>

            <button
              className="add-btn"
              onClick={() => handleAddToCart(item)}
            >
              🛒 Add To Cart
            </button>
          </div>
        ))}
      </div>

      <button className="view-btn">View All Products</button>
    </div>
  );
}

export default Today;
