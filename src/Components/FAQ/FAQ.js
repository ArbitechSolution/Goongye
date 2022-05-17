import React from "react";
import mint from "../../Assets/images/mint.png";
import image2 from "../../Assets/images/APE 4.png";
import { useTranslation } from "react-i18next";

import "./FAQ.css";
export default function FAQ() {
  const { t, i18n } = useTranslation();
  return (
    <div className="container-fluid FAQContainer  pt-5 pb-5" id="faq">
      <div>
        <h1
          className="FAQTitle"
          data-aos="fade-up"
          data-aos-duration="3000"
          data-aos-offset="200"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          FAQ
        </h1>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <div class="FAQaccordion " id="myAccordion">
          <div
            class="accordion-item"
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <h2 class="accordion-header" id="headingOne">
              <button
                type="button"
                class="accordion-button collapse"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
              >
                <span className="QandA">Q.</span>When will the minting site be
                announced?
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse">
              <div class="accordianCardBody ps-5">
                <span className="QandA">A.</span>

                <p className="p-3">
                  The total issuance is 10,000 units, and 9,800 units will be
                  minted excluding 200 units of the team.
                </p>
              </div>
            </div>
          </div>
          <div
            class="accordion-item"
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <h2 class="accordion-header" id="headingTwo">
              <button
                type="button"
                class="accordion-button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
              >
                <span className="QandA">Q.</span> What is the total issuance and
                minting quantity?
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapsed show">
              <div class="accordianCardBody">
                <p className="p-3">
                  <span className="QandA">A.</span>
                  The total issuance is 10,000 units, and 9,800 units will be
                  minted excluding 200 units of the team.
                </p>
              </div>
            </div>
          </div>
          <div
            class="accordion-item"
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <h2 class="accordion-header" id="headingThree">
              <button
                type="button"
                class="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
              >
                <span className="QandA">Q.</span>
                What is the minting price, and how many mints are available per
                transaction?
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse">
              <div class="accordianCardBody">
                <p className="p-3">
                  <span className="QandA">A.</span>
                  The total issuance is 10,000 units, and 9,800 units will be
                  minted excluding 200 units of the team.
                </p>
              </div>
            </div>
          </div>
          <div
            class="accordion-item"
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <h2 class="accordion-header" id="headingFour">
              <button
                type="button"
                class="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
              >
                <span className="QandA">Q.</span>
                How can we do minting?
              </button>
            </h2>
            <div id="collapseFour" class="accordion-collapse collapse">
              <div class="accordianCardBody">
                <p className="p-3">
                  <span className="QandA">A.</span>
                  The total issuance is 10,000 units, and 9,800 units will be
                  minted excluding 200 units of the team.
                </p>
              </div>
            </div>
          </div>
          <div
            class="accordion-item"
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <h2 class="accordion-header" id="headingFive">
              <button
                type="button"
                class="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
              >
                <span className="QandA">Q.</span>
                Do you have NFT secondary royalty?
              </button>
            </h2>
            <div id="collapseFive" class="accordion-collapse collapse">
              <div class="accordianCardBody">
                <p className="p-3">
                  <span className="QandA">A.</span>
                  The total issuance is 10,000 units, and 9,800 units will be
                  minted excluding 200 units of the team.
                </p>
              </div>
            </div>
          </div>
          <div
            class="accordion-item"
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <h2 class="accordion-header" id="headingSix">
              <button
                type="button"
                class="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSix"
              >
                <span className="QandA">Q.</span>
                What are the Crazy Ape Goongye?
              </button>
            </h2>
            <div id="collapseSix" class="accordion-collapse collapse">
              <div class="accordianCardBody">
                <p className="p-3">
                  <span className="QandA">A.</span>
                  The total issuance is 10,000 units, and 9,800 units will be
                  minted excluding 200 units of the team.
                </p>
              </div>
            </div>
          </div>
          <div
            class="accordion-item"
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <h2 class="accordion-header" id="headingSeven">
              <button
                type="button"
                class="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSeven"
              >
                <span className="QandA">Q.</span>
                How many NFT’s will be minted?
              </button>
            </h2>
            <div id="collapseSeven" class="accordion-collapse collapse">
              <div class="accordianCardBody">
                <p className="p-3">
                  <span className="QandA">A.</span>
                  The total issuance is 10,000 units, and 9,800 units will be
                  minted excluding 200 units of the team.
                </p>
              </div>
            </div>
          </div>
          <div
            class="accordion-item"
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <h2 class="accordion-header" id="headingEight">
              <button
                type="button"
                class="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#collapseEight"
              >
                <span className="QandA">Q.</span>
                Is it hosted on IPFS?
              </button>
            </h2>
            <div id="collapseEight" class="accordion-collapse collapse">
              <div class="accordianCardBody">
                <p className="p-3">
                  <span className="QandA">A.</span>
                  The total issuance is 10,000 units, and 9,800 units will be
                  minted excluding 200 units of the team.
                </p>
              </div>
            </div>
          </div>
          <div
            class="accordion-item"
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <h2 class="accordion-header" id="headingNine">
              <button
                type="button"
                class="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#collapseNine"
              >
                <span className="QandA">Q.</span>
                Is there a whitelist and pre-sale for the Crazy Ape Goongye?
              </button>
            </h2>
            <div id="collapseNine" class="accordion-collapse collapse">
              <div class="accordianCardBody">
                <p className="p-3">
                  <span className="QandA">A.</span>
                  The total issuance is 10,000 units, and 9,800 units will be
                  minted excluding 200 units of the team.
                </p>
              </div>
            </div>
          </div>
          <div
            class="accordion-item"
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <h2 class="accordion-header" id="headingTen">
              <button
                type="button"
                class="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTen"
              >
                <span className="QandA">Q.</span>
                Will there be other characters in the future?
              </button>
            </h2>
            <div id="collapseTen" class="accordion-collapse collapse">
              <div class="accordianCardBody">
                <p className="p-3">
                  <span className="QandA">A.</span>
                  The total issuance is 10,000 units, and 9,800 units will be
                  minted excluding 200 units of the team.
                </p>
              </div>
            </div>
          </div>
          <div
            class="accordion-item"
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <h2 class="accordion-header" id="headingEleven">
              <button
                type="button"
                class="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#collapseEleven"
              >
                <span className="QandA">Q.</span>
                Are there any plans to develop Crazy King Goongye Games?
              </button>
            </h2>
            <div id="collapseEleven" class="accordion-collapse collapse">
              <div class="accordianCardBody">
                <p className="p-3">
                  <span className="QandA">A.</span>
                  The total issuance is 10,000 units, and 9,800 units will be
                  minted excluding 200 units of the team.
                </p>
              </div>
            </div>
          </div>

          <div
            class="accordion-item"
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <h2 class="accordion-header" id="headingEleven">
              <button
                type="button"
                class="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTweleve"
              >
                <span className="QandA">Q.</span>
                Why are the team members not public?
              </button>
            </h2>
            <div id="collapseTweleve" class="accordion-collapse collapse">
              <div class="accordianCardBody">
                <p className="p-3">
                  <span className="QandA">A.</span>
                  The total issuance is 10,000 units, and 9,800 units will be
                  minted excluding 200 units of the team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
