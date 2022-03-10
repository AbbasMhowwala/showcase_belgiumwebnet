import { Button } from "@mui/material";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const RingBuilderHome = () => {
  return (
    <div className="bw-ringbuilder_home">
      <Container className="bw-custom_home_container mt-3">
        <Row className="w-100 m-auto">
          <Col>
            <div className="bw-ringbuilder_top_head mb-5 mb-md-2">
              <h2>Create Your Own</h2>
              <p>Diamond Ring</p>
            </div>
          </Col>
        </Row>
        <Row className="w-100 m-auto justify-content-center">
          <Col xl={6} lg={6} md={12} sm={12} xs={12}>
            <div className="bw-diamonds_ring">
              <div className="w-100 align-items-center justify-content-center mt-5 mt-md-4 mr-0 ml-0 row">
                <div className="p-0 col-md-5 col-sm-12 col-12">
                  <div className="bw-diamonds_ring_content text-center">
                    <h2>Step 1</h2>
                    <p>Choose a setting</p>
                    <Image src="https://showcase.belgiumwebnet.com/static/media/ring-setting.95381952.png" alt="ring setting" />
                    <Button
                variant="outlined"
                size="large"
              >
                Start with a Setting
              </Button>
                  </div>
                </div>
                <div className="col-md-2 col-sm-12 col-12">
                  <div className="bw-diamonds_ring_add_content text-center">
                    <h3>+</h3>
                  </div>
                </div>
                <div className="p-0 col-md-5 col-sm-12 col-12">
                  <div className="bw-diamonds_ring_content text-center">
                    <h2>Step 2</h2>
                    <p>choose a diamond</p>
                    <Image src="https://showcase.belgiumwebnet.com/static/media/setting-diamonds.74add1f3.png" />
                    <Button
                variant="outlined"
                size="large"
              >
                      start with a diamond
                     </Button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={1} lg={2} md={12} sm={12} xs={12}>
            <div class="bw-diamonds_ring_equal d-flex align-items-center justify-content-center position-relative h-100">
              <h3>=</h3>
            </div>
          </Col>
          <Col xl={4} lg={4} md={12} sm={12} xs={12}>
            <div class="bw-diamonds_ring_final">
              <Image
                src="https://showcase.belgiumwebnet.com/static/media/final-ring.1b9b668c.png"
                alt="diamond"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RingBuilderHome;
