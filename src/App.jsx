import React from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleLike, addToCart } from "./redux/shopSlice";

import Navbar from "./components/navbar/Navbar";
import Like from "./pages/Like";
import Basket from "./pages/Basket";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";

import Banner from "./components/banner/Banner";
import Today from "./components/today/Today";
import Category from "./components/category/Category";
import ThisMonth from "./components/thisMonth/ThisMonth";
import OurProduct from "./components/ourProduct/OurProduct";
import Featured from "./components/featured/Featured";
import Footer from "./components/footer/Footer";
import SingleRoute from './pages/SingleRoute';

export default function App() {
  const dispatch = useDispatch();

  const sampleProduct = {
    id: 1,
    name: "PS5 Console",
    price: 499.99,
    image: "https://via.placeholder.com/250",
  };

  return (
    <>
      <Navbar sampleProduct={sampleProduct} />

      <Routes>
        <Route path="/" element={
          <>
            <Banner/>
            <Today onLike={(product) => dispatch(toggleLike(product))} onBasket={(product) => dispatch(addToCart(product))}/>
            <Category />
            <ThisMonth />
            <OurProduct />
            <Featured />
            <Footer />
          </>
        }/>
        <Route path="/like" element={<Like />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/product/:id" element={<SingleRoute/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignUp />} />
      </Routes>
    </>
  );
}
