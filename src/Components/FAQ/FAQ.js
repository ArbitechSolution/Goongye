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
          {t("FAQ.1")}
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
                class="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
              >
                <span className="QandA">Q.</span>{t("faq.parah1")}
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse">
              <div class="accordianCardBody">
                <p>
                {t("faq.parah2")}
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
                <span className="QandA">Q.</span> {t("faq.parah3")}
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse show">
              <div class="accordianCardBody">
                <p>
                {t("faq.parah2")}
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
                {t("faq.parah5")}
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse">
              <div class="accordianCardBody">
                <p>
                {t("faq.parah2")}
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
                {t("faq.parah7")}
              </button>
            </h2>
            <div id="collapseFour" class="accordion-collapse collapse">
              <div class="accordianCardBody">
                <p>
                {t("faq.parah2")}
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
                {t("faq.parah9")}
              </button>
            </h2>
            <div id="collapseFive" class="accordion-collapse collapse">
              <div class="accordianCardBody">
                <p>
                {t("faq.parah2")}
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
                {t("faq.parah11")}
              </button>
            </h2>
            <div id="collapseSix" class="accordion-collapse collapse">
              <div class="accordianCardBody">
                <p>
                {t("faq.parah2")}
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
                {t("faq.parah13")}
              </button>
            </h2>
            <div id="collapseSeven" class="accordion-collapse collapse">
              <div class="accordianCardBody">
                <p>
                {t("faq.parah2")}
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
                {t("faq.parah15")}
              </button>
            </h2>
            <div id="collapseEight" class="accordion-collapse collapse">
              <div class="accordianCardBody">
                <p>
                {t("faq.parah2")}
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
                {t("faq.parah17")}
              </button>
            </h2>
            <div id="collapseNine" class="accordion-collapse collapse">
              <div class="accordianCardBody">
                <p>
                {t("faq.parah2")}
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
                {t("faq.parah19")}
              </button>
            </h2>
            <div id="collapseTen" class="accordion-collapse collapse">
              <div class="accordianCardBody">
                <p>
                {t("faq.parah2")}
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
                {t("faq.parah21")}
              </button>
            </h2>
            <div id="collapseEleven" class="accordion-collapse collapse">
              <div class="accordianCardBody">
                <p>
                {t("faq.parah2")}
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
            <h2 class="accordion-header" id="headingTweleve">
              <button
                type="button"
                class="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTweleve"
              >
                <span className="QandA">Q.</span>
                {t("faq.parah23")}
              </button>
            </h2>
            <div id="collapseTweleve" class="accordion-collapse collapse">
              <div class="accordianCardBody">
                <p>
                {t("faq.parah2")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
