import React from "react";
import FAQ from "../FAQ/FAQ";
import Footer from "../Footer/Footer";
import LandPage from "../LandingPage/landPage";
import Mint from "../Mint/Mint";
import NavBar from "../Navbar/navbar";
import NFTCarousel from "../NFTCarousel/Carousel";
import StakingDescription from "../StakingDescription/StakingDescription";
import Story from "../Story/Story";
import StoryCarousel from "../StoryCarousel/Carousel";
import Team from "../Team/Team";
import Tokenomics from "../Tokenomics/Tokenomics";

export default function Home() {
  return (
    <div>
      {/* <NavBar /> */}
      {/* <LandPage /> */}
      <Story />
      <StoryCarousel />
      <Tokenomics />
      <StakingDescription />
      <NFTCarousel />
      <Mint />
      <Team />
      <FAQ />
      <Footer />
    </div>
  );
}
