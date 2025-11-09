import React, { useState } from "react";
import "./SignUp.css";
import rasm from "../assets/sideImg.png";

const SignUp = () => {
  const [form, setForm] = useState({
    first: "",
    last: "",
    email: "",
    password: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.agree) return alert("Ilova shartlari bilan tanishing!");

    alert("Tabriklaymiz! Siz endi bizning jamoadoshimizsiz ✅");
  };

  return (
    <div className="sign-wrapper">
      <div className="image-side">
        <img src={rasm} alt="signup" />
      </div>

      <div className="form-side">
        <h2 className="title">Eksklyuziv jamoaga qo‘shiling!</h2>
        <p className="subtitle">
          Sovg‘alar, chegirmalar va maxsus takliflar — eng avval sizga ✨
        </p>

        <form onSubmit={handleSubmit}>
          <div className="input-row">
            <input
              type="text"
              name="first"
              placeholder="Ismingiz"
              required
              value={form.first}
              onChange={handleChange}
            />
            <input
              type="text"
              name="last"
              placeholder="Familiya"
              required
              value={form.last}
              onChange={handleChange}
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email manzil"
            required
            value={form.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Parol (6+ belgidan) iborat bo'lsin"
            required
            minLength="6"
            value={form.password}
            onChange={handleChange}
          />

          <label className="check-line">
            <input type="checkbox" name="agree" checked={form.agree} onChange={handleChange} />
            Barcha qoidalarga roziman
          </label>

          <button className="sign-btn" type="submit">
            A'zo bo‘lish
          </button>
        </form>

        <button className="google-btn">Google orqali davom etish</button>

        <p className="login-text">
          Allaqachon siz bizni jamoadoshimizmisiz? <a href="#">Kirish</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
