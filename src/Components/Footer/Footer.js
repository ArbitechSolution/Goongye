import React from "react";
import CAGC1 from "../../Assets/CAGC1.png";
import twitter from "../../Assets/images/social/twitter.png";
import talk from "../../Assets/images/social/talk.png";
import victor from "../../Assets/images/social/Vector.png";
import victor2 from "../../Assets/images/social/Vector2.png";
import "./Footer.css";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t, i18n } = useTranslation();

  return (
    <div className="container-fluid footerContainer  pt-2 pb-2">
      <div
        className="container row footerRow"
        data-aos="fade-down"
        data-aos-duration="2000"
        data-aos-offset="200"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <div className="col-lg-4 col-md-12 col-sm-12 d-flex justify-content-center align-items-center pt-2">
          <img src={CAGC1} alt="logo" />
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 d-flex justify-content-center align-items-center footerMiddleSection  pt-2">
          <a className="siteLink" href="/">
            maguni@crazyapegongyeclub.com
          </a>
          <h6 className="copyWrite">
            {t("footer.1")}
          </h6>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 d-flex justify-content-center align-items-center  pt-2">
          <a href="https://twitter.com/" target="_blank" class=" socialLinks">
            <img className="socialImages" src={twitter} />
          </a>
          <a class=" socialLinks" href="https://telegram.org/" target="_blank">
            <img className="socialImages" src={victor} />
          </a>
          <a
            href="https://accounts.kakao.com/login?continue=https%3A%2F%2Faccounts.kakao.com%2Fweblogin%2Faccount%2Finfo"
            target="_blank"
            class=" socialLinks"
          >
            <img className="socialImages" src={talk} />
          </a>

          <a
            href="https://support.discord.com/hc/en-us"
            class=" socialLinks"
            target="_blank"
          >
            <img className="socialImages" src={victor2} />
          </a>
        </div>
      </div>
    </div>
  );
}
