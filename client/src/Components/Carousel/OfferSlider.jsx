import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import '../Carousel/ProductSlider.css'
import OfferSlide from "./OfferSlide";
import { OfferData } from "../data";
const OfferSlider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const Offer = OfferData.map((item) => (
    <OfferSlide url={item.imageurl} key={item.id} />
  ));

  return (
    <div className="parent" style={{ marginBottom: "2rem" }}>
      <Carousel
        responsive={responsive}
        slidesToSlide={1}
        draggable={true}
        swipeable={true}
      >
        {Offer}
      </Carousel>
    </div>
  );
};

export default OfferSlider;
