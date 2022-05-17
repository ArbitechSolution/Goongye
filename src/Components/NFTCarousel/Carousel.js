import React, { Component } from "react";
// import Carousel from "react-bootstrap/Carousel";
import img1 from "../../Assets/images/113.png";
import img2 from "../../Assets/images/122.png";
import img3 from "../../Assets/images/131.png";
import img4 from "../../Assets/images/3 618266.png";
import img5 from "../../Assets/images/4 6.png";
import img6 from "../../Assets/images/24 2.png";
import "./Carousel.css";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";

export default function NFTCarousel() {
  const { t, i18n } = useTranslation();

  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 6,
    swipeToSlide: true,
    speed: 100,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1760,
        settings: {
          className: "center",
          infinite: true,
          centerPadding: "10px",
          slidesToShow: 5,
          swipeToSlide: true,
          speed: 100,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          className: "center",
          infinite: true,
          centerPadding: "10px",
          slidesToShow: 5,
          swipeToSlide: true,
          speed: 100,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          className: "center",
          infinite: true,
          centerPadding: "10px",
          slidesToShow: 5,
          swipeToSlide: true,
          speed: 100,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          className: "center",
          infinite: true,
          centerPadding: "60px",
          slidesToShow: 4,
          swipeToSlide: true,
          speed: 100,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          className: "center",
          infinite: true,
          centerPadding: "60px",
          slidesToShow: 3,
          swipeToSlide: true,
          speed: 100,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          className: "center",
          infinite: true,
          centerPadding: "60px",
          slidesToShow: 2,
          swipeToSlide: true,
          speed: 100,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          className: "center",
          infinite: true,
          centerPadding: "60px",
          slidesToShow: 1,
          swipeToSlide: true,
          speed: 100,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
    ],
  };
  return (
    <div className="container-fluid sliderContainer pt-3 pb-3">
      <h2
        className="d-flex justify-content-center mt-5 mb-5 text-white "
        data-aos="fade-up"
        data-aos-duration="3000"
        data-aos-offset="200"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        {t("nftCarousel.1")}
      </h2>
      <Slider
        {...settings}
        className="sliderCarousel"
        data-aos="fade-up"
        data-aos-duration="3000"
        data-aos-offset="200"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <div>
          <div className="cardImage">
            <img src={img1} class=" nft-images ms-3" alt="..." />
          </div>
        </div>
        <div>
          <div className="cardImage">
            <img src={img2} class=" nft-images ms-3" alt="..." />
          </div>
        </div>
        <div>
          <div className="cardImage">
            <img src={img3} class=" nft-images ms-3" alt="..." />
          </div>
        </div>
        <div>
          <div className="cardImage">
            <img src={img4} class=" nft-images ms-3" alt="..." />
          </div>
        </div>
        <div>
          <div className="cardImage">
            <img src={img5} class=" nft-images ms-3" alt="..." />
          </div>
        </div>
        <div>
          <div className="cardImage">
            <img src={img6} class=" nft-images ms-3" alt="..." />
          </div>
        </div>
        <div>
          <div className="cardImage">
            <img src={img1} class=" nft-images ms-3" alt="..." />
          </div>
        </div>
        <div>
          <div className="cardImage">
            <img src={img2} class=" nft-images ms-3" alt="..." />
          </div>
        </div>
        <div>
          <div className="cardImage">
            <img src={img3} class=" nft-images ms-3" alt="..." />
          </div>
        </div>
        <div>
          <div className="cardImage">
            <img src={img4} class=" nft-images ms-3" alt="..." />
          </div>
        </div>
        <div>
          <div className="cardImage">
            <img src={img5} class=" nft-images ms-3" alt="..." />
          </div>
        </div>
        <div>
          <div className="cardImage">
            <img src={img6} class=" nft-images ms-3" alt="..." />
          </div>
        </div>
      </Slider>
      <div className="d-flex justify-content-center align-items-center mt-5 mb-5 ">
        <button
          className="btnOpenSea mt-2 "
          data-aos="zoom-in"
          data-aos-duration="3000"
          data-aos-offset="200"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          {t("nftCarousel.2")}
        </button>
      </div>
    </div>
  );
}
