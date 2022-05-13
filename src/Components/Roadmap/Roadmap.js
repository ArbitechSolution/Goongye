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
        Roadmap
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
              Open the website of the ape,
              <span className="colorText"> ‘Goongye’</span>
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
              Startfirst to third <span className="colorText"> pre-sale</span>
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
              <span className="colorText"> A prize draw</span> will be provided
              when the tickets are sold out for each of the first to third
              rounds.
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
              <span className="colorText">Start</span> a YouTube channel, blog,
              and sending to the press
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
              Airdrops (of) APE Goongye Printy Transportation Card to
              <span className="colorText ps-1">100 People</span>
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
              <span className="colorText"> Tokenomics</span> will be released
              after the 3rd pre-sale is completed
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
              Open
              <span className="colorText ps-1 pe-1">minting and staking</span>
              function (or Open the function of minting and staking)
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
              Purchase the
              <span className="colorText pe-1"> land of Sandbox</span>
              and Decentraland metaverse
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
              <span className="colorText"> Advertise on the billboard</span> of
              Yeongdeungpo Times Square
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
              Produce a logo song for
              <span className="colorText pe-1 ps-1">Goongye APE</span>
              (or Make a logo song for Gungye APE)
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
              Add <span className="colorText"> governance function</span> to the
              website
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
              We conduct
              <span className="colorText pe-1"> AMA on social networking</span>
              services such as YouTube, Telegram, and Kakao Talk.
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
              Open<span className="colorText"> ‘Maguni Game’</span>
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
              Issue<span className="colorText ps-1">3D NFT</span> to benefit
              holders (chain undecided)
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
              Hold an offline membership event for
              <span className="colorText ps-1">APE Goongye Club </span>at the
              end of the year
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
              Unveil a larger ecosystem expansion (Roadmap 2.0)
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
              Open the website of the ape,
              <span className="colorText"> ‘Goongye’</span>
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
              Startfirst to third <span className="colorText"> pre-sale</span>
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
              <span className="colorText"> Tokenomics</span> will be released
              after the 3rd pre-sale is completed
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
              <span className="colorText"> A prize draw</span> will be provided
              when the tickets are sold out for each of the first to third
              rounds.
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
              Airdrops (of) APE Goongye Printy Transportation Card to
              <span className="colorText ps-1">100 People</span>
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
              <span className="colorText">Start</span> a YouTube channel, blog,
              and sending to the press
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
              Purchase the
              <span className="colorText pe-1"> land of Sandbox</span>
              and Decentraland metaverse
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
              Open
              <span className="colorText ps-1 pe-1">minting and staking</span>
              function (or Open the function of minting and staking)
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
              <span className="colorText"> Advertise on the billboard</span> of
              Yeongdeungpo Times Square
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
              We conduct
              <span className="colorText pe-1">AMA on social networking</span>
              services such as YouTube, Telegram, and Kakao Talk.
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
              Produce a logo song for
              <span className="colorText pe-1 ps-1">Goongye APE</span>
              (or Make a logo song for Gungye APE)
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
              Add <span className="colorText"> governance function</span> to the
              website
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
              Open<span className="colorText"> ‘Maguni Game’</span>
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
              Issue<span className="colorText ps-1">3D NFT</span> to benefit
              holders (chain undecided)
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
              Unveil a larger ecosystem expansion (Roadmap 2.0)
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
              Hold an offline membership event for
              <span className="colorText ps-1">APE Goongye Club </span>at the
              end of the year
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
              Open the website of the ape,
              <span className="colorText"> ‘Goongye’</span>
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
              Startfirst to third <span className="colorText"> pre-sale</span>
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
              <span className="colorText"> A prize draw</span> will be provided
              when the tickets are sold out for each of the first to third
              rounds.
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
              <span className="colorText"> Tokenomics</span> will be released
              after the 3rd pre-sale is completed
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
              Airdrops (of) APE Goongye Printy Transportation Card to
              <span className="colorText ps-1">100 People</span>
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
              <span className="colorText">Start</span> a YouTube channel, blog,
              and sending to the press
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
              Open
              <span className="colorText ps-1 pe-1">minting and staking</span>
              function (or Open the function of minting and staking)
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
              Purchase the
              <span className="colorText pe-1"> land of Sandbox</span>
              and Decentraland metaverse
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
              <span className="colorText"> Advertise on the billboard</span> of
              Yeongdeungpo Times Square
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
              We conduct
              <span className="colorText pe-1"> AMA on social networking</span>
              services such as YouTube, Telegram, and Kakao Talk.
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
              Add <span className="colorText"> governance function</span> to the
              website
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
              Produce a logo song for
              <span className="colorText ps-1 pe-1">Goongye APE</span>
              (or Make a logo song for Gungye APE)
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
              Open<span className="colorText"> ‘Maguni Game’</span>
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
              Issue<span className="colorText ps-1">3D NFT</span> to benefit
              holders (chain undecided)
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
              Hold an offline membership event for
              <span className="colorText ps-1">APE Goongye Club </span>at the
              end of the year
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
              Unveil a larger ecosystem expansion (Roadmap 2.0)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
