import React from "react";
import CAGC1 from "../../Assets/CAGC1.png";
import twitter from "../../Assets/images/social/twitter.png";
import talk from "../../Assets/images/social/talk.png";
import victor from "../../Assets/images/social/Vector.png";
import victor2 from "../../Assets/images/social/Vector2.png";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="container-fluid footerContainer  pt-2 pb-2">
      <div className="row footerRow">
        <div className="col-lg-4 col-md-12 col-sm-12 d-flex justify-content-center align-items-center pt-2">
          <img src={CAGC1} alt="logo" />
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 d-flex justify-content-center align-items-center footerMiddleSection  pt-2">
          <a className="siteLink" href="/">
            maguni@crazyapegongyeclub.com
          </a>
          <h6 className="copyWrite">
            COPYRIGHT Crazyapegoongyeclub. ALL RIGHTS RESERVED
          </h6>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 d-flex justify-content-center align-items-center  pt-2">
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
