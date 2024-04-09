import React from "react";
import Carousel from "react-multi-carousel";
import Product from "./Product";
import "./ProductSlider.css";
import "react-multi-carousel/lib/styles.css";
import useFetch from "../../hooks/useFetch";

const GardeningSlider = () => {
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
  let product = [];
  const { data, loading } = useFetch("/products/categories?category=Gardening");
  if (data[0] == null) {
    product = [];
  } else {
    product = data?.map((item) => (
      <Product
        name={item.name}
        key={item._id}
        url={item.photos[0]}
        price={item.price}
        description={item.desc}
        idx={item._id}
      />
    ));
  }

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

export default GardeningSlider;
