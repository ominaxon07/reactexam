import React from "react";
import { useSelector } from "react-redux";
import "./Basket.css";

export default function Basket() {
  const cart = useSelector(state => state.shop.cart);

  return (
    <div className="basket-wrapper">
      <h2 className="basket-title">🛒 Sizning Savat 🛒</h2>

      {cart.length === 0 ? (
        <p className="no-items">Savatingiz hozircha bo‘sh.</p>
      ) : (
        <div className="basket-grid">
          {cart.map(item => (
            <div key={item.id} className="basket-card">
              <div className="img-container">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="basket-info">
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
