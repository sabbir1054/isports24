import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { cricket_news_id } from "../../../Shared/apikey";
import NavigationBar from "../../../Shared/Navbar/NavigationBar";
import DateNavBar from "../Football/DateNavbar/DateNavBar";
import SideBarNews from "../SideBarNews/SideBarNews";
import styles from "./Cricket.module.css";
import DateNavCricket from "./DateNavCricket/DateNavCricket";

const Cricket = () => {
  return (
    <div className={styles.wrapper}>
      <NavigationBar />
      <hr className="text-white" />
      <main className={`${styles.main_section}`}>
        <Container>
          <Row className="w-100 g-0">
            <Col lg={8}>
              <DateNavCricket/>
            </Col>
            <Col lg={4} className={`${styles.sidebar_bg} g-0`}>
              <Container>
                <SideBarNews id={cricket_news_id}></SideBarNews>{" "}
              </Container>
            </Col>
          </Row>
        </Container>
      </main>
    
    </div>
  );
};

export default Cricket;

/* 
Date time section
Live match section=> when i click on live match it gives me details about that


*/
