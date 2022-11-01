import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NavigationBar from "../../../Shared/Navbar/NavigationBar";
import SideBarNews from "../SideBarNews/SideBarNews";
import DateNavBar from "./DateNavbar/DateNavBar";
import styles from "./Football.module.css";
const Football = () => {
  return (
    <div className={styles.wrapper}>
      <NavigationBar />
      <hr className="text-white" />
      <main className={`${styles.main_section}`}>
        <Container>
          <Row className="w-100 g-0">
            <Col md={8}>
              <DateNavBar />
            </Col>
            <Col md={4} className={`${styles.sidebar_bg} g-0`}>
              <Container>
                <SideBarNews></SideBarNews>{" "}
              </Container>
            </Col>
          </Row>
        </Container>
      </main>
      
    </div>
  );
};

export default Football;
