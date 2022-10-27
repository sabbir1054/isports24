import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from './SideBarNews.module.css'

const SideBarNews = () => {
  return (
    <div className={`${styles.latestNews_wrapper}`}>
      <h2 className="text-center p-2">Latest News</h2>
      <Container>
        <Row className={styles.singleNews}>
          <Col md={3}>
            <img src="/assets/photos/p1.png" alt="" srcset="" className="img-fluid" />
          </Col>
          <Col md={9}>
            <h4>
              We turned to slogging, that's not our game: Bangladesh batting
              coach Jamie Siddons
            </h4>
            <p className="text-secondary">
              Siddons said that the batters need to be 'smarter' and play to
              their strengths after the side suffered a crushing 104-run loss to
              South Africa
            </p>
          </Col>
        </Row>
        <Row className={styles.singleNews}>
          <Col md={3}>
            <img src="/assets/photos/p2.png" alt="" srcset="" className="img-fluid" />
          </Col>
          <Col md={9}>
            <h4>
              We turned to slogging, that's not our game: Bangladesh batting
              coach Jamie Siddons
            </h4>
            <p className="text-secondary">
              Siddons said that the batters need to be 'smarter' and play to
              their strengths after the side suffered a crushing 104-run loss to
              South Africa
            </p>
          </Col>
        </Row>
        <Row className={styles.singleNews}>
          <Col md={3}>
            <img src="/assets/photos/p3.png" alt="" srcset="" className="img-fluid" />
          </Col>
          <Col md={9}>
            <h4>
              We turned to slogging, that's not our game: Bangladesh batting
              coach Jamie Siddons
            </h4>
            <p className="text-secondary">
              Siddons said that the batters need to be 'smarter' and play to
              their strengths after the side suffered a crushing 104-run loss to
              South Africa
            </p>
          </Col>
        </Row>
        <Row className={styles.singleNews}>
          <Col md={3}>
            <img src="/assets/photos/p1.png" alt="" srcset="" className="img-fluid" />
          </Col>
          <Col md={9}>
            <h4>
              We turned to slogging, that's not our game: Bangladesh batting
              coach Jamie Siddons
            </h4>
            <p className="text-secondary">
              Siddons said that the batters need to be 'smarter' and play to
              their strengths after the side suffered a crushing 104-run loss to
              South Africa
            </p>
          </Col>
        </Row>
        <Row className={styles.singleNews}>
          <Col md={3}>
            <img src="/assets/photos/p2.png" alt="" srcset="" className="img-fluid" />
          </Col>
          <Col md={9}>
            <h4>
              We turned to slogging, that's not our game: Bangladesh batting
              coach Jamie Siddons
            </h4>
            <p className="text-secondary">
              Siddons said that the batters need to be 'smarter' and play to
              their strengths after the side suffered a crushing 104-run loss to
              South Africa
            </p>
          </Col>
        </Row>
        <Row className={styles.singleNews}>
          <Col md={3}>
            <img src="/assets/photos/p3.png" alt="" srcset="" className="img-fluid" />
          </Col>
          <Col md={9}>
            <h4>
              We turned to slogging, that's not our game: Bangladesh batting
              coach Jamie Siddons
            </h4>
            <p className="text-secondary">
              Siddons said that the batters need to be 'smarter' and play to
              their strengths after the side suffered a crushing 104-run loss to
              South Africa
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SideBarNews;
