import React from "react";
import mint from "../../Assets/images/mint.png";

import containerImage from "../../Assets/images/Group 48.png";
import "./Presales.css";
import "../Mint/Mint.css";

export default function Presales() {
  return (
    <div className="presales d-flex justify-content-center">
      <div className="imgArea mt-lg-0 mt-md-0 mt-sm-2">
        <img className="presalesTop-image" src={containerImage}></img>
        <span className="imgArea-text">Presales</span>
      </div>
      <div className="container container-presales-outside m-5 m-md-3 m-sm-2 ps-0 m-md-1 m-sm-1">
        <div className="container-fluid container-presales m-1 p-lg-5 p-md-3">
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
                      The number of mints per transaction is set according to
                      each sales round.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12  d-flex justify-content-center align-items-center pt-3">
              <div class="mintCard mintCard2 presaleCard">
                <ul class="nav nav-tabs  row g-0">
                  <li class="active col-4 navItems">
                    <a data-toggle="tab" href="#home">
                      Home
                    </a>
                  </li>
                  <li className="col-4 navItems">
                    <a data-toggle="tab" href="#menu1">
                      Menu 1
                    </a>
                  </li>
                  <li className="col-4 navItems">
                    <a data-toggle="tab" href="#menu2">
                      Menu 2
                    </a>
                  </li>
                </ul>

                <div class="tab-content">
                  <div id="home" class="tab-pane fade in active">
                    <h3>HOME</h3>
                    <p>Some content.</p>
                  </div>
                  <div id="menu1" class="tab-pane fade">
                    <h3>Menu 1</h3>
                    <p>Some content in menu 1.</p>
                  </div>
                  <div id="menu2" class="tab-pane fade">
                    <h3>Menu 2</h3>
                    <p>Some content in menu 2.</p>
                  </div>
                </div>

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
                        <button className="btnMint mt-3 mb-3">
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
      </div>
    </div>
  );
}
