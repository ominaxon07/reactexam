import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../mock";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, toggleLike } from "../redux/shopSlice";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import "./SingleRoute.css";

export default function SingleRoute() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const liked = useSelector(state => state.shop.liked);
  const cart = useSelector(state => state.shop.cart);

  const productId = parseInt(id, 10);
  if (isNaN(productId)) {
    return <div className="error">Noto'g'ri ID: {id}</div>;
  }

  const product = products.find(p => p.id === productId);
  if (!product) {
    return (
      <div className="not-found">
        <h2>Mahsulot topilmadi</h2>
        <p>ID: <strong>{id}</strong></p>
        <p>Mavjud ID'lar: <strong>{products.map(p => p.id).join(", ")}</strong></p>
      </div>
    );
  }

  const isLiked = liked.some(item => item.id === product.id);
  const isInCart = cart.some(item => item.id === product.id);

  const handleLike = () => {
    dispatch(toggleLike(product));
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="single-product-container">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-details">
        <h1 className="product-name">{product.name}</h1>

        <div className="product-price">
          <span className="current-price">${product.price.toFixed(2)}</span>
          {product.oldPrice && (
            <span className="old-price">${product.oldPrice.toFixed(2)}</span>
          )}
          {product.discount && (
            <span className="discount">-{product.discount}%</span>
          )}
        </div>

        <p className="product-description">{product.description}</p>

        <div className="product-actions">
          <button
            className={`like-btn ${isLiked ? "liked" : ""}`}
            onClick={handleLike}
          >
            <FaHeart /> {isLiked ? "Yoqtirildi" : "Yoqtirish"}
          </button>

          <button
            className={`cart-btn ${isInCart ? "in-cart" : ""}`}
            onClick={handleAddToCart}
          >
            <FaShoppingCart /> {isInCart ? "Savatda" : "Savatga qo'shish"}
          </button>
        </div>
      </div>
    </div>
  );
}
