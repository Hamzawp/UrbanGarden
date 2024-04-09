import React from "react";
import "./OfferSlider.css";
const OfferSlide = (props) => {
  return (
    <div>
      <div className="offercard">
        <img className="slider--image" src={props.url} alt="product-image" />
      </div>
    </div>
  );
};

export default OfferSlide;
