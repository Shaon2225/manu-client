import React from "react";
import Slider from "react-slick/lib/slider";
const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerPadding: "1.5rem",
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="absolute top-30 right-0 z-30 opacity-100 w-3/5 h-3/4 bg-primary p-20">
        <h1>Welcome to voltlab</h1>
      </div>
      <div>
        <div>
          <Slider {...settings}>
            <div>
              <div>
                <img src="img/ArduinoUno.jpg" alt="" />
              </div>
            </div>
            <div>
              <img src="img/Nano.jpg" alt="" />
            </div>
            <div>
              <img src="img/raspabrypi.jpg" alt="" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Banner;
