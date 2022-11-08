import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import NavigationBar from "../Shared/Navbar/NavigationBar";
import Commentary from "./Commentary";
import Event from "./Event";
import styles from "./FMatchDetails.module.css";
import Info from "./Info";
import Table from "./Table";
import Team from "./Team";
const FMatchDetails = () => {
  const history = useNavigate();
  const location = useLocation();
  const eid = location.pathname.split("=")[1].split("-")[0];
  const tabName = location.pathname.split("=")[1].split("-")[1];

  const changePage = (tabName) => {
    history(`/football/matchDetails/eid=${eid}-${tabName}`);
  };
  return (
    <div className={`${styles.fmatchDetails_wrapper}`}>
      <NavigationBar />
      <hr className="text-white" />

      <Container>
        <div className="setion for match score "></div>
        {/* Match Navigation */}
        <Row className="w-100 g-0">
          <Col md={8}>
            <div className="match-navigation">
              <Nav variant="tabs" defaultActiveKey={tabName}>
                <Nav.Item onClick={() => changePage("info")}>
                  <Nav.Link eventKey="info" className="text-white">
                    Info
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item onClick={() => changePage("event")}>
                  <Nav.Link eventKey="event" className="text-white">
                    Event
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item onClick={() => changePage("commentary")}>
                  <Nav.Link eventKey="commentary" className="text-white">
                    Commentary
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item onClick={() => changePage("table")}>
                  <Nav.Link eventKey="table" className="text-white">
                    Table
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item onClick={() => changePage("team")}>
                  <Nav.Link eventKey="team" className="text-white">
                    Team
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
            <div className="tabs">
              <div className={tabName === "info" ? "d-block" : "d-none"}>
                <Info />
              </div>
              <div className={tabName === "event" ? "d-block" : "d-none"}>
                <Event />
              </div>
              <div className={tabName === "commentary" ? "d-block" : "d-none"}>
                <Commentary />
              </div>
              <div className={tabName === "table" ? "d-block" : "d-none"}>
                <Table />
              </div>
              <div className={tabName === "team" ? "d-block" : "d-none"}>
                <Team />
              </div>
            </div>
          </Col>
          <Col md={4} className={`${styles.sidebar_bg} g-0`}>
            <Container>
              {/* <SideBarNews id={football_news_id}></SideBarNews>{" "} */}
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FMatchDetails;
