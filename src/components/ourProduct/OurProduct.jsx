import "./OurProduct.css";
import { carts } from "../../mock";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { toggleLike, addToCart } from "../../redux/shopSlice";

function OurProduct({ onLike, onbasket }) {
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
    <div className="ourpro-container">

      <div className="section-header">
        <span className="red-line"></span>
        <p className="section-title">Our Products</p>
      </div>

      <h2 className="section-heading">Explore Our Products</h2>

      <div className="cards">
        {carts.map((item) => (
          <div key={item.id} className="card">
            {item.discount && <div className="discount-badge">-{item.discount}%</div>}

            <Link to={`/product/${item.id}`}>
              <img src={item.image} alt={item.name} className="card-image" />
            </Link>

            <div className="like-icon" onClick={() => handleLike(item)}>
              <FaRegHeart />
            </div>

            <h3 className="card-name">{item.name}</h3>

            <p className="card-price">
              <b>${item.price}</b>
              <span className="old-price">${item.oldPrice}</span>
            </p>

            <p className="stars">⭐⭐⭐</p>

            <button className="add-btn" onClick={() => handleClick(item)}>
              🛒 Add To Cart
            </button>
          </div>
        ))}
      </div>

      <button className="view-btn">View All Products</button>

      
    </div>
  );
}

export default OurProduct;
