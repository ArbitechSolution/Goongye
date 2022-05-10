import React from "react";
import "./Tokenomics.css";
import image1 from "../../Assets/images/18 1.png";
import image2 from "../../Assets/images/2 7233.png";
import arrow from "../../Assets/images/OBJECTS.png";
export default function Tokenomics() {
  return (
    <div
      className="tokennomicDecription d-flex justify-content-center align-items-center pt-5 pb-5"
      id="tokenomics"
    >
      <h1 className="tokenNomicsTitle">Tokenomics</h1>
      <div className="row">
        <div className="col-lg-4 col-md-12 col-sm-12 d-flex justify-content-center align-items-center">
          <div class="card">
            <div className="">
              <span class="badge badge-light tokenBadge ">4</span>

              <img
                class="rounded-circle tokenNomicsImage"
                alt="100x100"
                src={image1}
                data-holder-rendered="true"
              />
            </div>
            <div class="card-body bodyTokennomicsCard">
              <h5 class="card-title tokenCardTitle">CRAZY GOONGYE</h5>
              <h6 className="tokenCardSubTitle pt-3">Stake & Receive</h6>
              <p className="tokenCardPara">
                <span className="spanColor1 ps-1">96</span>
                <span className="spanColor2 pe-1"> $MAGUNI</span>
                per day
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 d-flex justify-content-center align-items-center">
          <div className="">
            <span className="evolve">Breed</span>
            <img className="arrow" src={arrow}></img>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 d-flex justify-content-center align-items-center">
          <div class="card">
            <div className="">
              <span class="badge badge-light tokenBadge  ">4</span>

              <img
                class="rounded-circle tokenNomicsImage "
                alt="100x100"
                src={image2}
                data-holder-rendered="true"
              />
            </div>
            <div class="card-body bodyTokennomicsCard">
              <h5 class="card-title tokenCardTitle">KING GOONGYE</h5>
              <h6 className="tokenCardSubTitle pt-3">Stake & Receive</h6>
              <p className="tokenCardPara">
                <span className="spanColor1 ps-1">240</span>
                <span className="spanColor2 pe-1"> $MAGUNI</span>
                per day
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row pt-3">
        <div className="tokenDecription">
          <div className="ps-5 pe-5">
            <p className="tokenNomicsPara">
              <span className="spanColor2 pe-1"> $MAGUNI</span>
              is the insane token that powers the Crazy Ape Goongye ecosystem.
              All holders of a Ape Goongye can stake and receive
              <span className="spanColor1 ps-1">96</span>
              <span className="spanColor2"> $MAGUNI</span>
              <span className="spanColor1"> tokens </span>
              per day.
            </p>
          </div>
          <div className="mt-2 ps-5 pe-5">
            <p className="tokenNomicsPara">
              It costs <span className="spanColor1 ps-1">966</span>
              <span className="spanColor2"> $MAGUNI</span>
              tokens to evolve your Crazy Goongye to King Goongye. Once you're a
              holder of a King Goongye you can stake them and will receive
              <span className="spanColor1 ps-1">24</span>
              <span className="spanColor2"> $MAGUNI</span>
              <span className="spanColor1"> tokens </span>
              per day. Here will only be a maximum supply of 2,000 King Goongye
              ever minted.
            </p>
          </div>
          <div className="mt-2 ps-5 pe-5">
            <p className="tokenNomicsPara">
              Your original Crazy Goongye gets burned when you mint an King
              Goongye which will lessen the supply of Crazy Ape Goongye in the
              ecosystem.
            </p>
          </div>
          <div className="mt-2 ps-5 pe-5">
            <p className="tokenNomicsPara">
              <span className="spanColor2"> $MAGUNI</span>
              <span className="spanColor1"> tokens </span>
              can also be used to change the name and bio of your Crazy Goongye
              or King Goongye. There are future utilities coming to the Rec Room
              such as mini games like "Maguni" . By participating in these games
              you will be able to receive rewards.
            </p>
          </div>
          <div className="mt-2 ps-5 pe-5">
            <p className="tokenNomicsPara">
              <span className="spanColor2 pe-1"> **$MAGUNI</span>
              is the utility token designed and intended solely as a method to
              obtain goods or services available at the Crazy Ape Goongye.
              <span className="spanColor2"> $MAGUNI</span>
              <span className="spanColor1"> tokens </span>
              are not intended to generate profit, speculative or otherwise, and
              is NOT an investment and has NO economic value.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
