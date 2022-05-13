import React from "react";
import Carousel from "react-bootstrap/Carousel";
import scene1 from "../../Assets/images/Scene-1.png";
import scene2 from "../../Assets/images/Scene-2.png";
import scene3 from "../../Assets/images/Scene-3.png";
import scene4 from "../../Assets/images/Scene-4.png";
import "./Carousel.css";
import { useTranslation } from "react-i18next";

export default function StoryCarousel() {
  const { t, i18n } = useTranslation();

  return (
    <div className="container-fluid carouselContainer  pt-5 pb-5 ">
      <Carousel
        data-aos="fade-up"
        data-aos-duration="3000"
        data-aos-offset="200"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <Carousel.Item>
          <div className="container-staking-outside">
            <div className="container-staking">
              <img className="d-block w-100 " src={scene1} alt="First slide" />
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center p-2">
            <div className="carouselDescripton">
              <h3 className="carouselHeading pe-2">
                {t("storyCarousel.scene1")}
              </h3>
              <p className="carouselPara">{t("storyCarousel.para1")}</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="container-staking-outside">
            <div className="container-staking">
              <img className="d-block w-100" src={scene1} alt="Second slide" />
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center p-2">
            <div className="carouselDescripton">
              <h3 className="carouselHeading pe-2">
                {t("storyCarousel.scene2")}
              </h3>
              <p className="carouselPara">{t("storyCarousel.para2")}</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="container-staking-outside">
            <div className="container-staking">
              <img className="d-block w-100" src={scene1} alt="Third slide" />
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center p-2">
            <div className="carouselDescripton">
              <h3 className="carouselHeading pe-2">
                {t("storyCarousel.scene3")}
              </h3>
              <p className="carouselPara">{t("storyCarousel.para3")}</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="container-staking-outside">
            <div className="container-staking">
              <img className="d-block w-100" src={scene4} alt="Fourth slide" />
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center p-2">
            <div className="carouselDescripton">
              <h3 className="carouselHeading pe-2">
                {t("storyCarousel.scene4")}
              </h3>
              <p className="carouselPara">{t("storyCarousel.para4")}</p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
