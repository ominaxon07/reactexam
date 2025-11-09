import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    alert("Xabaringiz muvaffaqiyatli yuborildi ✅");
    setData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <section className="contact-wrapper">
      <div className="contact-left">
        <h2>Biz sizni eshitishga tayyormiz</h2>
        <p>
          Savolingiz bormi yoki hamkorlik taklifi yo‘llamoqchimisiz?  
          Formani to‘ldiring — jamoamiz siz bilan qisqa vaqt ichida bog‘lanadi.
        </p>

        <form onSubmit={submitForm}>
          <div className="row">
            <input type="text" name="name" placeholder="Ismingiz" required value={data.name} onChange={handleChange}/>
            <input type="email" name="email" placeholder="Email manzil" required value={data.email} onChange={handleChange}/>
          </div>

          <div className="row">
            <input type="tel" name="phone" placeholder="Telefon raqam" value={data.phone} onChange={handleChange}/>
            <input type="text" name="subject" placeholder="Mavzu" required value={data.subject} onChange={handleChange}/>
          </div>

          <textarea name="message" rows="5" placeholder="Xabaringizni yozing..." required value={data.message} onChange={handleChange}></textarea>

          <button type="submit" className="send-btn">Jo‘natish</button>
        </form>
      </div>

      <div className="contact-right">
        <h3>Aloqa ma'lumotlarimiz</h3>

        <div className="info-box">
          <p><strong>Manzil:</strong> Andijon Ulug'nor – 45</p>
          <p><strong>Telefon:</strong> +998 99 123 45 67</p>
          <p><strong>Email:</strong> support@brand.uz</p>
        </div>

        <div className="social-area">
          <p>Bizni kuzating:</p>
          <div className="social-links">
            <a href="#">Instagram</a>
            <a href="#">Telegram</a>
            <a href="#">Facebook</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
