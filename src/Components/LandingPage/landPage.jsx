import React from "react";
import banner1 from "../../Assets/banner1.png";
import "./landPage.css";

export default function LandPage() {
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-8">
            <img src={banner1} alt="banner" className="myBabberImage" />
          </div>
        </div>
      </div>
      <div className="myWelCometxt">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-4">
              <span className="fs-2 fs-sm-4 fw-bold ms-5 myColor">
                WELCOME TO THE
              </span>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-5">
              <span className="fs-2 ms-4 fw-bold  myColor">
                CRAZY APE GOONGYE CLUB
              </span>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-7">
              <p className="myColorSimple">
                The Goongye, the ruthless founder of the country, has
                transcended humanity and has become a higher being. He has
                transformed into the Crazy Ape Goongye, with knowledge beyond
                the fathomable concepts of man. Through his teachings, the Ape
                Goongye aims to create a new civilization that is efficient and
                prioritizes reason more than emotions.
              </p>
              <p className="myColorSimpleBlue">
                If you want to build this world better, come and join us!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
