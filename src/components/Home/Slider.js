import { Button } from "@mui/material";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Slider = () => {
  return (
    <div className="bw-hero_slider">
      <div class="bw-hero_img text-text-right">
        <Container fluid>
          <Row className="m-auto w-100">
            <Col md={6} lg={8} sm={12}></Col>
            <Col md={6} lg={4} sm={12}>
              <h1>Fine Jewelry</h1>
              <p>The joy of Wearing Best</p>
              <Button
                style={{
                  backgroundColor: "#000",
                }}
                variant="outlined-dark"
                size="large"
              >
                Shop Fine Jewelry
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Slider;
