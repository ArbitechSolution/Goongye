import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/Navbar/navbar";
import LandPage from "./Components/LandingPage/landPage";
import "bootstrap/dist/css/bootstrap.min.css";
import Staking from "./Components/Staking/Staking";
import StoryCarousel from "./Components/StoryCarousel/Carousel";
import NFTCarousel from "./Components/NFTCarousel/Carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./Components/Home/home";
import Presales from "./Components/Presales/Presales";
import Footer from "./Components/Footer/Footer";
import MintModal from "./Components/MintModel/MintModel";
import NFTTransferModal from "./Components/NFTTransferModal/NFTTransferModal";
import AppPresale from "./AppPresale";
import Appstake from "./Appstake";
import AppHome from "./AppHome";
import Caver from "caver-js";
import "animate.css";
import AOS from "aos";

import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const caver = new Caver("http://localhost:8551/");
function App() {
  const testFunction = async () => {
    const keyring = caver.rpc.klay;

    // const keyring = caver.wallet.keyring.generate();
    //.getBalance(
    //    "0x12B87236AdE9DA0726248dd49d90A41a3741BacF"
    // )
    console.log("keyring", keyring);
  };

  useEffect(() => {
    testFunction();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        {/* <NavBar /> */}
        <Routes>
          <Route exact path="/" element={<AppHome />} />
          <Route exact path="/Presale" element={<AppPresale />} />
          <Route exact path="/Stake" element={<Appstake />} />
          {/* <Route exact path="/minting" element={<MintModal />} />
          <Route exact path="/nftTrfansfer" element={<NFTTransferModal />} /> */}
          {/* <Route exact path="/Mint" element={<Mint />} /> */}
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
      {/* <NavBar />
      <Staking />
      <StoryCarousel />
      <NFTCarousel /> */}
    </div>
  );
}

export default App;
