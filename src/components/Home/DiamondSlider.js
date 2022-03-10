import React from "react";
import { Image } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DiamondSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className="bw-custom_home_container mt-3 m-auto">
      <Slider {...settings}>
        <div>
          <div className="bw-ringstyle-content">
            <Image
            className="diamond-image"
              src="https://showcase.belgiumwebnet.com/static/media/solitaire_ring.998440aa.png"
              alt="Solitaire"
            />
            <h2>Solitaire</h2>
          </div>
        </div>
        <div>
        <div className="bw-ringstyle-content">
            <Image
            className="diamond-image"
              src="https://showcase.belgiumwebnet.com/static/media/pave_ring.cdcc56c6.png"
              alt="Pave"
            />
            <h2>Pave</h2>
          </div>
        </div>
        <div>
        <div className="bw-ringstyle-content">
            <Image
            className="diamond-image"
              src="https://showcase.belgiumwebnet.com/static/media/halo_ring.d5cf5271.png"
              alt="Pave"
            />
            <h2>Pave</h2>
          </div>
        </div>
        <div>
        <div className="bw-ringstyle-content">
            <Image
            className="diamond-image"
              src="https://showcase.belgiumwebnet.com/static/media/three_stone_ring.c2f849ba.png"
              alt="Three Stone"
            />
            <h2>Three Stone</h2>
          </div>
        </div>
        <div>
        <div className="bw-ringstyle-content">
            <Image
            className="diamond-image"
              src="https://showcase.belgiumwebnet.com/static/media/single_row_ring.710aebc0.png"
              alt="Channel Set"
            />
            <h2>Channel Set</h2>
          </div>
        </div>
        <div>
        <div className="bw-ringstyle-content">
            <Image
            className="diamond-image"
              src="https://showcase.belgiumwebnet.com/static/media/multirow_ring.570a2f57.png"
              alt="Multirow"
            />
            <h2>Multirow</h2>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default DiamondSlider;
