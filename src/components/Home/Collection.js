import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Collection = () => {
  return (
    <div className="bw-collection_section1 bw-collection_section1_desk">
      <Container className="bw-custom_home_container mt-3">
        <Row>
          <Col>
            <div className="bw-collection1_title">
              <h2> EXPLORE OUR COLLECTION </h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div className="bw-exp_collection_main">
              <ul>
                <li>
                  <div className="bw-collection1_box_img bw-collection_height">
                   <Image
                      src="https://showcase.belgiumwebnet.com/static/media/ring.e5c7031c.png"
                      alt="shop-ring"
                      title="shop-ring"
                    />
                    <div className="bw-collection1_box_btn bw-collection1_btn_hover">
                      <button
                        type="button"
                        className="bw-fill_button bw-btn_rd-0 bw-btn_bw-btn_shadow btn btn-primary"
                      >
                        <Link to="jewelry/fashion-rings"> Shop RINGS</Link>
                      </button>
                    </div>
                  </div>
                  <div className="bw-collection1_box_btn">
                    <h2> Rings </h2>
                  </div>
                </li>
                <li>
                  <div className="bw-collection1_box_img bw-collection_height">
                    <Image
                      src="https://showcase.belgiumwebnet.com/static/media/necklace.78539eb3.png"
                      alt="shop-necklace"
                      title="shop-necklace"
                    />
                    <div className="bw-collection1_box_btn bw-collection1_btn_hover">
                      <button
                        type="button"
                        className="bw-fill_button bw-btn_rd-0 bw-btn_bw-btn_shadow btn btn-primary"
                      >
                        <Link to="jewelry/necklaces"> shop NECKLACES </Link>
                      </button>
                    </div>
                  </div>
                  <div className="bw-collection1_box_btn">
                    <h2> Necklaces </h2>
                  </div>
                </li>
                <li>
                  <div className="bw-collection1_box_img bw-collection_height">
                    <Image
                      src="https://showcase.belgiumwebnet.com/static/media/earring.236b7d8a.png"
                      alt="shop-earring"
                      title="shop-earring"
                    />
                    <div className="bw-collection1_box_btn bw-collection1_btn_hover">
                      <button
                        type="button"
                        className="bw-fill_button bw-btn_rd-0 bw-btn_bw-btn_shadow btn btn-primary"
                      >
                        <Link to="jewelry/earrings"> Shop Earrings </Link>
                      </button>
                    </div>
                  </div>
                  <div className="bw-collection1_box_btn">
                    <h2> Earrings </h2>
                  </div>
                </li>
                <li>
                  <div className="bw-collection1_box_img bw-collection_height">
                    <Image
                      src="https://showcase.belgiumwebnet.com/static/media/bracelet1.03659fb8.png"
                      alt="shop-bracelet"
                      title="shop-bracelet"
                    />
                    <div className="bw-collection1_box_btn bw-collection1_btn_hover">
                      <button
                        type="button"
                        className="bw-fill_button bw-btn_rd-0 bw-btn_bw-btn_shadow btn btn-primary"
                      >
                        <Link to="jewelry/bracelets"> shop BRACELETS </Link>
                      </button>
                    </div>
                  </div>
                  <div className="bw-collection1_box_btn">
                    <h2> Bracelets </h2>
                  </div>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Collection;
