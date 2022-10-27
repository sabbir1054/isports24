import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../RunningMatch.module.css";

const LiveScore = () => {
  return (
    <Container className={` ${styles.liveScore_wrapper}`}>
      <div>
        <h2 className="text-center pb-3">Live Score</h2>
        <div className={`${styles.teamName}`}>
          <h3 className="text-center">
            Bangladesh <span className={styles.vs_style}> VS </span> South
            Africa
          </h3>
        </div>
        <Row>
          <Col md={6}>
            <h4>Bangladesh *</h4>
          </Col>
          <Col md={6}>
            <h2 className="text-center "> 172 / 2</h2>
          </Col>
        </Row>
        <hr className="text-white" />
        <Row>
          <Col md={6}>
            <h4>South Africa </h4>
          </Col>
          <Col md={6}>
            <p className="text-center text-white"> Not yet bating</p>
          </Col>
        </Row>
        <p className="text-secondary">
          South Africa won the toss and choose to bowl*
        </p>
        <div className={`${styles.over}  text-white`}>
          <p className="fs-5">This over : 4 2 3 w 2 0</p>
        </div>
      </div>
    </Container>
  );
};

export default LiveScore;
