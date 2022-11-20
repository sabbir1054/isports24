import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { football_news_id } from "../../../Shared/apikey";
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
            <Col lg={8}>
              <DateNavBar />
            </Col>
            <Col lg={4} className={`${styles.sidebar_bg} g-0`}>
              <Container>
                <SideBarNews id={football_news_id}></SideBarNews>{" "}
              </Container>
            </Col>
          </Row>
        </Container>
      </main>
      
    </div>
  );
};

export default Football;
