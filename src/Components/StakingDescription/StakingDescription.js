import React from "react";
import "./StakingDescription.css";
import bottomImage from "../../Assets/images/Rectangle-7.png";
import { useTranslation } from "react-i18next";

export default function StakingDescription() {
  const { t, i18n } = useTranslation();

  return (
    <div className="stakingDecription d-flex justify-content-center align-items-center pt-5">
      <div className="pt-5 pb-5">
        <h1
          className="stakingText "
          data-aos="fade-up"
          data-aos-duration="3000"
          data-aos-offset="200"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          {t("Staking.1")}
        </h1>
      </div>
      <div className="ps-5 pe-5">
        <p
          className="stakingPara1 "
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-offset="200"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          {t("staking.parah1")}
        </p>
      </div>
      <div className="mt-2 ps-5 pe-5">
        <p
          className="stakingPara2 "
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-offset="200"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
         {t("staking.parah2")}
          <span className="spanColor1 ps-1">96</span>
          <span className="spanColor2"> ${t("staking.MAGUNI")}</span>
          <span className="spanColor1"> {t("staking.tokens")} </span>
          {t("staking.day")}
        </p>
      </div>
      <div className="mt-2 ps-5 pe-5">
        <p
          className="stakingPara2 "
          data-aos="fade-up"
          data-aos-duration="3000"
          data-aos-offset="200"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          {t("staking.parah3")}
          <span className="spanColor2 ps-1"> ${t("staking.MAGUNI")}</span>
          <span className="spanColor1"> {t("staking.tokens")} </span>
          {t("staking.parah4")}
          <span className="spanColor1 ps-1">240</span>
          <span className="spanColor2"> ${t("staking.MAGUNI")}</span>
          <span className="spanColor1"> {t("staking.tokens")} </span>
          {t("staking.day")}
        </p>
      </div>
      <div>
        <img src={bottomImage}></img>
      </div>
    </div>
  );
}
