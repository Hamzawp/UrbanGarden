import React, { useEffect } from "react";
import AOS from "aos";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import Service from "../../Components/Service/Service";
import CategoryBox from "../../Components/Category/CategoryBox";
import Footer from "../../Components/Footer/Footer";
import ProductSlider from "../../Components/Carousel/ProductSlider";
import Timeline from "../../Components/Timeline/Timeline";
import Testimonial from "../../Components/Testimonial/Testimonial";
import UserSeller from "../../Components/UserSeller/UserSeller";
import TestimonialSeller from "../../Components/Testimonial/TestimonialSeller";
import { FaAngleDoubleRight } from "react-icons/fa";
import "aos/dist/aos.css";
import "./LandingPage.css";
import "react-multi-carousel/lib/styles.css";
import { categoryData } from "../../Components/data";
import Reviews from "../../Components/Review/Review";
const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  const category = categoryData.map((item) => (
    <CategoryBox title={item.title} key={item.id} content={item.content} />
  ));
  return (
    <>
      <Navbar />
      <Hero />

      <div className="category_section">
        <h1>CATEGORIES TO BAG</h1>
        <main className="page-content">{category}</main>
      </div>
      <Service />
      <Timeline />

      <Reviews />
      <h2 className="carouselheading">
        Some of Featured products{" "}
        <FaAngleDoubleRight style={{ paddingTop: "10px", fontSize: "35px" }} />
      </h2>
      <ProductSlider />
      <UserSeller />
      <Footer />
    </>
  );
};

export default Header;
