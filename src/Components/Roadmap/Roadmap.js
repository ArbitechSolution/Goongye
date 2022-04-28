import React from "react";
import "./Roadmap.css";
import image1 from "../../Assets/images/18 1.png";
import image2 from "../../Assets/images/2 7233.png";
import arrow from "../../Assets/images/OBJECTS.png";
import line from "../../Assets/images/Line-8.png";
export default function Roadmap() {
  return (
    <div className="roadMapContainer pt-5 pb-5" id="roadmap">
      <h1 className="roadmapTitle">Roadmap</h1>
      {/* large view */}
      <div className="row roadmapRowContainer d-flex d-md-none d-lg-flex d-sm-none">
        <div className="col-sm-12 col-md-4 col-lg-4 roadMapCardCol">
          <div class="roadmapLargeCard">
            <hr className="dottedLine" />
            <span class="badge roadmapCardBadge">5%</span>
            <span class="">
              Open the website of the ape,
              <span className="colorText"> ‘Goongye’</span>
            </span>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 roadMapCardCol">
          <div class="roadmapLargeCard">
            <hr className="dottedLine" />
            <span class="badge roadmapCardBadge">10%</span>
            <span className="">
              Startfirst to third <span className="colorText"> pre-sale</span>
            </span>
          </div>
        </div>

        <div className="col-sm-12 col-md-4 col-lg-4 roadMapCardCol">
          <div class="roadmapLargeCard">
            <span class="badge roadmapCardBadge">15%</span>
            <span class="">
              <span className="colorText"> A prize draw</span> will be provided
              when the tickets are sold out for each of the first to third
              rounds.
            </span>
          </div>
          <img src={line} class="verticalRule" />
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 roadMapCardCol">
          <div class="roadmapLargeCard">
            <hr className="dottedLine" />

            <span class="badge roadmapCardBadge">40%</span>

            <span className="">
              <span className="colorText">Start</span> a YouTube channel, blog,
              and sending to the press
            </span>
          </div>
          <img src={line} class="verticalRule" />
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 roadMapCardCol">
          <div class="roadmapLargeCard lightCard">
            <hr className="dottedLine" />
            <span class="badge roadmapCardBadgeLight ">30%</span>

            <span className="">
              Airdrops (of) APE Goongye Printy Transportation Card to
              <span className="colorText ps-1">100 People</span>
            </span>
          </div>
        </div>

        <div className="col-sm-12 col-md-4 col-lg-4 roadMapCardCol">
          <div class="roadmapLargeCard">
            <span class="badge roadmapCardBadge">20%</span>

            <span className="">
              <span className="colorText"> Tokenomics</span> will be released
              after the 3rd pre-sale is completed
            </span>
          </div>
        </div>

        <div className="col-sm-12 col-md-4 col-lg-4 roadMapCardCol">
          <div class="roadmapLargeCard lightCard">
            <hr className="dottedLine" />
            <span className="">
              <span class="badge roadmapCardBadgeLight">45%</span>
              Open
              <span className="colorText ps-1 pe-1">minting and staking</span>
              function (or Open the function of minting and staking)
            </span>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 roadMapCardCol">
          <div class="roadmapLargeCard">
            <hr className="dottedLine" />
            <span class="badge roadmapCardBadge">50%</span>
            <span class="">
              Purchase the
              <span className="colorText pe-1"> land of Sandbox</span>
              and Decentraland metaverse
            </span>
          </div>
        </div>

        <div className="col-sm-12 col-md-4 col-lg-4 roadMapCardCol">
          <div class="roadmapLargeCard lightCard">
            <span class="badge roadmapCardBadgeLight">60%</span>
            <span className="">
              <span className="colorText"> Advertise on the billboard</span> of
              Yeongdeungpo Times Square
            </span>
          </div>
          <img src={line} class="verticalRule" />
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 roadMapCardCol">
          <div class="roadmapLargeCard lightCard">
            <hr className="dottedLine" />
            <span class="badge roadmapCardBadgeLight">80%</span>

            <span className="">
              Produce a logo song for
              <span className="colorText pe-1 ps-1">Goongye APE</span>
              (or Make a logo song for Gungye APE)
            </span>
          </div>
          <img src={line} class="verticalRule" />
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 roadMapCardCol">
          <div class="roadmapLargeCard lightCard">
            <hr className="dottedLine" />
            <span class="badge roadmapCardBadgeLight">75%</span>

            <span class="">
              Add <span className="colorText"> governance function</span> to the
              website
            </span>
          </div>
        </div>

        <div className="col-sm-12 col-md-4 col-lg-4 roadMapCardCol">
          <div class="roadmapLargeCard">
            <span class="badge roadmapCardBadge">70%</span>

            <span className="">
              We conduct
              <span className="colorText pe-1"> AMA on social networking</span>
              services such as YouTube, Telegram, and Kakao Talk.
            </span>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 roadMapCardCol">
          <div class="roadmapLargeCard">
            <hr className="dottedLine" />
            <span class="badge roadmapCardBadge">85%</span>

            <span className="">
              Open<span className="colorText"> ‘Maguni Game’</span>
            </span>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 roadMapCardCol">
          <div class="roadmapLargeCard lightCard">
            <hr className="dottedLine" />
            <span class="badge roadmapCardBadgeLight">90%</span>

            <span className="">
              Issue<span className="colorText ps-1">3D NFT</span> to benefit
              holders (chain undecided)
            </span>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 roadMapCardCol">
          <div class="roadmapLargeCard lightCard">
            <span class="badge roadmapCardBadgeLight">95%</span>

            <span className="">
              Hold an offline membership event for
              <span className="colorText ps-1">APE Goongye Club </span>at the
              end of the year
            </span>
          </div>
          <img src={line} class="verticalRule" />
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 roadMapCardCol">
          <div class="roadmapLargeCard">
            <hr className="dotted100Line" />
            <span class="badge roadmapCardBadge">100%</span>
            <span className="">
              Unveil a larger ecosystem expansion (Roadmap 2.0)
            </span>
          </div>
        </div>
      </div>
      {/* <div className="row roadmapRowContainer d-flex d-md-none d-lg-flex d-sm-none">
        <div className="col-12">
          <div class="roadmapLargeCard">
            <span class="badge roadmapCardBadge">100%</span>
            <span className="">
              Unveil a larger ecosystem expansion (Roadmap 2.0)
            </span>
          </div>
        </div>
      </div> */}
      {/* mid level view */}
      <div className="row roadmapRowContainer d-none d-md-flex d-lg-none d-sm-none">
        <div className="col-sm-6 col-md-6 col-lg-6 roadMapCardCol">
          <div class="roadmapTabletCard">
            <span class="badge roadmapCardBadge">5%</span>
            <hr className="dottedTabletLine" />
            <span class="">
              Open the website of the ape,
              <span className="colorText"> ‘Goongye’</span>
            </span>
          </div>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-6 roadMapCardCol">
          <div class="roadmapTabletCard">
            <span class="badge roadmapCardBadge">10%</span>
            <span className="">
              Startfirst to third <span className="colorText"> pre-sale</span>
            </span>
          </div>
          <img src={line} class="verticalRule" />
        </div>
        <div className="col-sm-6 col-md-6 col-lg-6 roadMapCardCol">
          <div class="roadmapTabletCard">
            <span class="badge roadmapCardBadge">20%</span>
            <hr className="dottedTabletLine" />
            <span className="">
              <span className="colorText"> Tokenomics</span> will be released
              after the 3rd pre-sale is completed
            </span>
          </div>
          <img src={line} class="verticalRule" />
        </div>
        <div className="col-sm-6 col-md-6 col-lg-6 roadMapCardCol">
          <div class="roadmapTabletCard">
            <span class="badge roadmapCardBadge">15%</span>
            <span class="">
              <span className="colorText"> A prize draw</span> will be provided
              when the tickets are sold out for each of the first to third
              rounds.
            </span>
          </div>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-6 roadMapCardCol">
          <div class="roadmapTabletCard lightCard">
            <span class="badge roadmapCardBadgeLight">30%</span>
            <hr className="dottedTabletLine" />
            <span className="">
              Airdrops (of) APE Goongye Printy Transportation Card to
              <span className="colorText ps-1">100 People</span>
            </span>
          </div>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-6 roadMapCardCol">
          <div class="roadmapTabletCard">
            <span class="badge roadmapCardBadge">40%</span>
            <span className="">
              <span className="colorText">Start</span> a YouTube channel, blog,
              and sending to the press
            </span>
          </div>
          <img src={line} class="verticalRule" />
        </div>
        <div className="col-sm-6 col-md-6 col-lg-6 roadMapCardCol">
          <div class="roadmapTabletCard">
            <span class="badge roadmapCardBadge">50%</span>
            <hr className="dottedTabletLine" />
            <span class="">
              Purchase the
              <span className="colorText pe-1"> land of Sandbox</span>
              and Decentraland metaverse
            </span>
          </div>
          <img src={line} class="verticalRule" />
        </div>
        <div className="col-sm-6 col-md-6 col-lg-6 roadMapCardCol">
          <div class="roadmapTabletCard lightCard">
            <span className="">
              <span class="badge roadmapCardBadgeLight">45%</span>
              Open
              <span className="colorText ps-1 pe-1">minting and staking</span>
              function (or Open the function of minting and staking)
            </span>
          </div>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-6 roadMapCardCol">
          <div class="roadmapTabletCard lightCard">
            <span class="badge roadmapCardBadgeLight">60%</span>
            <hr className="dottedTabletLine" />
            <span className="">
              <span className="colorText"> Advertise on the billboard</span> of
              Yeongdeungpo Times Square
            </span>
          </div>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-6 roadMapCardCol">
          <div class="roadmapTabletCard">
            <span class="badge roadmapCardBadge">70%</span>
            <span className="">
              We conduct
              <span className="colorText pe-1">AMA on social networking</span>
              services such as YouTube, Telegram, and Kakao Talk.
            </span>
          </div>
          <img src={line} class="verticalRule" />
        </div>
        <div className="col-sm-6 col-md-6 col-lg-6 roadMapCardCol">
          <div class="roadmapTabletCard lightCard">
            <span class="badge roadmapCardBadgeLight">80%</span>
            <hr className="dottedTabletLine" />
            <span className="">
              Produce a logo song for
              <span className="colorText pe-1 ps-1">Goongye APE</span>
              (or Make a logo song for Gungye APE)
            </span>
          </div>
          <img src={line} class="verticalRule" />
        </div>
        <div className="col-sm-6 col-md-6 col-lg-6 roadMapCardCol">
          <div class="roadmapTabletCard lightCard">
            <span class="badge roadmapCardBadgeLight">75%</span>
            <span class="">
              Add <span className="colorText"> governance function</span> to the
              website
            </span>
          </div>
        </div>

        <div className="col-sm-6 col-md-6 col-lg-6 roadMapCardCol">
          <div class="roadmapTabletCard">
            <span class="badge roadmapCardBadge">85%</span>
            <hr className="dottedTabletLine" />
            <span className="">
              Open<span className="colorText"> ‘Maguni Game’</span>
            </span>
          </div>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-6 roadMapCardCol">
          <div class="roadmapTabletCard lightCard">
            <span class="badge roadmapCardBadgeLight">90%</span>
            <span className="">
              Issue<span className="colorText ps-1">3D NFT</span> to benefit
              holders (chain undecided)
            </span>
          </div>
          <img src={line} class="verticalRule" />
        </div>
        <div className="col-sm-6 col-md-6 col-lg-6 roadMapCardCol">
          <div class="roadmapTabletCard">
            <span class="badge roadmapCardBadge">100%</span>
            <hr className="dottedTabletLine" />
            <span className="">
              Unveil a larger ecosystem expansion (Roadmap 2.0)
            </span>
          </div>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-6 roadMapCardCol">
          <div class="roadmapTabletCard lightCard">
            <span class="badge roadmapCardBadgeLight">95%</span>

            <span className="">
              Hold an offline membership event for
              <span className="colorText ps-1">APE Goongye Club </span>at the
              end of the year
            </span>
          </div>
        </div>
      </div>

      {/* mobile view */}

      <div className="row roadmapRowContainer d-flex d-md-none d-lg-none d-sm-flex">
        <div className="col-sm-12 col-md-4 col-lg-4 roadMapCardCol">
          <div class="roadmapMobileCard">
            <span class="badge roadmapCardBadge">5%</span>
            <span class="">
              Open the website of the ape,
              <span className="colorText"> ‘Goongye’</span>
            </span>
          </div>
          <img src={line} class="verticalRule" />
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 roadMapCardCol">
          <div class="roadmapMobileCard">
            <span class="badge roadmapCardBadge">10%</span>
            <span className="">
              Startfirst to third <span className="colorText"> pre-sale</span>
            </span>
          </div>
          <img src={line} class="verticalRule" />
        </div>

        <div className="col-sm-12 col-md-4 col-lg-4 roadMapCardCol">
          <div class="roadmapMobileCard">
            <span class="badge roadmapCardBadge">15%</span>

            <span class="">
              <span className="colorText"> A prize draw</span> will be provided
              when the tickets are sold out for each of the first to third
              rounds.
            </span>
          </div>
          <img src={line} class="verticalRule" />
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 roadMapCardCol">
          <div class="roadmapMobileCard">
            <span class="badge roadmapCardBadge">20%</span>

            <span className="">
              <span className="colorText"> Tokenomics</span> will be released
              after the 3rd pre-sale is completed
            </span>
          </div>
          <img src={line} class="verticalRule" />
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 roadMapCardCol">
          <div class="roadmapMobileCard lightCard">
            <span class="badge roadmapCardBadgeLight">30%</span>

            <span className="">
              Airdrops (of) APE Goongye Printy Transportation Card to
              <span className="colorText ps-1">100 People</span>
            </span>
          </div>
          <img src={line} class="verticalRule" />
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 roadMapCardCol">
          <div class="roadmapMobileCard">
            <span class="badge roadmapCardBadge">40%</span>
            <span className="">
              <span className="colorText">Start</span> a YouTube channel, blog,
              and sending to the press
            </span>
          </div>
          <img src={line} class="verticalRule" />
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 roadMapCardCol">
          <div class="roadmapMobileCard lightCard">
            <span className="">
              <span class="badge roadmapCardBadgeLight">45%</span>
              Open
              <span className="colorText ps-1 pe-1">minting and staking</span>
              function (or Open the function of minting and staking)
            </span>
          </div>
          <img src={line} class="verticalRule" />
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 roadMapCardCol">
          <div class="roadmapMobileCard">
            <span class="badge roadmapCardBadge">50%</span>

            <span class="">
              Purchase the
              <span className="colorText pe-1"> land of Sandbox</span>
              and Decentraland metaverse
            </span>
          </div>
          <img src={line} class="verticalRule" />
        </div>

        <div className="col-sm-12 col-md-4 col-lg-4 roadMapCardCol">
          <div class="roadmapMobileCard lightCard">
            <span class="badge roadmapCardBadgeLight">60%</span>

            <span className="">
              <span className="colorText"> Advertise on the billboard</span> of
              Yeongdeungpo Times Square
            </span>
          </div>
          <img src={line} class="verticalRule" />
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 roadMapCardCol">
          <div class="roadmapMobileCard">
            <span class="badge roadmapCardBadge">70%</span>

            <span className="">
              We conduct
              <span className="colorText pe-1"> AMA on social networking</span>
              services such as YouTube, Telegram, and Kakao Talk.
            </span>
          </div>
          <img src={line} class="verticalRule" />
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 roadMapCardCol">
          <div class="roadmapMobileCard lightCard">
            <span class="badge roadmapCardBadgeLight">75%</span>

            <span class="">
              Add <span className="colorText"> governance function</span> to the
              website
            </span>
          </div>
          <img src={line} class="verticalRule" />
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 roadMapCardCol">
          <div class="roadmapMobileCard lightCard">
            <span class="badge roadmapCardBadgeLight">80%</span>

            <span className="">
              Produce a logo song for
              <span className="colorText ps-1 pe-1">Goongye APE</span>
              (or Make a logo song for Gungye APE)
            </span>
          </div>
          <img src={line} class="verticalRule" />
        </div>

        <div className="col-sm-12 col-md-4 col-lg-4 roadMapCardCol">
          <div class="roadmapMobileCard">
            <span class="badge roadmapCardBadge">85%</span>

            <span className="">
              Open<span className="colorText"> ‘Maguni Game’</span>
            </span>
          </div>
          <img src={line} class="verticalRule" />
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 roadMapCardCol">
          <div class="roadmapMobileCard lightCard">
            <span class="badge roadmapCardBadgeLight">90%</span>

            <span className="">
              Issue<span className="colorText ps-1">3D NFT</span> to benefit
              holders (chain undecided)
            </span>
          </div>
          <img src={line} class="verticalRule" />
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 roadMapCardCol">
          <div class="roadmapMobileCard lightCard">
            <span class="badge roadmapCardBadgeLight">95%</span>

            <span className="">
              Hold an offline membership event for
              <span className="colorText ps-1">APE Goongye Club </span>at the
              end of the year
            </span>
          </div>
          <img src={line} class="verticalRule" />
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 roadMapCardCol">
          <div class="roadmapMobileCard">
            <span class="badge roadmapCardBadge">100%</span>
            <span className="">
              Unveil a larger ecosystem expansion (Roadmap 2.0)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
