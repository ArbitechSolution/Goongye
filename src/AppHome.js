import react, { useState } from "react";
import FAQ from "./Components/FAQ/FAQ";
import LandPage from "./Components/LandingPage/landPage";
import Mint from "./Components/Mint/Mint";
import NavBar from "./Components/Navbar/navbar";
import NFTCarousel from "./Components/NFTCarousel/Carousel";
import Roadmap from "./Components/Roadmap/Roadmap";
import StakingDescription from "./Components/StakingDescription/StakingDescription";
import Story from "./Components/Story/Story";
import StoryCarousel from "./Components/StoryCarousel/Carousel";
import Tokenomics from "./Components/Tokenomics/Tokenomics";
import Appstake from "./Appstake";
import AppPresale from "./AppPresale";
import Team from "./Components/Team/Team";
const AppHome = () => {
  let [changeRouteis, setChangeRouteIs] = useState("main");
  const changeMain = () => {
    setChangeRouteIs("main");
  };
  const changeStake = () => {
    setChangeRouteIs("Stake");
  };
  const changePresale = () => {
    setChangeRouteIs("Presale");
  };

  const Main = () => {
    return (
      <div>
        <NavBar
          changeMain={changeMain}
          changeStake={changeStake}
          changePresale={changePresale}
        />
        <LandPage />
        <Story />
        <StoryCarousel />
        <Tokenomics />
        <StakingDescription />
        <NFTCarousel />
        <Mint />
        <Roadmap />
        <Team />
        <FAQ />
      </div>
    );
  };

  const Stakeing = () => {
    return (
      <div>
        <NavBar
          changeMain={changeMain}
          changeStake={changeStake}
          changePresale={changePresale}
        />
        <Appstake />
      </div>
    );
  };
  const Presale = () => {
    return (
      <div>
        <NavBar
          changeMain={changeMain}
          changeStake={changeStake}
          changePresale={changePresale}
        />
        <AppPresale />
      </div>
    );
  };

  if (changeRouteis == "main") {
    return (
      <div className="App">
        <Main />
      </div>
    );
  } else if (changeRouteis == "Stake") {
    return (
      <div className="App">
        <Stakeing />
      </div>
    );
  } else if (changeRouteis == "Presale") {
    return (
      <div className="App">
        <Presale />
      </div>
    );
  } else {
    return <></>;
  }
};
export default AppHome;