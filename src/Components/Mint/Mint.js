import React, { useEffect, useState } from "react";
import mint from "../../Assets/images/mint.png";
import image2 from "../../Assets/images/APE 4.png";
import image3 from "../../Assets/images/111.png";
import on from "../../Assets/images/On.png";
import off from "../../Assets/images/Line31.png";
import Caver from "caver-js";
import "./Mint.css";
import { googyeContractAddress, goongyeContractAbi } from "../Utils/Goongye.js";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { loadWeb3 } from "../../api";
import { connectionAction } from "../../Redux/connection/actions";
import { toast } from "react-toastify";
const caver = new Caver(window.klaytn);

export default function Mint() {
  const { t, i18n } = useTranslation();
  let [noMints, setNomints] = useState(1);
  let [ttlKlay, setTtlKlay] = useState(0);
  const dispatch = useDispatch();
  let acc = useSelector((state) => state.connect?.connection);

  console.log("acc", acc);
  const onConnectAcc = () => {
    dispatch(connectionAction());
  };

  const getInitialMintPrice = async () => {
    try {
      let contractOf = new caver.klay.Contract(
        goongyeContractAbi,
        googyeContractAddress
      );
      let totalPrice = await contractOf.methods.gPRice(1).call();
      totalPrice = caver.utils.fromPeb(totalPrice);
      setTtlKlay(totalPrice);
    } catch (e) {
      console.log("Error while getting minting price", e);
    }
  };

  const increment = async () => {
    if (noMints < 3) {
      const web3 = window.web3;
      let contractOf = new caver.klay.Contract(
        goongyeContractAbi,
        googyeContractAddress
      );
      let newNum = noMints + 1;
      let totalPrice = await contractOf.methods.gPRice(newNum).call();
      console.log("totalPrice", totalPrice);

      totalPrice = parseFloat(totalPrice) / 1000000000000000000;
      setTtlKlay(totalPrice);
      setNomints(newNum);
      console.log("Incremetn", totalPrice);
    }
  };
  const decrement = async () => {
    if (noMints > 1) {
      console.log("decremetn");
      const web3 = window.web3;
      let contractOf = new caver.klay.Contract(
        goongyeContractAbi,
        googyeContractAddress
      );
      let newNum = noMints - 1;
      console.log("newNum", newNum);

      let totalPrice = await contractOf.methods.gPRice(newNum).call();
      console.log("totalPrice", totalPrice);

      totalPrice = parseFloat(totalPrice) / 1000000000000000000;
      setTtlKlay(totalPrice);
      console.log("Incremetn", totalPrice);
      setNomints(newNum);
    }
  };

  const mintAndStake = async () => {
    // let myAccountAddress = await loadWeb3();
    console.log("myAccountAddress", acc);
    if (acc == "No Wallet") {
      console.log("No wallet");
      toast.error(acc);
    } else if (acc == "Wrong Network") {
      console.log("Wrong Network");
      toast.error(acc);
    } else if (acc == "Connect Wallet") {
      toast.error(acc);
    } else {
      try {
        const { klaytn } = window;
        let contractOf = new caver.klay.Contract(
          goongyeContractAbi,
          googyeContractAddress
        );

        let totalPrice = await contractOf.methods.gPRice(noMints).call();
        console.log("totalPrice", totalPrice);
        let balance = await caver.klay.getBalance(acc);
        // balance = caver.utils.fromPeb(balance);

        console.log("Balance", balance);
        if (parseFloat(balance) > parseFloat(totalPrice)) {
          await contractOf.methods.mint(noMints).send({
            from: acc,
            value: totalPrice,
            gas: "800000",
          });
          toast.success("Transaction Successfull");
        } else {
          toast.error("insufficient Balance!");
        }
      } catch (e) {
        console.log(" Error while minting", e);
        toast.error("Minting Failed");
      }
    }
  };

  const [sound, setSound] = useState(true);

  useEffect(() => {
    getInitialMintPrice();
  }, [acc]);

  return (
    <div className="container-fluid mintContainer  pt-5 pb-5" id="mint">
      <div className="row">
        <h1
          className="mintText "
          data-aos="fade-up"
          data-aos-duration="3000"
          data-aos-offset="200"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          Mint
        </h1>
      </div>
      <div className="row mt-5">
        <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center pt-3">
          <div
            class="mintCard "
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
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
          <div
            class="mintCard mintCard2 "
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
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
                    <button className="btnMinus " onClick={() => decrement()}>
                      -
                    </button>
                    <span className="spanCount ">{noMints}</span>
                    <button className="btnPlus " onClick={() => increment()}>
                      +
                    </button>
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
                    <span className="KLAYspan pe-2">{ttlKlay} KLAY</span>
                  </div>
                </div>
                <div className="mt-1">
                  <hr className="solid hori"></hr>
                </div>
                <div className="btnWalletStakeArea">
                  <div>
                    <button
                      className="btnConnectWallet mt-2 "
                      onClick={onConnectAcc}
                    >
                      {acc === "No Wallet"
                        ? "Connect"
                        : acc === "Connect Wallet"
                        ? "Connect"
                        : acc === "Wrong Network"
                        ? acc
                        : acc.substring(0, 4) +
                          "..." +
                          acc.substring(acc.length - 4)}
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={() => mintAndStake()}
                      className="btnMint mt-2 mb-2"
                    >
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
