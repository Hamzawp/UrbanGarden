import React from "react";
import Carousel from "react-multi-carousel";
import Product from "./Product";
import "react-multi-carousel/lib/styles.css";
import "../Carousel/ProductSlider.css";
import "./ProductSlider.css";
import { productData } from "../data";

const ProductSlider = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1440 },
      items: 5,
    },
    miniDesktop: {
      breakpoint: { max: 1440, min: 1024 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const product = productData.map((item) => (
    <Product
      name={item.name}
      key={item._id}
      url={item.imageurl}
      price={item.price}
      description={item.desc}
      idx={item._id}
    />
  ));

  return (
    <div className="parent">
      {/* <h2 className='parent-heading'>Treding Products</h2> */}
      <Carousel
        responsive={responsive}
        slidesToSlide={1}
        draggable={true}
        swipeable={true}
      >
        {product}
      </Carousel>
    </div>
  );
};

export default ProductSlider;
