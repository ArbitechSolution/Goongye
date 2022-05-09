import React from "react";
import image1 from "../../Assets/images/Vector3.png";
import mintwin from "../../Assets/images/mintWin.png";
import containerImage from "../../Assets/images/Group 48.png";
import light from "../../Assets/images/light-from-top-background.png";
import tick from "../../Assets/images/tick.png";
import "./NFTTransferModal.css";
import NFTTransferSuccess from "../NFTTransferSuccess/NFTTransferSuccess";
export default function NFTTransferModal() {
  return (
    <div className="NFTTransfer d-flex justify-content-center">
      <div className="imgArea mt-lg-0 mt-md-0 mt-sm-2">
        <img className="nftTop-image" src={containerImage}></img>
        <span className="NFTimgArea-text">NFT Card Transfer</span>
      </div>
      <div className="container container-presales-outside m-5 m-md-3 m-sm-2 ps-0 m-md-1 m-sm-1">
        <div className="container-fluid container-presales m-1 p-lg-5 p-md-3">
          <div className="row ">
            <div className="connectBtnInPresale">
              <button className="btnConnectInPresale  mt-5">Connect</button>
            </div>
          </div>
          <div className="row  mintRow">
            <div className="col-12 mintCol mt-4">
              <img className="NFTimg" src={mintwin} />
            </div>
            <div className="col-12 mintCol">
              <span className="NFTheading"># 10000 Crazy Goongye</span>
            </div>
            <div className="col-sm-12 col-md-4  mt-5 mb-1 ms-">
              <span className="inputLabel">To</span>
            </div>
            <div className="col-12 mintCol">
              <input type="text" class="inputBox" />
            </div>
            <div className="col-12 mintCol mt-2 mb-5">
              <button
                className="btnConfirm  mt-2"
                onClick={<NFTTransferSuccess />}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
