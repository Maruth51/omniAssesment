import React, { Fragment } from "react";
import Image from "react-bootstrap/Image";
import { Container, Row, Col } from "reactstrap";

const CardModule = () => {
  return (
    <Fragment>
      <Container>
        <Row>
          <Col>
            <Image src="" roundedCircle />
          </Col>
          <Col>Module Name</Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default CardModule;
