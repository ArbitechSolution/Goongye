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
function App() {
  return (
    <div className="App">
      <NavBar />
      <Staking />
      <StoryCarousel />
      <NFTCarousel />
    </div>
  );
}

export default App;
