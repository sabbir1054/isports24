import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NavigationBar from "../../../Shared/Navbar/NavigationBar";
import DateNavBar from "../Football/DateNavbar/DateNavBar";
import SideBarNews from "../SideBarNews/SideBarNews";
import styles from "./Cricket.module.css";

const Cricket = () => {
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
      This is home page
    </div>
  );
};

export default Cricket;

/* 
Date time section
Live match section=> when i click on live match it gives me details about that


*/