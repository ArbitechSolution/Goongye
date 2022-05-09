import React from "react";
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
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/presales" element={<Presales />} />
          <Route exact path="/Staking" element={<Staking />} />
          <Route exact path="/minting" element={<MintModal />} />
          <Route exact path="/nftTrfansfer" element={<NFTTransferModal />} />
          {/* <Route exact path="/Mint" element={<Mint />} /> */}
        </Routes>
        {/* <FooterDown /> */}
        <Footer />
      </BrowserRouter>
      {/* <NavBar />
      <Staking />
      <StoryCarousel />
      <NFTCarousel /> */}
    </div>
  );
}

export default App;
