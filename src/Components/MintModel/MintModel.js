import React from "react";
import image1 from "../../Assets/images/Vector3.png";
import mintwin from "../../Assets/images/mintWin.png";
import containerImage from "../../Assets/images/Group 48.png";
import light from "../../Assets/images/light-from-top-background.png";
import "./MintModal.css";
import { useTranslation } from "react-i18next";

export default function MintModal() {
  const { t, i18n } = useTranslation();
  return (
    <div className="minting d-flex justify-content-center">
      <img className="lightImg" src={light} alt="" />
      <div className="imgArea mt-lg-0 mt-md-0 mt-sm-2">
        <img className="presalesTop-image" src={containerImage}></img>
        <span className="imgArea-text">Mint</span>
      </div>
      <div className="container container-presales-outside m-5 m-md-3 m-sm-2 ps-0 m-md-1 m-sm-1">
        <div className="container-fluid container-presales m-1 p-lg-5 p-md-3">
          <div className="row ">
            <div className="connectBtnInPresale">
              <button className="btnConnectInPresale  mt-5 mb-1">
                Connect
              </button>
            </div>
          </div>
          <div className="row  mintRow">
            <div className="col-12 mintCol">
              <img className="congrtsBar" src={image1} />
              <span className="textCongrts">Congratulations</span>
            </div>
            <div className="col-12 mintCol mt-4">
              <span className="heading">
                You got a Crazy Goongye card now !
              </span>
            </div>
            <div className="col-12 mintCol mt-4">
              <img className="imgCongrts" src={mintwin} />
            </div>
            <div className="col-12 mintCol mt-5 mb-5">
              <button className="btnStaking mt-2 me-2">Staking</button>
              <button className="btnLater mt-2">Do it Later</button>
            </div>
            {/* <div className="col-12 mintCol mt-2">
              <button className="btnStake  mt-2">Stake All</button>
              <button className="btnAllReward">Claim All Reward</button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
