import React from "react";
import Slider from "react-slick";
import "../../../styles/slider.css";

import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";

const TestimonialsSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 2000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <p className="review-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis sed quis accusamus error eius itaque porro adipisci dolore nostrum alias omnis, voluptatibus sunt nesciunt, fugiat aperiam delectus neque molestias nam.
        </p>
        <div className="slider-content d-flex align-items-center gap-3">
          <img src={ava01} alt="john-doe-image"  />
          <h6>John doe</h6>
        </div>
      </div>
      <div>
        <p className="review-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          laborum saepe eos veritatis ratione autem ut sunt aliquam, et delectus
          aspernatur sequi dignissimos quia modi, laudantium eaque totam. Minus,
          excepturi?
        </p>
        <div className="slider-content d-flex align-items-center gap-3">
          <img src={ava02} alt="john-doe-image"  />
          <h6>Mitchell Marsh</h6>
        </div>
      </div>
      <div>
        <p className="review-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nobis ut, a tempora, aspernatur reiciendis nam perferendis assumenda odit natus enim hic sunt. Corporis architecto unde hic necessitatibus dicta velit.
        </p>
        <div className="slider-content d-flex align-items-center gap-3">
          <img src={ava03} alt="john-doe-image"  />
          <h6>Steven Crock</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialsSlider;
