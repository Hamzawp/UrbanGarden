import React from "react";
import Carousel from "react-multi-carousel";
import Product from "./Product";
import "react-multi-carousel/lib/styles.css";
import "./ProductSlider.css";
import useFetch from "../../hooks/useFetch";

const TrendingSlider = () => {
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
  const { data, loading } = useFetch("/products/trending");
  const product = data?.map((item) => (
    <Product
      name={item._id.name}
      idx={item._id.id}
      key={item._id.id}
      url={item._id.photos[0]}
      price={item._id.price}
      description={item._id.desc}
    />
  ));

  return (
    <div className="parent">
      {/* <h2 className='parent-heading'>Treding Products</h2> */}
      {loading ? (
        "Loading"
      ) : (
        <Carousel
          responsive={responsive}
          slidesToSlide={2}
          draggable={true}
          swipeable={true}
        >
          {product}
        </Carousel>
      )}
    </div>
  );
};

export default TrendingSlider;
