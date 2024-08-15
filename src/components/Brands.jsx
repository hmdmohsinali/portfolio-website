import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Brands({ data }) {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,  // Enable infinite loop for auto sliding
    autoplay: true,  // Enable auto-slide
    autoplaySpeed: 1000,  // Set duration between slides (0.5 seconds)
    speed: 5000,  // Transition speed for slide movement (0.5 seconds)
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="brand-section gray-bg">
      <div
        className="container"
        data-aos="fade"
        data-aos-duration="1200"
        data-aos-delay="500"
      >
        <Slider {...settings} className="slider-gap-50">
          {data.map((item, index) => (
            <div key={index}>
              <div className="pt-3 pb-3 text-center d-flex align-items-center justify-content-center w-100">
                {/* Adjusted image size */}
                <img src={item.src} alt={item.alt} style={{ width: '70px', height: 'auto' }} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
