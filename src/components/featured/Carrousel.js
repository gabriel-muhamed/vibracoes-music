import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import slide_one from "../../resources/images/slide_one.jpg";
import slide_two from "../../resources/images/slide_two.jpg";
import slide_three from "../../resources/images/slide_three.jpg";
import slide_one_mobile from "../../resources/images/mobile_slides/slide_one_mobile.jpg";
import slide_two_mobile from "../../resources/images/mobile_slides/slide_two_mobile.jpg";
import slide_three_mobile from "../../resources/images/mobile_slides/slide_three_mobile.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carrousel = () => {
  const [slideOneImage, setSlideOneImage] = useState(slide_one);
  const [slideTwoImage, setSlideTwoImage] = useState(slide_two);
  const [slideThreeImage, setSlideThreeImage] = useState(slide_three);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlideOneImage(slide_one_mobile);
        setSlideTwoImage(slide_two_mobile);
        setSlideThreeImage(slide_three_mobile);
      } else {
        setSlideOneImage(slide_one);
        setSlideTwoImage(slide_two);
        setSlideThreeImage(slide_three);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
  };

  return (
    <div
      className="carrousel_wrapper"
      style={{ height: `${window.innerHeight}px` }}
    >
      <Slider {...settings}>
        <div>
          <div
            className="carrousel_image"
            style={{
              backgroundImage: `url(${slideOneImage})`,
              height: `${window.innerHeight}px`,
            }}
          ></div>
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              backgroundImage: `url(${slideTwoImage})`,
              height: `${window.innerHeight}px`,
            }}
          ></div>
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              backgroundImage: `url(${slideThreeImage})`,
              height: `${window.innerHeight}px`,
            }}
          ></div>
        </div>
      </Slider>
    </div>
  );
};

export default Carrousel;
