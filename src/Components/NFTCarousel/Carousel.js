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

export default function NFTCarousel() {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    speed: 100,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
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
    <div className="sliderContainer pt-3 pb-3">
      <div>
        <h2 className="d-flex justify-content-center mt-5 mb-5 text-white">
          CRAZY APE GOONGYE NFT
        </h2>
        <Slider {...settings}>
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
          <button className="btnOpenSea mt-2">OpenSea</button>
        </div>
      </div>
    </div>
  );
}
