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
          Staking
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
          After announcing that you can stake your Crazy Ape Goongye we received
          a lot of positive feedback showing that people are very interested in
          this feature. So, how do you stake your Crazy Ape Goongye and what
          benefits does it bring?
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
          The Staking feature will be available immediately upon mint of your
          Crazy Ape Goongye NFT. Owners can stake their Crazy Ape Goongye for
          any period of time depending on their decision and will receive a
          reward of
          <span className="spanColor1 ps-1">96</span>
          <span className="spanColor2"> $MAGUNI</span>
          <span className="spanColor1"> tokens </span>
          per day.
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
          The more Crazy Ape Goongye you use to stake the more
          <span className="spanColor2 ps-1"> $MAGUNI</span>
          <span className="spanColor1"> tokens </span>
          you will receive. You can also evolve to level up and mint an King Ape
          Goongye. King Ape Goongye FTs will also be available to stake and
          owners will receive 2.5 times more rewards, at the rate of
          <span className="spanColor1 ps-1">240</span>
          <span className="spanColor2"> $MAGUNI</span>
          <span className="spanColor1"> tokens </span>
          per day.
        </p>
      </div>
      <div>
        <img src={bottomImage}></img>
      </div>
    </div>
  );
}
