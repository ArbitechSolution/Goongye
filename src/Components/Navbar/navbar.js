import React from "react";
import { useNavigate } from "react-router";
import CAGC1 from "../../Assets/CAGC1.png";
import twitter from "../../Assets/images/social/twitter.png";
import talk from "../../Assets/images/social/talk.png";
import victor from "../../Assets/images/social/Vector.png";
import victor2 from "../../Assets/images/social/Vector2.png";
import "./navbar.css";
export default function NavBar() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("staking");
  };
  return (
    <div className="container-fluid navbarMainContainer">
      <div className="col-12 justify-content-end align-items-center mobileNabarSocial pt-2 pe-4">
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
          <a class="navbar-brand" href="#">
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
                <a class="nav-link active" aria-current="page" href="#story">
                  Story
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#tokenomics">
                  Tokennomics
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#nft">
                  NFT
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#mint">
                  Mint
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link navLink"
                  onClick={handleClick}
                  // href="/Staking"
                >
                  Stake
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#roadmap">
                  Roadmap
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#team">
                  Team
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#faq">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
// export default function NavBar() {
//   return (
//     <div className="backGround">
//       <div>
//         <Navbar collapseOnSelect expand="lg" variant="dark">
//           <Container>
//             <Navbar.Brand href="#home">
//               {/* <span> */}
//               <img src={CAGC1} alt="" width={100} height={35} />
//             </Navbar.Brand>
//             <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//             <Navbar.Collapse id="responsive-navbar-nav">
//               <Nav className="ms-auto">
//                 <Nav.Link href="#Story" className="myNavItemstxt">
//                   Story
//                 </Nav.Link>
//                 <Nav.Link className="ms-4 myNavItemstxt" href="#Tokennomics">
//                   Tokennomics
//                 </Nav.Link>

//                 <Nav.Link className="ms-4 myNavItemstxt" href="#NFT">
//                   NFT
//                 </Nav.Link>

//                 <Nav.Link className="ms-4 myNavItemstxt" href="#Mint">
//                   Mint
//                 </Nav.Link>

//                 <Nav.Link className="ms-4 myNavItemstxt" href="#Stake">
//                   Stake
//                 </Nav.Link>

//                 <Nav.Link className="ms-4 myNavItemstxt" href="#Roadmap">
//                   Roadmap
//                 </Nav.Link>

//                 <Nav.Link className="ms-4 myNavItemstxt" href="#Team">
//                   Team
//                 </Nav.Link>

//                 <Nav.Link className="ms-4 myNavItemstxt " href="#FAQq">
//                   FAQ
//                 </Nav.Link>
//               </Nav>
//             </Navbar.Collapse>
//           </Container>
//         </Navbar>
//       </div>
//       {/* <LandPage /> */}
//     </div>
//   );
// }
