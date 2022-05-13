import React from "react";
import image1 from "../../Assets/images/APE2 1.png";
import image2 from "../../Assets/images/APE 4.png";
import { useTranslation } from "react-i18next";

import "./Story.css";
import { t } from "i18next";
export default function Story() {
  const { t, i18n } = useTranslation();

  return (
    <div className="container-fluid storyContainer  pt-2 pb-3 p-1" id="story">
      <div className="row">
        <h1
          className="storyText "
          data-aos="fade-up"
          data-aos-duration="4000"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          {t("story.title")}
        </h1>
      </div>
      <div className="row pt-3">
        <div className="col-lg-6 col-md-12 col-sm-12 mt-4">
          <div className="row">
            <div className="col-12 ">
              <div className="col-12 d-flex justify-content-center align-items-center">
                <img
                  className="card-img-top storyImages "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="false"
                  src={image1}
                />
              </div>
            </div>
            <div className="col-12 ">
              <div className=" d-flex justify-content-center align-items-center">
                <img
                  className="card-img-top storyImages storyImage2 "
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="false"
                  src={image2}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 mt-4">
          <div className="container">
            <h3
              className="background "
              data-aos="fade-up"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              {t("stroy.background")}
            </h3>
            <p
              className="backgroundPara "
              data-aos="fade-up"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              {t("stroy.paraback1")}
            </p>
            <p
              className="backgroundPara "
              data-aos="fade-up"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              {t("stroy.paraback2")}
            </p>
          </div>
          <div className="container">
            <h3
              className="background "
              data-aos="fade-up"
              data-aos-duration="4000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              {t("story.story")}
            </h3>
            <p
              className="backgroundPara "
              data-aos="fade-up"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              {t("story.parastory1")}
            </p>
            <p
              className="backgroundPara "
              data-aos="fade-up"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              {t("story.parastory2")}
            </p>
            <p
              className="backgroundPara "
              data-aos="fade-up"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              {t("story.parastory3")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
