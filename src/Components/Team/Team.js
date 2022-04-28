import React from "react";
import teamImage1 from "../../Assets/images/APE 4.png";
import teamImage2 from "../../Assets/images/APE3 1.png";
import teamImage3 from "../../Assets/images/APE6 1.png";
import teamImage4 from "../../Assets/images/APE8 1.png";

import "./Team.css";
export default function Team() {
  return (
    <div className="container-fluid teamContainer  pt-5 pb-5" id="team">
      <div className="row pb-3">
        <h1 className="teamTitle">The Team</h1>
      </div>
      <div className="row mt-5 p-3">
        <div className="teamCardsColumn col-lg-3 col-md-6 col-sm-12">
          <div class="teamCard">
            <img src={teamImage1} class="teamCardImage" alt="..." />
            <div class="teamCardBody pt-3">
              <h5 class="cardTitle">#PSS J</h5>
              <h6 className="cardSubTitle">The Artist</h6>
            </div>
          </div>
        </div>
        <div className="teamCardsColumn col-lg-3 col-md-6 col-sm-12">
          <div class="teamCard">
            <img src={teamImage2} class="teamCardImage" alt="..." />
            <div class="teamCardBody pt-3">
              <h5 class="cardTitle">#Zoe</h5>
              <h6 className="cardSubTitle">Blockchain Dev</h6>
            </div>
          </div>
        </div>
        <div className="teamCardsColumn col-lg-3 col-md-6 col-sm-12">
          <div class="teamCard">
            <img src={teamImage3} class="teamCardImage" alt="..." />
            <div class="teamCardBody pt-3">
              <h5 class="cardTitle">#Sophia</h5>
              <h6 className="cardSubTitle">Web Design</h6>
            </div>
          </div>
        </div>
        <div className="teamCardsColumn col-lg-3 col-md-6 col-sm-12">
          <div class="teamCard">
            <img src={teamImage4} class="teamCardImage" alt="..." />
            <div class="teamCardBody pt-3">
              <h5 class="cardTitle">#Abbey</h5>
              <h6 className="cardSubTitle">Community</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
