import React from "react";
import { useNavigate } from "react-router";
import CAGC1 from "../../Assets/CAGC1.png";
import twitter from "../../Assets/images/social/twitter.png";
import talk from "../../Assets/images/social/talk.png";
import victor from "../../Assets/images/social/Vector.png";
import victor2 from "../../Assets/images/social/Vector2.png";
import "./navbar.css";
export default function NavBar({ changeMain, changeStake, changePresale }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("staking");
  };
  const handleClicks = () => {
    navigate("presales");
  };
  return (
    <div className="container-fluid navbarMainContainer">
      <div className="col-12 justify-content-end align-items-center mobileNabarSocial pt-2">
        <span className="languageChnage active">ENG</span>
        <span className="languageChnage">KOR</span>
        <a href="#" class="navbarSocialLinks">
          <img className="navbarSocialImages" src={twitter} />
        </a>
        <a href="#" class="navbarSocialLinks">
          <img className="navbarSocialImages" src={victor} />
        </a>
        <a href="#" class="navbarSocialLinks">
          <img className="navbarSocialImages" src={talk} />
        </a>

        <a href="#" class="navbarSocialLinks">
          <img className="navbarSocialImages" src={victor2} />
        </a>
      </div>
      <nav class="navbar navbar-expand-lg navbar-dark static-top">
        <div class="container navbarContainer mt-2">
          <a class="navbar-brand" href="/">
            <img src={CAGC1} alt="..." height="36" />
          </a>
          <div className="d-flex justify-content-end align-items-center pt-2 pe-4 d-lg-none ">
            <span className="languageChnage">ENG</span>
            <span className="languageChnage">KOR</span>
            <a href="#" class="navbarSocialLinks">
              <img className="navbarSocialImages" src={twitter} />
            </a>
            <a href="#" class="navbarSocialLinks">
              <img className="navbarSocialImages" src={victor} />
            </a>
            <a href="#" class="navbarSocialLinks">
              <img className="navbarSocialImages" src={talk} />
            </a>

            <a href="#" class="navbarSocialLinks">
              <img className="navbarSocialImages" src={victor2} />
            </a>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto nav-item-list">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="#story"
                  onClick={() => changeMain()}
                >
                  Story
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#tokenomics"
                  onClick={() => changeMain()}
                >
                  Tokennomics
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/#nft">
                  NFT
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/#mint">
                  Mint
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link navLink"
                  onClick={() => changeStake()}
                  href="#Stake"
                >
                  Stake
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#roadmap"
                  onClick={() => changeMain()}
                >
                  Roadmap
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#team" onClick={() => changeMain()}>
                  Team
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#faq" onClick={() => changeMain()}>
                  FAQ
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#Presale"
                  onClick={() => changePresale()}
                >
                  Presale
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
