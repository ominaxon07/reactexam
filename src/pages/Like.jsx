import React from "react";
import { useSelector } from "react-redux";
import "./Like.css";

export default function Like() {
  const liked = useSelector(state => state.shop.liked);

  return (
    <div className="wishlist-wrapper">
      <h2 className="wishlist-title">💖 Sizning Sevimlilaringiz 💖</h2>

      {liked.length === 0 ? (
        <p className="no-likes">Hozircha yoqtirilgan mahsulotlar yo‘q. Heart tugmasini bosib qo‘shing!</p>
      ) : (
        <div className="wishlist-grid">
          {liked.map(item => (
            <div key={item.id} className="wishlist-card">
              <div className="img-container">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="wishlist-info">
                <h3>{item.name}</h3>
                <p>${item.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
