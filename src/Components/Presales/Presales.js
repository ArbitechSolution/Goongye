import React, { useState } from "react";
import mint from "../../Assets/images/mint.png";
import klytn from "../../Assets/images/klaytn-klay-logo 1.png";
import containerImage from "../../Assets/images/Group 48.png";
import "./Presales.css";
import "../Mint/Mint.css";
import { useTranslation } from "react-i18next";

export default function Presales() {
  const { t, i18n } = useTranslation();
  const [count, setCount] = useState(0);
  const handlePlus = () => {
    setCount(count + 1);
  };
  const handleMinus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div className="presales d-flex justify-content-center" id="Presale">
      <div className="imgArea mt-lg-0 mt-md-0 mt-sm-2">
        <img className="presalesTop-image" src={containerImage}></img>
        <span className="imgArea-text">{t("Presales.1")}</span>
      </div>
      <div className="container container-presales-outside m-5 m-md-3 m-sm-2 ps-0 m-md-1 m-sm-1">
        <div className="container-fluid container-presales m-1 p-lg-5 p-md-3">
          <div className="row mt-5">
            <div className="connectBtnInPresale">
              <button className="btnConnectInPresale  mt-2">{t("presale.connect")}</button>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center pt-3">
              <div class="mintCard">
                <img src={mint} class=" mintImage" alt="..." />
                <div class=" mintCardBody pb-1">
                  <ul>
                    <li> {t("presale.li1")}</li>
                    <li>{t("presale.li2")}</li>
                    <li>
                    {t("presale.li3")}
                    </li>
                    <li>
                    {t("presale.li4")}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12  d-flex justify-content-center align-items-center pt-3">
              <div class="mintCard mintCard2 presaleCard">
                <nav>
                  <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                      class="nav-link navTabs active tab1"
                      id="nav-home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-home"
                      type="button"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                    >
                      <span className="tabText">{t("presale.2")}</span>
                    </button>
                    <button
                      class="nav-link navTabs"
                      id="nav-profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-profile"
                      type="button"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                    >
                      <span className="tabText">{t("presale.3")}</span>
                    </button>
                    <button
                      class="nav-link navTabs tab3"
                      id="nav-contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-contact"
                      type="button"
                      role="tab"
                      aria-controls="nav-contact"
                      aria-selected="false"
                    >
                      <span className="tabText">{t("presale.4")}</span>
                    </button>
                  </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                  <div
                    class="tab-pane fade show active"
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                  >
                    <div class="mintCardBody preSaleCardBody m-3">
                      <div class="progress mt-5">
                        <div
                          class="progress-bar progress-bar-success progress-bar-striped"
                          role="progressbar"
                          aria-valuenow="0"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "0%" }}
                        >
                          0%
                        </div>
                      </div>
                      <div className="progressValue">
                        <span>0</span>
                        <span>1000</span>
                      </div>
                      <div className="mt-4">
                        <hr className="solid hori"></hr>
                      </div>
                      <div className="mintTotal">
                        <div>
                          <span className="totalSpan ps-2">{t("presale.price")}</span>
                        </div>
                        <div>
                          <span className="KLAYspan pe-2">
                            <img src={klytn} className="me-2" />
                            <span className="textColor me-1">100</span>{t("mint.KLAY")}
                          </span>
                        </div>
                      </div>
                      <div className="mt-4">
                        <hr className="solid hori"></hr>
                      </div>
                      <div className=" mt-4 row">
                        <span className="KLAYspan pe-2">{t("presale.Amount")}</span>
                      </div>
                      <div className="preslaesAdditionSection mt-4 row">
                        <button
                          className="btnMinus btnMinusPresale"
                          onClick={handleMinus}
                        >
                          -
                        </button>
                        <span className="spanCount ">{count}</span>
                        <button
                          className="btnPlus btnPlusPresale"
                          onClick={handlePlus}
                        >
                          +
                        </button>
                      </div>

                      <div className="btnWalletStakeArea">
                        <div>
                          <button className="btnMintPresale mt-3 mb-3 ">
                          {t("navbar.mint")}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="nav-profile"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab"
                  >
                    <div class="mintCardBody preSaleCardBody m-3">
                      <div class="progress mt-5">
                        <div
                          class="progress-bar progress-bar-success progress-bar-striped"
                          role="progressbar"
                          aria-valuenow="40"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "40%" }}
                        >
                          40%
                        </div>
                      </div>
                      <div className="progressValue">
                        <span>0</span>
                        <span>1000</span>
                      </div>
                      <div className="mt-4">
                        <hr className="solid hori"></hr>
                      </div>
                      <div className="mintTotal">
                        <div>
                          <span className="totalSpan ps-2">{t("presale.price")}</span>
                        </div>
                        <div>
                          <span className="KLAYspan pe-2">
                            <img src={klytn} className="me-2" />
                            <span className="textColor me-1">125</span>{t("mint.KLAY")}
                          </span>
                        </div>
                      </div>
                      <div className="mt-4">
                        <hr className="solid hori"></hr>
                      </div>
                      <div className=" mt-4 row">
                        <span className="KLAYspan pe-2">{t("presale.Amount")}</span>
                      </div>
                      <div className="preslaesAdditionSection mt-4 row">
                        <button className="btnMinus btnMinusPresale ">-</button>
                        <span className="spanCount ">1</span>
                        <button className="btnPlus btnPlusPresale">+</button>
                      </div>

                      <div className="btnWalletStakeArea">
                        <div>
                          <button className="btnMintPresale mt-3 mb-3 ">
                          {t("navbar.mint")}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="nav-contact"
                    role="tabpanel"
                    aria-labelledby="nav-contact-tab"
                  >
                    <div class="mintCardBody preSaleCardBody m-3">
                      <div class="progress mt-5">
                        <div
                          class="progress-bar progress-bar-success progress-bar-striped"
                          role="progressbar"
                          aria-valuenow="100"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "100%" }}
                        >
                          100%
                        </div>
                      </div>
                      <div className="progressValue">
                        <span>500</span>
                        <span>1000</span>
                      </div>
                      <div className="mt-4">
                        <hr className="solid hori"></hr>
                      </div>
                      <div className="mintTotal">
                        <div>
                          <span className="totalSpan ps-2">{t("presale.price")}</span>
                        </div>
                        <div>
                          <span className="KLAYspan pe-2">
                            <img src={klytn} className="me-2" />
                            <span className="textColor me-1">150</span>{t("mint.KLAY")}
                          </span>
                        </div>
                      </div>
                      <div className="mt-4">
                        <hr className="solid hori"></hr>
                      </div>
                      <div className=" mt-4 row">
                        <span className="KLAYspan pe-2">{t("presale.Amount")}</span>
                      </div>
                      <div className="preslaesAdditionSection mt-4 row">
                        <button className="btnMinus btnMinusPresale ">-</button>
                        <span className="spanCount ">1</span>
                        <button className="btnPlus btnPlusPresale">+</button>
                      </div>

                      <div className="btnWalletStakeArea">
                        <div>
                          <button className="btnMintPresale mt-3 mb-3">
                            {t("presale.Sold")}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*
                <div className="presaleCard2SubHeader pt-2 pb-2">
                  <h6 className="ps-3 ">Price Per Card</h6>
                  <span className="ps-3">
                    <span className="spanBalance">0.00</span> Klay Each
                  </span>
                </div>
                <div class="mintCardBody m-3">
                  <div>
                    <div className="preslaesAdditionSection mt-4 row">
                      <div>
                        <button className="btnMinus ">-</button>
                        <span className="spanCount ">1</span>
                        <button className="btnPlus ">+</button>
                      </div>
                    </div>
                    <div className="mt-2">
                      <hr className="solid hori"></hr>
                    </div>
                    <div className="mintTotal">
                      <div>
                        <span className="totalSpan ps-2">Total</span>
                      </div>
                      <div>
                        <span className="KLAYspan pe-2">--- KLAY</span>
                      </div>
                    </div>
                    <div className="mt-2">
                      <hr className="solid hori"></hr>
                    </div>
                    <div className="btnWalletStakeArea">
                      <div>
                        <button className="btnConnectWallet mt-3 ">
                          Connect Wallet
                        </button>
                      </div>
                      <div>
                        <button className="btnMintPresale mt-3 mb-3">
                          Mint & Stake Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
