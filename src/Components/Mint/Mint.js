import React, { useState } from "react";
import mint from "../../Assets/images/mint.png";
import image2 from "../../Assets/images/APE 4.png";
import image3 from "../../Assets/images/111.png";
import on from "../../Assets/images/On.png";
import off from "../../Assets/images/Line31.png";
import "./Mint.css";
export default function Mint() {
  const [sound, setSound] = useState(true);
  return (
    <div className="container-fluid mintContainer  pt-5 pb-5" id="mint">
      <div className="row">
        <h1 className="mintText">Mint</h1>
      </div>
      <div className="row mt-5">
        <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center pt-3">
          <div class="mintCard">
            <img src={mint} class=" mintImage" alt="..." />
            <div class=" mintCardBody pb-1">
              <ul>
                <li> You MUST connect a Wallet to mint NFTs.</li>
                <li>Transactions will be done via the connected wallet.</li>
                <li>
                  You MUST have KLAYTN to pay gas fee when it comes to make
                  transactions.
                </li>
                <li>
                  The number of mints per transaction is set according to each
                  sales round.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12  d-flex justify-content-center align-items-center pt-3">
          <div class="mintCard mintCard2">
            <div className="mintCard2Header pt-2 pb-2">
              <h3 className="ps-3 mintHeaderh3">Mint your Ape Goongyes</h3>
              <span className="ps-3 mintHeaderSpan">
                Enter how many card you'd like to mint here.
              </span>
              <div className="imageRightSidediv">
                <img className="imageRightSide" src={image3} />
                <span className="balanceRemaining">
                  {(10000).toLocaleString()} &nbsp;Remaining
                </span>
              </div>
            </div>
            <div className="mintCard2SubHeader pt-2 pb-2">
              <h6 className="ps-3 ">Price Per Card</h6>
              <span className="ps-3">
                <span className="spanBalance">0.00</span> Klay Each
              </span>
              <img
                className="onIcon"
                src={on}
                onClick={() => {
                  setSound(true);
                }}
              />
              {sound && (
                <img
                  className="offIcon"
                  src={off}
                  onClick={() => {
                    setSound(false);
                  }}
                />
              )}
            </div>
            <div class="mintCardBody m-3">
              <div>
                <div className="mintAdditionSection mt-4">
                  <div>
                    <button className="btnMinus ">-</button>
                    <span className="spanCount ">1</span>
                    <button className="btnPlus ">+</button>
                  </div>
                  <div>
                    <button className="btnMax ">3 max</button>
                  </div>
                </div>
                {/* <div className="divider"></div> */}
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
                <div className="mt-1">
                  <hr className="solid hori"></hr>
                </div>
                <div className="btnWalletStakeArea">
                  <div>
                    <button className="btnConnectWallet mt-2 ">
                      Connect Wallet
                    </button>
                  </div>
                  <div>
                    <button className="btnMint mt-2 mb-2">
                      Mint & Stake Now
                    </button>
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
