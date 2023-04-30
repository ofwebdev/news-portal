import React from "react";
import Header from "../component/header/Header";
import { Col, Container, Row } from "react-bootstrap";
import RightSidebar from "../component/sidebar/RightSidebar";
import { Outlet } from "react-router-dom";

function NewsLayout() {
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col lg={9}>
            <Outlet></Outlet>
          </Col>
          <Col lg={3}>
            <RightSidebar />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NewsLayout;
