import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NavigationBar from "../Shared/Navbar/NavigationBar";
import RunningMatch from "./Components/RunningMatch/RunningMatch";
import SideBarNews from "./Components/SideBarNews/SideBarNews";
import UpComing from "./Components/UpComing/UpComing";
import styles from "./Home.module.css";
const HomePage = () => {
  return (
    <>
      <NavigationBar />
      <UpComing />
      <main className={`${styles.main_section}`}>
      <Row className="w-100 g-0">
        <Col md={8} className={`g-0`}>
          <RunningMatch></RunningMatch>
        </Col>
        <Col md={4} className={`${styles.sidebar_bg} g-0`}>
          <Container>
            <SideBarNews></SideBarNews>
          </Container>
        </Col>
      </Row>
      </main>
      This is home page 
    </>
  );
};

export default HomePage;
