import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import LeftSidebar from "../component/sidebar/LeftSidebar";
import RightSidebar from "../component/sidebar/RightSidebar";

function Main() {
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col lg={3}>
            <LeftSidebar />
          </Col>

          <Col lg={6}>
            <Outlet />
          </Col>

          <Col lg={3}>
            <RightSidebar />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Main;
