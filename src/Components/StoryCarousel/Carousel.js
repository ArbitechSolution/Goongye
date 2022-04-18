import React from "react";
import Carousel from "react-bootstrap/Carousel";
import scene1 from "../../Assets/images/Scene-1.png";
import scene2 from "../../Assets/images/Scene-2.png";
import scene3 from "../../Assets/images/Scene-3.png";
import scene4 from "../../Assets/images/Scene-4.png";
import "./Carousel.css";
export default function StoryCarousel() {
  return (
    <div className="container-fluid carouselContainer  mt-5 mb-5">
      <Carousel>
        <Carousel.Item>
          <div className="container-staking-outside">
            <div className="container-staking">
              <img className="d-block w-100" src={scene1} alt="First slide" />
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center p-2">
            <div className="carouselDescripton">
              <h3 className="carouselHeading pe-2">Scene#1</h3>
              <p className="carouselPara">
                The Ape Goongye discusses war tactics with other Eastern
                countries to minimize casualties and end the conflict. However,
                some of the allies want the Ape Goongye to use his troops to
                wipe out an enemy camp.
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="container-staking-outside">
            <div className="container-staking">
              <img className="d-block w-100" src={scene1} alt="Second slide" />
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center p-2">
            <div className="carouselDescripton">
              <h3 className="carouselHeading pe-2">Scene#2</h3>
              <p className="carouselPara">
                The Ape Goongye and some of the allies entered a heated argument
                regarding violent tactics and securing the safety of civilians.
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="container-staking-outside">
            <div className="container-staking">
              <img className="d-block w-100" src={scene1} alt="Third slide" />
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center p-2">
            <div className="carouselDescripton">
              <h3 className="carouselHeading pe-2">Scene#3</h3>
              <p className="carouselPara">
                The Ape Goongye realizes that his allies want to destroy the
                Western countries and take over their territory. Since he is not
                a ruthless tyrant anymore, he decides to leave his position as a
                leader and left civilization.
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="container-staking-outside">
            <div className="container-staking">
              <img className="d-block w-100" src={scene4} alt="Fourth slide" />
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center p-2">
            <div className="carouselDescripton">
              <h3 className="carouselHeading pe-2">Scene#4</h3>
              <p className="carouselPara">
                Now, the Ape Goongye travels the world as a stranger that
                teaches men about peace and the sanctity of life. The Eastern
                and Western countries are in a constant war but the Ape Goongye
                decides to ignore the violence.
              </p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
