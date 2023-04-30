import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import QZone from "../qzon/QZone";
import imgLInk from "../../assets/cta-banner.png";
import { Link } from "react-router-dom";

function RightSidebar() {
  return (
    <div>
      <div className="my-5">
        <h4>Login with</h4>
        <div className="d-flex flex-column">
          <Button className="mb-2" variant="primary">
            Login with google
          </Button>
          <Button variant="primary">Login with github</Button>
        </div>
      </div>
      <div className="my-5">
        <h4>Find us</h4>
        <ListGroup>
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </div>
      <QZone />
      <Link to="/login" className="pt-5 d-block">
        <img src={imgLInk} alt="Lol" />
      </Link>
    </div>
  );
}

export default RightSidebar;
