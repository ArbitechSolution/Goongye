import React from "react";
import banner1 from "../../Assets/banner1.png";
import "./landPage.css";
import { useTranslation } from "react-i18next";

export default function LandPage() {
  const { t, i18n } = useTranslation();

  return (
    <div className="container-fluid heroSection pt-5" id="/">
      <div className="row heroRowContainer">
        <div className="col d-flex justify-content-center align-items-center mt-5">
          <img
            className="myBabberImage "
            data-aos="zoom-in"
            data-aos-duration="3000"
            src={banner1}
          ></img>
        </div>
        <div className="col d-flex justify-content-center align-items-center">
          <span
            className=" ms-4 myColor"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            {t("landing.title")}
          </span>
        </div>
        <div className="col d-flex justify-content-center align-items-center">
          <span
            className=" ms-4  myColor "
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            {t("landing.subtitle")}
          </span>
        </div>
        <div className="col myColorSimplePara">
          {/* <p className="myColorSimple animate__zoomIn "> */}
          <p
            className="myColorSimple animate__zoomIn "
            data-aos="zoom-in"
            data-aos-duration="4000"
          >
            {t("landing.para")}
          </p>
          <p
            className="myColorSimpleBlue pb-5 "
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            {t("landing.footerTitle")}
          </p>
        </div>
      </div>
    </div>
  );
}
