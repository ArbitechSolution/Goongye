import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import CAGC1 from "../../Assets/CAGC1.png";
import "./navbar.css";
export default function navbar() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          {/* <span> */}
          <img src={CAGC1} alt="" width={100} height={35} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#Story" className="myNavItemstxt">
              Story
            </Nav.Link>
            <Nav.Link className="ms-4 myNavItemstxt" href="#Tokennomics">
              Tokennomics
            </Nav.Link>

            <Nav.Link className="ms-4 myNavItemstxt" href="#NFT">
              NFT
            </Nav.Link>

            <Nav.Link className="ms-4 myNavItemstxt" href="#Mint">
              Mint
            </Nav.Link>

            <Nav.Link className="ms-4 myNavItemstxt" href="#Stake">
              Stake
            </Nav.Link>

            <Nav.Link className="ms-4 myNavItemstxt" href="#Roadmap">
              Roadmap
            </Nav.Link>

            <Nav.Link className="ms-4 myNavItemstxt" href="#Team">
              Team
            </Nav.Link>

            <Nav.Link className="ms-4 myNavItemstxt " href="#FAQq">
              FAQ
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
