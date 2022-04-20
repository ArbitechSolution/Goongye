import React from "react";
import image1 from "../../Assets/images/APE2 1.png";
import image2 from "../../Assets/images/APE 4.png";

import "./Story.css";
export default function Story() {
  return (
    <div className="container-fluid storyContainer  pt-5 pb-5">
      <div className="row">
        <h1 className="storyText">Story</h1>
      </div>
      <div className="row pt-5">
        <div className="col-lg-6 col-md-12 col-sm-12 mt-4">
          <div className="row">
            <div className="col-12 ">
              <div className="col-12 d-flex justify-content-center align-items-center">
                <img className="card-img-top storyImages" src={image1} />
              </div>
            </div>
            <div className="col-12 ">
              <div className=" d-flex justify-content-center align-items-center">
                <img
                  className="card-img-top storyImages storyImage2"
                  src={image2}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 mt-4">
          <div>
            <h1 className="background">BACKGROUND</h1>
            <p className="backgroundPara">
              When the Goongye was still in his human form, he was a ruthless
              tyrant that led his people to victory. His country overcame war
              against various enemies through the use of deadly force and
              objective decisions. The Goongye showed no mercy to his enemies
              but was a good ally to his friends. He never abandoned a partner
              in battle nor let his worst enemies survive a fight. As he gained
              more knowledge to understand the world and become more powerful,
              he came upon the forbidden book – The Necronomicon.
            </p>
            <p className="backgroundPara">
              The Goongye was thirsty for knowledge and power which led him to
              ignore the warnings of his council and read the forbidden book. He
              spent weeks in his room, reading and analyzing each page and text.
              When he emerged from his weeks of seclusion, he was not a man
              anymore. He has become the Ape Goongye; a higher being that values
              reason and objectivity beyond anything else.
            </p>
          </div>
          <div className="">
            <h1 className="background">STORY</h1>
            <p className="backgroundPara">
              While the Ape Goongye has acquired knowledge beyond the
              understanding of man, the world has fallen into a war between the
              Eastern and Western countries. Since the Ape Goongye is from the
              east, he then prepares to help his allies win the war.
            </p>
            <p className="backgroundPara">
              However, reading the Necronomicon has made the Ape Goongye less of
              a tyrant and more of a peace-keeper. While he wants to secure the
              power of his country, he does not want to destroy the Western
              countries or harm innocent civilians.
            </p>
            <p className="backgroundPara">
              Since some of the Goongye’s allies preferred the ruthless tyrant,
              they are having trouble working with the changed Ape Goongye.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
