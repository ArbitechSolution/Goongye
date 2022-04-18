import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/Navbar/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Staking from "./Components/Staking/Staking";
import StoryCarousel from "./Components/StoryCarousel/Carousel";

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Staking />
      <StoryCarousel />
    </div>
  );
}

export default App;
