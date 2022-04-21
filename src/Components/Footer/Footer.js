import React from "react";
import CAGC1 from "../../Assets/CAGC1.png";
import twitter from "../../Assets/images/social/twitter.png";
import talk from "../../Assets/images/social/talk.png";
import victor from "../../Assets/images/social/Vector.png";
import victor2 from "../../Assets/images/social/Vector2.png";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="container-fluid footerContainer  pt-5 pb-5">
      <div className="row footerRow">
        <div className="col-lg-4 col-md-12 col-sm-12 d-flex justify-content-center align-items-center">
          <img src={CAGC1} alt="logo" />
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 d-flex justify-content-center align-items-center footerMiddleSection">
          <a className="siteLink" href="/">
            maguni@crazyapegongyeclub.com
          </a>
          <h6 className="copyWrite">
            COPYRIGHT Crazyapegoongyeclub. ALL RIGHTS RESERVED
          </h6>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 d-flex justify-content-center align-items-center">
          <a href="#" class=" socialLinks">
            <img className="socialImages" src={twitter} />
          </a>
          <a href="#" class=" socialLinks">
            <img className="socialImages" src={victor} />
          </a>
          <a href="#" class=" socialLinks">
            <img className="socialImages" src={talk} />
          </a>

          <a href="#" class=" socialLinks">
            <img className="socialImages" src={victor2} />
          </a>
        </div>
      </div>
    </div>
  );
}
