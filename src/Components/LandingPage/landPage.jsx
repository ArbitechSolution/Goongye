import React from "react";
import banner1 from "../../Assets/banner1.png";
import "./landPage.css";

export default function LandPage() {
  return (
    <div className="container-fluid heroSection pt-5" id="/">
      <div className="row heroRowContainer">
        <div className="col d-flex justify-content-center align-items-center mt-5">
          <img className="myBabberImage" src={banner1}></img>
        </div>
        <div className="col d-flex justify-content-center align-items-center">
          <span className=" ms-4 myColor">WELCOME TO THE</span>
        </div>
        <div className="col d-flex justify-content-center align-items-center">
          <span className=" ms-4  myColor">CRAZY APE GOONGYE CLUB</span>
        </div>
        <div className="col myColorSimplePara">
          <p className="myColorSimple">
            The Goongye, the ruthless founder of the country, has transcended
            humanity and has become a higher being. He has transformed into the
            Crazy Ape Goongye, with knowledge beyond the fathomable concepts of
            man. Through his teachings, the Ape Goongye aims to create a new
            civilization that is efficient and prioritizes reason more than
            emotions.
          </p>
          <p className="myColorSimpleBlue pb-5">
            If you want to build this world better, come and join us!
          </p>
        </div>
      </div>
    </div>
  );
}
