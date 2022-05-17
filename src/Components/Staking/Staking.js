import React from "react";
import image1 from "../../Assets/images/APE 3.png";
import image2 from "../../Assets/images/APE2 1.png";
import image3 from "../../Assets/images/24 2.png";
import image4 from "../../Assets/images/25 1.png";
import image5 from "../../Assets/images/2 7233.png";
import image6 from "../../Assets/images/3 618266.png";
import containerImage from "../../Assets/images/Group 48.png";
import { useTranslation } from "react-i18next";

import "./Staking.css";
export default function Staking() {
  const { t, i18n } = useTranslation();

  return (
    <div className="staking d-flex justify-content-center ">
      <div className="imgArea mt-lg-0 mt-md-0 mt-sm-2">
        <img className="stakingTop-image" src={containerImage}></img>
        <span className="imgArea-text">{t("staking.para1")}</span>
      </div>
      <div className="container container-staking-outside m-5 m-md-3 m-sm-2 ps-0 m-md-1 m-sm-1">
        <div className="container-fluid container-staking m-1 p-lg-5 p-md-3">
          <div className="row btn-group mt-2">
            <div className="col-lg-6 col-md-12">
              <button className="btnStake  mt-2">{t("staking.para2")}</button>
            </div>
            <div className="col-lg-6 col-md-12 mt-2">
              <button className="btnAllReward">{t("staking.para3")}</button>
            </div>
          </div>
          <div className="mt-2">
            <span className="balanceMag">{t("staking.para4")} : 0.00</span>
          </div>
          <div className="mt-2">
            <span className="textMyCrazy">{t("staking.para5")}</span>
          </div>
          <div class="row ">
            <div class="col col-lg-3  col-md-6 col-sm-12 pt-3">
              <div class="card">
                <img class="card-img-top" src={image1} alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">{t("staking.para6")}</h5>
                  <h6 className="card-sub-title">{t("staking.para7")}:</h6>
                  <p class="card-text">
                  {t("staking.para8")}
                  </p>
                  <a href="#" class="card-Link">
                    https://crazyapegoongyeclub.com/
                  </a>
                  <div className="card-buttons mt-2">
                    <button className="btn-stake">{t("staking.para9")}</button>
                    <button className="btn-changeName">{t("staking.para10")}</button>
                    <button className="btn-changeBio">{t("staking.para11")}</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col col-lg-3  col-md-6 col-sm-12 pt-3">
              <div class="card">
                <img class="card-img-top" src={image2} alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">{t("staking.para12")}</h5>
                  <h6 className="card-sub-title">{t("staking.para13")}:</h6>
                  <p class="card-text">
                  {t("staking.para14")}
                  </p>
                  <a href="#" class="card-Link">
                    https://crazyapegoongyeclub.com/
                  </a>
                  <div className="card-buttons mt-2">
                    <button className="btn-stake">{t("staking.para15")}</button>
                    <button className="btn-changeName">{t("staking.para16")}</button>
                    <button className="btn-changeBio">{t("staking.para17")}</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <span className="textMyCrazy">{t("staking.para18")}</span>
          </div>
          <div class="row">
            <div class="col col-lg-3  col-md-6 col-sm-12 pt-3">
              <div class="card">
                <img class="card-img-top" src={image3} alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">{t("staking.para19")}</h5>
                  <h6 className="card-sub-title">{t("staking.para20")}</h6>
                  <p class="card-text">
                  {t("staking.para21")}
                  </p>
                  <a href="#" class="card-Link">
                    https://crazyapegoongyeclub.com/
                  </a>
                  <div className="card-buttons mt-2">
                    <button className="btn-stake">{t("staking.para22")}</button>
                    <button className="btn-changeName">{t("staking.para23")}</button>
                    <button className="btn-changeBio">{t("staking.para24")}</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col col-lg-3  col-md-6 col-sm-12 pt-3">
              <div class="card">
                <img class="card-img-top" src={image4} alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">{t("staking.para25")}</h5>
                  <h6 className="card-sub-title">{t("staking.para26")}:</h6>
                  <p class="card-text">
                  {t("staking.para27")}
                  </p>
                  <a href="#" class="card-Link">
                    https://crazyapegoongyeclub.com/
                  </a>
                  <div className="card-buttons mt-2">
                    <button className="btn-stake">{t("staking.para28")}</button>
                    <button className="btn-changeName">{t("staking.para29")}</button>
                    <button className="btn-changeBio">{t("staking.para30")}</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <span className="textMyCrazy">{t("staking.para31")}</span>
          </div>
          <div class="row mb-3">
            <div class="col col-lg-3  col-md-6 col-sm-12 mb-5 pt-3">
              <div class="card">
                <img class="card-img-top" src={image5} alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">{t("staking.para32")}</h5>
                  <h6 className="card-sub-title">{t("staking.para33")}:</h6>
                  <p class="card-text">
                  {t("staking.para34")}
                  </p>
                  <a href="#" class="card-Link">
                    https://crazyapegoongyeclub.com/
                  </a>
                  <div className="card-buttons mt-2">
                    <button className="btn-stake">{t("staking.para35")}</button>
                    <button className="btn-changeName">{t("staking.para36")}</button>
                    <button className="btn-changeBio">{t("staking.para37")}</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col col-lg-3  col-md-6 col-sm-12 mb-5 pt-3">
              <div class="card">
                <img class="card-img-top" src={image6} alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">{t("staking.para38")}</h5>
                  <h6 className="card-sub-title">{t("staking.para39")}:</h6>
                  <p class="card-text">
                  {t("staking.para41")}
                  </p>
                  <a href="#" class="card-Link">
                    https://crazyapegoongyeclub.com/
                  </a>
                  <div className="card-buttons mt-2">
                    <button className="btn-stake">{t("staking.para42")}</button>
                    <button className="btn-changeName">{t("staking.para43")}</button>
                    <button className="btn-changeBio">{t("staking.para44")}</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
