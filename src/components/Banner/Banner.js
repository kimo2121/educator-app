import React from "react";
import Slider from "react-slick";
import image1 from "../../assets/image1.png";

import { NextArrow, PrevArrow } from "../../util/util_functions";

import "./Banner.css";

const Banner = () => {
  const bannerData = [
    { img: image1, text: "ادرس علوم اونلاين مع الاستاذ محمد أحمد" },
    { img: image1, text: "ادرس علوم اونلاين مع الاستاذ محمد أحمد" },
  ];
  const settings = {
    infinite: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    autoplay: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="banner-component">
      <Slider {...settings}>
        {bannerData.map((item, index) => (
          <div className="each-slide-in-banner" key={index}>
            <img src={item.img} alt="" />
            <div>{item.text}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
