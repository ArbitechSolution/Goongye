import React from "react";
import "./Roadmap.css";
import image1 from "../../Assets/images/18 1.png";
import image2 from "../../Assets/images/2 7233.png";
import arrow from "../../Assets/images/OBJECTS.png";
import line from "../../Assets/images/Line-8.png";
import { useTranslation } from "react-i18next";

export default function Roadmap() {
  const { t, i18n } = useTranslation();

  return (
    <div className="roadMapContainer pt-5 pb-5" id="roadmap">
      <h1
        className="roadmapTitle "
        data-aos="zoom-in"
        data-aos-duration="3000"
        data-aos-offset="200"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        {t("Roadmap.1")}
      </h1>
      {/* large view */}
      <div className="row roadmapRowContainer roadmapLaptop  d-lg-flex  d-md-none  d-sm-none">
        <div className="col-sm-12 col-md-4 col-lg-4 roadMapCardCol roadMapCardColLeft g-0">
          <div
            class="roadmapLargeCard "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <hr
              className="dottedLine "
              data-aos="zoom-in"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            />
            <span
              class="badge roadmapCardBadge"
              data-aos="flip-left"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              5%
            </span>
            <span class="roadmapCardText">
            {t("roadmap.parah1")}
              <span className="colorText"> {t("roadmap.Goongye")}</span>
            </span>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 roadMapCardCol g-0">
          <div
            class="roadmapLargeCard "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <hr
              className="dottedLine "
              data-aos="zoom-in"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            />
            <span
              class="badge roadmapCardBadge"
              data-aos="flip-left"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              10%
            </span>
            <span className="">
            {t("roadmap.parah2")} <span className="colorText"> {t("roadmap.presale")}</span>
            </span>
          </div>
        </div>

        <div className="col-sm-12 col-md-4 col-lg-4 roadMapCardCol roadMapCardColRight g-0">
          <div
            class="roadmapLargeCard "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <span
              class="badge roadmapCardBadge"
              data-aos="flip-left"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              15%
            </span>
            <span class="roadmapCardText">
              <span className="colorText"> {t("roadmap.prize")}</span> {t("roadmap.parah3")}
            </span>
          </div>
          <img
            src={line}
            class="verticalRuleRight "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          />
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 roadMapCardCol roadMapCardColLeft g-0">
          <div
            class="roadmapLargeCard "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <hr
              className="dottedLine "
              data-aos="zoom-in"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            />

            <span
              class="badge roadmapCardBadge"
              data-aos="flip-left"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              40%
            </span>

            <span className="">
              <span className="colorText">{t("roadmap.Start")}</span> {t("roadmap.parah4")}
            </span>
          </div>
          <img
            src={line}
            class="verticalRuleLeft "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          />
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 roadMapCardCol g-0">
          <div
            class="roadmapLargeCard lightCard "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <hr
              className="dottedLine "
              data-aos="zoom-in"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            />
            <span
              class="badge roadmapCardBadgeLight"
              data-aos="flip-left"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false "
            >
              30%
            </span>

            <span className="">
            {t("roadmap.parah5")}
              <span className="colorText ps-1">{t("roadmap.People")}</span>
            </span>
          </div>
        </div>

        <div className="col-sm-12 col-md-4 col-lg-4 roadMapCardCol roadMapCardColRight g-0">
          <div
            class="roadmapLargeCard "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <span
              class="badge roadmapCardBadge"
              data-aos="flip-left"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              20%
            </span>

            <span className="">
              <span className="colorText"> {t("roadmap.Tokenomics")}</span> {t("roadmap.parah6")}
            </span>
          </div>
        </div>

        <div className="col-sm-12 col-md-4 col-lg-4 roadMapCardCol roadMapCardColLeft g-0">
          <div
            class="roadmapLargeCard lightCard "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <hr
              className="dottedLine "
              data-aos="zoom-in"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            />
            <span className="">
              <span
                class="badge roadmapCardBadgeLight"
                data-aos="flip-left"
                data-aos-duration="3000"
                data-aos-offset="200"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
              >
                45%
              </span>
              {t("roadmap.Open")}
              <span className="colorText ps-1 pe-1">{t("roadmap.parah7")}</span>
              {t("roadmap.parah8")}
            </span>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 roadMapCardCol g-0">
          <div
            class="roadmapLargeCard "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <hr
              className="dottedLine "
              data-aos="zoom-in"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            />
            <span
              class="badge roadmapCardBadge"
              data-aos="flip-left"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              50%
            </span>
            <span class="roadmapCardText">
            {t("roadmap.Purchase")}
              <span className="colorText pe-1"> {t("roadmap.parah9")}</span>
              {t("roadmap.parah10")}
            </span>
          </div>
        </div>

        <div className="col-sm-12 col-md-4 col-lg-4 roadMapCardCol roadMapCardColRight g-0">
          <div
            class="roadmapLargeCard lightCard "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <span
              class="badge roadmapCardBadge"
              data-aos="flip-left"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              60%
            </span>
            <span className="">
              <span className="colorText"> {t("roadmap.parah11")}</span> {t("roadmap.parah12")}
            </span>
          </div>
          <img
            src={line}
            class="verticalRuleRight "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          />
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 roadMapCardCol roadMapCardColLeft g-0">
          <div
            class="roadmapLargeCard lightCard "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <hr
              className="dottedLine "
              data-aos="zoom-in"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            />
            <span
              class="badge roadmapCardBadgeLight"
              data-aos="flip-left"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              80%
            </span>

            <span className="">
            {t("roadmap.parah13")}
              <span className="colorText pe-1 ps-1">{t("roadmap.GoongyeApe")}</span>
              ({t("roadmap.parah14")})
            </span>
          </div>
          <img
            src={line}
            class="verticalRuleLeft "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          />
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 roadMapCardCol g-0">
          <div
            class="roadmapLargeCard lightCard "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <hr
              className="dottedLine "
              data-aos="zoom-in"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            />
            <span
              class="badge roadmapCardBadgeLight"
              data-aos="flip-left"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              75%
            </span>

            <span class="roadmapCardText">
            {t("roadmap.Add")} <span className="colorText"> {t("roadmap.governance")}</span> {t("roadmap.parah15")}
            </span>
          </div>
        </div>

        <div className="col-sm-12 col-md-4 col-lg-4 roadMapCardCol roadMapCardColRight g-0">
          <div
            class="roadmapLargeCard "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <span
              class="badge roadmapCardBadge"
              data-aos="flip-left"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              70%
            </span>

            <span className="">
            {t("roadmap.conduct")}
              <span className="colorText pe-1"> {t("roadmap.parah16")}</span>
              {t("roadmap.parah17")}
            </span>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 roadMapCardCol roadMapCardColLeft g-0">
          <div
            class="roadmapLargeCard "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <hr
              className="dottedLine "
              data-aos="zoom-in"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            />
            <span
              class="badge roadmapCardBadge"
              data-aos="flip-left"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              85%
            </span>

            <span className="">
            {t("roadmap.Open")}<span className="colorText"> ‘{t("roadmap.parah18")}’</span>
            </span>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 roadMapCardCol g-0">
          <div
            class="roadmapLargeCard lightCard "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <hr
              className="dottedLine "
              data-aos="zoom-in"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            />
            <span
              class="badge roadmapCardBadgeLight"
              data-aos="flip-left"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              90%
            </span>

            <span className="">
            {t("roadmap.Issue")}<span className="colorText ps-1">{t("roadmap.NFT")}</span> {t("roadmap.parah19")}
            </span>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 roadMapCardCol roadMapCardColRight g-0">
          <div
            class="roadmapLargeCard lightCard "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <span
              class="badge roadmapCardBadgeLight"
              data-aos="flip-left"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              95%
            </span>

            <span className="">
            {t("roadmap.parah20")}
              <span className="colorText ps-1">{t("roadmap.parah21")} </span>{t("roadmap.parah22")}
            </span>
          </div>
          <img
            src={line}
            class="verticalRuleRight "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          />
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 roadMapCardCol roadMapCardColLeft g-0">
          <div
            class="roadmapLargeCard "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <hr
              className="dotted100Line "
              data-aos="zoom-in"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            />
            <span
              class="badge roadmapCardBadge"
              data-aos="flip-left"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              100%
            </span>
            <span className="">
            {t("roadmap.parah23")}
            </span>
          </div>
        </div>
      </div>

      {/* mid level view */}
      <div className="row roadmapRowContainer roadmapTablet d-md-flex  d-lg-none d-sm-none">
        <div className="col-sm-6 col-md-6 col-lg-6 roadMapCardCol g-0">
          <div
            class="roadmapTabletCard "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <span
              class="badge roadmapCardBadge"
              data-aos="flip-left"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              5%
            </span>
            <hr
              className="dottedTabletLine "
              data-aos="zoom-in"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            />
            <span class="roadmapCardText">
            {t("roadmap.parah1")}
              <span className="colorText"> {t("roadmap.Goongye")}</span>
            </span>
          </div>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-6 roadMapCardCol g-0">
          <div
            class="roadmapTabletCard "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <span
              class="badge roadmapCardBadge"
              data-aos="flip-left"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              10%
            </span>
            <span className="">
            {t("roadmap.parah2")} <span className="colorText"> {t("roadmap.presale")}</span>
            </span>
          </div>
          <img
            src={line}
            class="verticalTabletRule "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          />
        </div>
        <div className="col-sm-6 col-md-6 col-lg-6 roadMapCardCol g-0">
          <div
            class="roadmapTabletCard "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <span
              class="badge roadmapCardBadge"
              data-aos="flip-left"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              20%
            </span>
            <hr
              className="dottedTabletLine "
              data-aos="zoom-in"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            />
            <span className="">
              <span className="colorText"> {t("roadmap.Tokenomics")}</span> {t("roadmap.parah6")}
            </span>
          </div>
          <img src={line} class="verticalTabletRule" />
        </div>
        <div className="col-sm-6 col-md-6 col-lg-6 roadMapCardCol g-0">
          <div
            class="roadmapTabletCard "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <span
              class="badge roadmapCardBadge"
              data-aos="flip-left"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              15%
            </span>
            <span class="roadmapCardText">
              <span className="colorText"> {t("roadmap.prize")}</span> {t("roadmap.parah3")}
            </span>
          </div>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-6 roadMapCardCol g-0">
          <div
            class="roadmapTabletCard lightCard "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <span
              class="badge roadmapCardBadgeLight"
              data-aos="flip-left"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              30%
            </span>
            <hr
              className="dottedTabletLine "
              data-aos="zoom-in"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            />
            <span className="">
            {t("roadmap.parah5")}
              <span className="colorText ps-1">{t("roadmap.People")}</span>
            </span>
          </div>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-6 roadMapCardCol g-0">
          <div
            class="roadmapTabletCard "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <span
              class="badge roadmapCardBadge"
              data-aos="flip-left"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              40%
            </span>
            <span className="">
              <span className="colorText">{t("roadmap.Start")}</span> {t("roadmap.parah4")}
            </span>
          </div>
          <img
            src={line}
            class="verticalTabletRule "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          />
        </div>
        <div className="col-sm-6 col-md-6 col-lg-6 roadMapCardCol g-0">
          <div
            class="roadmapTabletCard "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <span
              class="badge roadmapCardBadge"
              data-aos="flip-left"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              50%
            </span>
            <hr
              className="dottedTabletLine "
              data-aos="zoom-in"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            />
            <span class="roadmapCardText">
            {t("roadmap.Purchase")}
              <span className="colorText pe-1"> {t("roadmap.parah9")}</span>
              {t("roadmap.parah10")}
            </span>
          </div>
          <img
            src={line}
            class="verticalTabletRule "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          />
        </div>
        <div className="col-sm-6 col-md-6 col-lg-6 roadMapCardCol g-0">
          <div
            class="roadmapTabletCard lightCard "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <span className="">
              <span
                class="badge roadmapCardBadgeLight"
                data-aos="flip-left"
                data-aos-duration="3000"
                data-aos-offset="200"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
              >
                45%
              </span>
              {t("roadmap.Open")}
              <span className="colorText ps-1 pe-1">{t("roadmap.parah7")}</span>
              {t("roadmap.parah8")}
            </span>
          </div>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-6 roadMapCardCol g-0">
          <div
            class="roadmapTabletCard lightCard "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <span
              class="badge roadmapCardBadgeLight"
              data-aos="flip-left"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              60%
            </span>
            <hr
              className="dottedTabletLine "
              data-aos="zoom-in"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            />
            <span className="">
              <span className="colorText"> {t("roadmap.parah11")}</span> {t("roadmap.parah12")}
            </span>
          </div>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-6 roadMapCardCol g-0">
          <div
            class="roadmapTabletCard "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <span
              class="badge roadmapCardBadge"
              data-aos="flip-left"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              70%
            </span>
            <span className="">
            {t("roadmap.conduct")}
              <span className="colorText pe-1">{t("roadmap.parah16")}</span>
              {t("roadmap.parah17")}
            </span>
          </div>
          <img
            src={line}
            class="verticalTabletRule "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          />
        </div>
        <div className="col-sm-6 col-md-6 col-lg-6 roadMapCardCol g-0">
          <div
            class="roadmapTabletCard lightCard "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <span
              class="badge roadmapCardBadgeLight"
              data-aos="flip-left"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              80%
            </span>
            <hr
              className="dottedTabletLine "
              data-aos="zoom-in"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            />
            <span className="">
            {t("roadmap.parah13")}
              <span className="colorText pe-1 ps-1">{t("roadmap.GoongyeApe")}</span>
              ({t("roadmap.parah14")})
            </span>
          </div>
          <img
            src={line}
            class="verticalTabletRule "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          />
        </div>
        <div className="col-sm-6 col-md-6 col-lg-6 roadMapCardCol g-0">
          <div
            class="roadmapTabletCard lightCard "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <span
              class="badge roadmapCardBadgeLight"
              data-aos="flip-left"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              75%
            </span>
            <span class="roadmapCardText">
            {t("roadmap.Add")} <span className="colorText"> {t("roadmap.governance")}</span> {t("roadmap.parah15")}
            </span>
          </div>
        </div>

        <div className="col-sm-6 col-md-6 col-lg-6 roadMapCardCol g-0">
          <div
            class="roadmapTabletCard "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <span
              class="badge roadmapCardBadge"
              data-aos="flip-left"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              85%
            </span>
            <hr
              className="dottedTabletLine "
              data-aos="zoom-in"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            />
            <span className="">
            {t("roadmap.Open")}<span className="colorText"> ‘{t("roadmap.parah18")}’</span>
            </span>
          </div>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-6 roadMapCardCol g-0">
          <div
            class="roadmapTabletCard lightCard "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <span
              class="badge roadmapCardBadgeLight"
              data-aos="flip-left"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              90%
            </span>
            <span className="">
            {t("roadmap.Issue")}<span className="colorText ps-1">{t("roadmap.NFT")}</span> {t("roadmap.parah19")}
            </span>
          </div>
          <img
            src={line}
            class="verticalTabletRule "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          />
        </div>
        <div className="col-sm-6 col-md-6 col-lg-6 roadMapCardCol g-0">
          <div
            class="roadmapTabletCard "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <span
              class="badge roadmapCardBadge"
              data-aos="flip-left"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              100%
            </span>
            <hr
              className="dottedTabletLine "
              data-aos="zoom-in"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            />
            <span className="">
            {t("roadmap.parah23")}
            </span>
          </div>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-6 roadMapCardCol g-0">
          <div
            class="roadmapTabletCard lightCard "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <span
              class="badge roadmapCardBadgeLight"
              data-aos="flip-left"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              95%
            </span>

            <span className="">
            {t("roadmap.parah20")}
              <span className="colorText ps-1">{t("roadmap.parah21")} </span>{t("roadmap.parah22")}
            </span>
          </div>
        </div>
      </div>

      {/* mobile view */}

      <div className="row roadmapRowMobileContainer roadmapMobile d-sm-flex  d-md-none d-lg-none ">
        <div className="col-sm-12 col-md-4 col-lg-4 roadMapMobileCardCol">
          <div
            class="roadmapMobileCard "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <span
              class="badge roadmapCardBadge"
              data-aos="flip-left"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              5%
            </span>
            <span class="roadmapCardText">
            {t("roadmap.parah1")}
              <span className="colorText"> {t("roadmap.Goongye")}</span>
            </span>
          </div>
          <img
            src={line}
            class="verticalMobileRule "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          />
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 roadMapMobileCardCol">
          <div
            class="roadmapMobileCard "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <span
              class="badge roadmapCardBadge"
              data-aos="flip-left"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              10%
            </span>
            <span className="">
            {t("roadmap.parah2")} <span className="colorText"> {t("roadmap.presale")}</span>
            </span>
          </div>
          <img
            src={line}
            class="verticalMobileRule "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          />
        </div>

        <div className="col-sm-12 col-md-4 col-lg-4 roadMapMobileCardCol">
          <div
            class="roadmapMobileCard "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <span
              class="badge roadmapCardBadge"
              data-aos="flip-left"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              15%
            </span>

            <span class="roadmapCardText">
              <span className="colorText"> {t("roadmap.prize")}</span> {t("roadmap.parah3")}
            </span>
          </div>
          <img
            src={line}
            class="verticalMobileRule "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          />
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 roadMapMobileCardCol">
          <div
            class="roadmapMobileCard "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <span
              class="badge roadmapCardBadge"
              data-aos="flip-left"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              20%
            </span>

            <span className="">
              <span className="colorText"> {t("roadmap.Tokenomics")}</span> {t("roadmap.parah6")}
            </span>
          </div>
          <img
            src={line}
            class="verticalMobileRule "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          />
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 roadMapMobileCardCol">
          <div
            class="roadmapMobileCard lightCard "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <span
              class="badge roadmapCardBadgeLight"
              data-aos="flip-left"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              30%
            </span>

            <span className="">
            {t("roadmap.parah5")}
              <span className="colorText ps-1">{t("roadmap.People")}</span>
            </span>
          </div>
          <img
            src={line}
            class="verticalMobileRule "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          />
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 roadMapMobileCardCol">
          <div
            class="roadmapMobileCard "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <span
              class="badge roadmapCardBadge"
              data-aos="flip-left"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              40%
            </span>
            <span className="">
              <span className="colorText">{t("roadmap.Start")}</span> {t("roadmap.parah4")}
            </span>
          </div>
          <img
            src={line}
            class="verticalMobileRule "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          />
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 roadMapMobileCardCol">
          <div
            class="roadmapMobileCard lightCard "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <span className="">
              <span
                class="badge roadmapCardBadgeLight"
                data-aos="flip-left"
                data-aos-duration="3000"
                data-aos-offset="200"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
              >
                45%
              </span>
              {t("roadmap.Open")}
              <span className="colorText ps-1 pe-1">{t("roadmap.parah7")}</span>
              {t("roadmap.parah8")}
            </span>
          </div>
          <img
            src={line}
            class="verticalMobileRule "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          />
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 roadMapMobileCardCol">
          <div
            class="roadmapMobileCard "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <span
              class="badge roadmapCardBadge"
              data-aos="flip-left"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              50%
            </span>

            <span class="roadmapCardText">
            {t("roadmap.Purchase")}
              <span className="colorText pe-1"> {t("roadmap.parah9")}</span>
              {t("roadmap.parah10")}
            </span>
          </div>
          <img
            src={line}
            class="verticalMobileRule "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          />
        </div>

        <div className="col-sm-12 col-md-4 col-lg-4 roadMapMobileCardCol">
          <div
            class="roadmapMobileCard lightCard "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <span
              class="badge roadmapCardBadgeLight"
              data-aos="flip-left"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              60%
            </span>

            <span className="">
              <span className="colorText"> {t("roadmap.parah11")}</span> {t("roadmap.parah12")}
            </span>
          </div>
          <img
            src={line}
            class="verticalMobileRule "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          />
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 roadMapMobileCardCol">
          <div
            class="roadmapMobileCard "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <span
              class="badge roadmapCardBadge"
              data-aos="flip-left"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              70%
            </span>

            <span className="">
            {t("roadmap.conduct")}
              <span className="colorText pe-1"> {t("roadmap.parah16")}</span>
              {t("roadmap.parah17")}
            </span>
          </div>
          <img
            src={line}
            class="verticalMobileRule "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          />
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 roadMapMobileCardCol">
          <div
            class="roadmapMobileCard lightCard "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <span
              class="badge roadmapCardBadgeLight"
              data-aos="flip-left"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              75%
            </span>

            <span class="roadmapCardText">
            {t("roadmap.Add")} <span className="colorText"> {t("roadmap.governance")}</span> {t("roadmap.parah15")}
            </span>
          </div>
          <img
            src={line}
            class="verticalMobileRule "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          />
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 roadMapMobileCardCol">
          <div
            class="roadmapMobileCard lightCard "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <span
              class="badge roadmapCardBadgeLight"
              data-aos="flip-left"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              80%
            </span>

            <span className="">
            {t("roadmap.parah13")}
              <span className="colorText ps-1 pe-1">{t("roadmap.GoongyeApe")}</span>
              ({t("roadmap.parah14")})
            </span>
          </div>
          <img
            src={line}
            class="verticalMobileRule "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          />
        </div>

        <div className="col-sm-12 col-md-4 col-lg-4 roadMapMobileCardCol">
          <div
            class="roadmapMobileCard "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <span
              class="badge roadmapCardBadge"
              data-aos="flip-left"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              85%
            </span>

            <span className="">
            {t("roadmap.Open")}<span className="colorText"> ‘{t("roadmap.parah18")}’</span>
            </span>
          </div>
          <img
            src={line}
            class="verticalMobileRule "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          />
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 roadMapMobileCardCol">
          <div
            class="roadmapMobileCard lightCard "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <span
              class="badge roadmapCardBadgeLight"
              data-aos="flip-left"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              90%
            </span>

            <span className="">
            {t("roadmap.Issue")}<span className="colorText ps-1">{t("roadmap.NFT")}</span> {t("roadmap.parah19")}
            </span>
          </div>
          <img
            src={line}
            class="verticalMobileRule "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          />
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 roadMapMobileCardCol">
          <div
            class="roadmapMobileCard lightCard "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <span
              class="badge roadmapCardBadgeLight"
              data-aos="flip-left"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              95%
            </span>

            <span className="">
            {t("roadmap.parah20")}
              <span className="colorText ps-1">{t("roadmap.parah21")} </span>{t("roadmap.parah22")}
            </span>
          </div>
          <img
            src={line}
            class="verticalMobileRule "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          />
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 roadMapMobileCardCol">
          <div
            class="roadmapMobileCard "
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <span
              class="badge roadmapCardBadge"
              data-aos="flip-left"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              100%
            </span>
            <span className="">
            {t("roadmap.parah23")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
