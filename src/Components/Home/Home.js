import React from "react";
import Navbar from "../Home/Navbar";
import Hero from "../Home/Hero";
import About from "../Home/About";
import Product from "../Home/Product";
import JoinUs from "../Home/JoinUs";
import FeaturedArt from "../Home/FeaturedArt";
import Contact from "../Home/Contact";
import Footer from "../Home/Footer";
import '../../Styles/Root.scss'

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Product />
      <JoinUs />
      <FeaturedArt />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
