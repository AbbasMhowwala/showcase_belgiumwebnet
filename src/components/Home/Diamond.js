import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Diamond = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Container className="bw-custom_home_container mt-3">
        <Row>
          <Col>
            <div className="bw-collection1_title">
              <h2>Shop Diamonds By Shape</h2>
            </div>
          </Col>
        </Row>
        <Slider {...settings}>
          <div className="bw-shop_by_diamond_box_main">
            <div className="bw-shop_by_diamond_box_img">
              <div className="bw-shop_by_diamond_box_img_size">
                <Image
                  src="https://showcase.belgiumwebnet.com/static/media/heart.513e53df.svg"
                  alt="Heart"
                  className="bw-shop_by_diamond_box_img_static"
                />
              </div>
              <h3> Heart</h3>
            </div>
            <div className="bw-shop_by_diamond_box_text">
              <p>A rare cut that is a true testament of your relationship.</p>
              <Button className="bw-p_btn btn btn-primary">
                Shop Heart diamonds
              </Button>
            </div>
          </div>
          <div className="bw-shop_by_diamond_box_main">
            <div className="bw-shop_by_diamond_box_img">
              <div className="bw-shop_by_diamond_box_img_size">
                <Image
                  src="https://showcase.belgiumwebnet.com/static/media/heart.513e53df.svg"
                  alt="Heart"
                  className="bw-shop_by_diamond_box_img_static"
                />
              </div>
              <h3> Heart</h3>
            </div>
            <div className="bw-shop_by_diamond_box_text">
              <p>A rare cut that is a true testament of your relationship.</p>
              <Button className="bw-p_btn btn btn-primary">
                Shop Heart diamonds
              </Button>
            </div>
          </div>
          <div className="bw-shop_by_diamond_box_main">
            <div className="bw-shop_by_diamond_box_img">
              <div className="bw-shop_by_diamond_box_img_size">
                <Image
                  src="https://showcase.belgiumwebnet.com/static/media/heart.513e53df.svg"
                  alt="Heart"
                  className="bw-shop_by_diamond_box_img_static"
                />
              </div>
              <h3> Heart</h3>
            </div>
            <div className="bw-shop_by_diamond_box_text">
              <p>A rare cut that is a true testament of your relationship.</p>
              <Button className="bw-p_btn btn btn-primary">
                Shop Heart diamonds
              </Button>
            </div>
          </div>
          <div className="bw-shop_by_diamond_box_main">
            <div className="bw-shop_by_diamond_box_img">
              <div className="bw-shop_by_diamond_box_img_size">
                <Image
                  src="https://showcase.belgiumwebnet.com/static/media/heart.513e53df.svg"
                  alt="Heart"
                  className="bw-shop_by_diamond_box_img_static"
                />
              </div>
              <h3> Heart</h3>
            </div>
            <div className="bw-shop_by_diamond_box_text">
              <p>A rare cut that is a true testament of your relationship.</p>
              <Button className="bw-p_btn btn btn-primary">
                Shop Heart diamonds
              </Button>
            </div>
          </div>
          <div className="bw-shop_by_diamond_box_main">
            <div className="bw-shop_by_diamond_box_img">
              <div className="bw-shop_by_diamond_box_img_size">
                <Image
                  src="https://showcase.belgiumwebnet.com/static/media/heart.513e53df.svg"
                  alt="Heart"
                  className="bw-shop_by_diamond_box_img_static"
                />
              </div>
              <h3> Heart</h3>
            </div>
            <div className="bw-shop_by_diamond_box_text">
              <p>A rare cut that is a true testament of your relationship.</p>
              <Button className="bw-p_btn btn btn-primary">
                Shop Heart diamonds
              </Button>
            </div>
          </div>
        </Slider>
      </Container>
    </div>
  );
};

export default Diamond;
