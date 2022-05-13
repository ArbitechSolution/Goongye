import React from "react";
import "./Tokenomics.css";
import image1 from "../../Assets/images/18 1.png";
import image2 from "../../Assets/images/2 7233.png";
import arrow from "../../Assets/images/OBJECTS.png";
import { useTranslation } from "react-i18next";

export default function Tokenomics() {
  const { t, i18n } = useTranslation();

  return (
    <div
      className="tokennomicDecription d-flex justify-content-center align-items-center pt-5 pb-5"
      id="tokenomics"
    >
      <h1
        className="tokenNomicsTitle "
        data-aos="fade-up"
        data-aos-duration="3000"
        data-aos-offset="200"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        {t("tokenomics.title")}
      </h1>
      <div className="row">
        <div className="col-lg-4 col-md-12 col-sm-12 d-flex justify-content-center align-items-center">
          <div class="card">
            <div
              className=""
              data-aos="fade-up"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <span class="badge badge-light tokenBadge ">
                {t("tokenomics.number1")}
              </span>

              <img
                class="rounded-circle tokenNomicsImage "
                data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-offset="200"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                alt="100x100"
                src={image1}
                data-holder-rendered="true"
              />
            </div>
            <div
              class="card-body bodyTokennomicsCard "
              data-aos="fade-up"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <h5 class="card-title tokenCardTitle">
                {t("tokenomics.card1Title")}
              </h5>
              <h6 className="tokenCardSubTitle pt-3">
                {t("tokenomics.card1subTitle")}
              </h6>
              <p className="tokenCardPara">
                <span className="spanColor1 ps-1">
                  {t("tokenomics.card1balance")}
                </span>
                <span className="spanColor2 pe-1">
                  {t("tokenomics.card1Duration")}
                </span>
                {t("tokenomics.perday")}
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 d-flex justify-content-center align-items-center">
          <div
            className=" "
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <span className="evolve">{t("tokenomics.breed")}</span>
            <img className="arrow" src={arrow}></img>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 d-flex justify-content-center align-items-center">
          <div class="card">
            <div
              className=""
              data-aos="fade-up"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <span class="badge badge-light tokenBadge  ">
                {t("tokenomics.number2")}
              </span>

              <img
                class="rounded-circle tokenNomicsImage "
                data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-offset="200"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                alt="100x100"
                src={image2}
                data-holder-rendered="true"
              />
            </div>
            <div
              class="card-body bodyTokennomicsCard "
              data-aos="fade-up"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <h5 class="card-title tokenCardTitle">
                {t("tokenomics.card2Title")}
              </h5>
              <h6 className="tokenCardSubTitle pt-3">
                {t("tokenomics.card2subTitle")}
              </h6>
              <p className="tokenCardPara">
                <span className="spanColor1 ps-1">
                  {t("tokenomics.card2balance")}
                </span>
                <span className="spanColor2 pe-1">
                  {t("tokenomics.card2Duration")}
                </span>
                {t("tokenomics.perday")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row pt-3">
        <div className="tokenDecription">
          <div className="ps-5 pe-5">
            <p
              className="tokenNomicsPara "
              data-aos="fade-up"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <span className="spanColor2 pe-1">{t("tokenomics.manguni")}</span>
              {t("tokenomics.para1")}

              <span className="spanColor1 ps-1">96</span>
              <span className="spanColor2">{t("tokenomics.manguni")}</span>
              <span className="spanColor1">{t("tokenomics.tokens")}</span>
              {t("tokenomics.perday")}
            </p>
          </div>
          <div className="mt-2 ps-5 pe-5">
            <p
              className="tokenNomicsPara "
              data-aos="fade-up"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              {t("tokenomics.cost")}
              <span className="spanColor1 ps-1">{t("tokenomics.966")}</span>
              <span className="spanColor2">{t("tokenomics.manguni")}</span>
              {t("tokenomics.para2")}
              <span className="spanColor1 ps-1">{t("tokenomics.24")}</span>
              <span className="spanColor2">{t("tokenomics.manguni")}</span>
              <span className="spanColor1"> {t("tokenomics.tokens")} </span>
              {t("tokenomics.para2h2")}
            </p>
          </div>
          <div className="mt-2 ps-5 pe-5 ">
            <p
              className="tokenNomicsPara "
              data-aos="fade-up"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              {t("tokenomics.para3")}
            </p>
          </div>
          <div className="mt-2 ps-5 pe-5">
            <p
              className="tokenNomicsPara "
              data-aos="fade-up"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <span className="spanColor2">{t("tokenomics.manguni")}</span>
              <span className="spanColor1"> {t("tokenomics.tokens")} </span>
              {t("tokenomics.para4")}
            </p>
          </div>
          <div className="mt-2 ps-5 pe-5">
            <p
              className="tokenNomicsPara "
              data-aos="fade-up"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <span className="spanColor2 pe-1">
                {t("tokenomics.manguni2")}
              </span>
              {t("tokenomics.para5")}
              <span className="spanColor2">{t("tokenomics.manguni")}</span>
              <span className="spanColor1"> {t("tokenomics.tokens")} </span>
              {t("tokenomics.para5h2")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
