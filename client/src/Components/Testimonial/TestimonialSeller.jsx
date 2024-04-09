import React, { useState } from "react";
import "./TestimonialSeller.css";

const TestimonialSeller = (props) => {
  const testimonials = [
    {
      id: 1,
      quote:
        "“ I have been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
      author: "Tanya Sinclair",
      role: "UX Engineer",
      imageSrc: "https://alcs-slider.netlify.app/images/image-tanya.jpg",
    },
    {
      id: 2,
      quote:
        "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
      author: "John Tarkpor",
      role: "Junior Front-end Developer",
      imageSrc: "https://alcs-slider.netlify.app/images/image-john.jpg",
    },
    {
      id: 3,
      quote:
        "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
      author: "Om Tarkpor",
      role: "Junior Front-end Developer",
      imageSrc: "https://alcs-slider.netlify.app/images/image-john.jpg",
    },
  ];

  const [index, setIndex] = useState(0);

  const display = (currentIndex) => {
    return currentIndex === index ? "flex" : "none";
  };

  const nextSlide = () => {
    let newIndex = index + 1;
    if (newIndex > testimonials.length - 1) {
      newIndex = 0;
    }
    setIndex(newIndex);
  };

  const prevSlide = () => {
    let newIndex = index - 1;
    if (newIndex < 0) {
      newIndex = testimonials.length - 1;
    }
    setIndex(newIndex);
  };

  return (
    <div className="Testi_headCont">
      <h1 className="Testi_head">What Our Client Says About Us</h1>
      <main>
        <div className="slider">
          <div className="buttons">
            <div className="previous" onClick={prevSlide}></div>
            <div className="next" onClick={nextSlide}></div>
          </div>

          {testimonials.map((item, currentIndex) => (
            <div className="slide" key={item.id} style={{ display: display(currentIndex) }}>
              <div className="testimonial">
                <blockquote>{item.quote}</blockquote>
                <p className="author">
                  {item.author}
                  <span>{item.role}</span>
                </p>
              </div>

              <div className="slider-img">
                <img src={item.imageSrc} alt="Author Image" />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default TestimonialSeller;
