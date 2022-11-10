import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import SideBarNews from "../Home/Components/SideBarNews/SideBarNews";
import Loader from "../Loader/Loader";
import { api_key, football_news_id } from "../Shared/apikey";
import NavigationBar from "../Shared/Navbar/NavigationBar";
import Commentary from "./Components/Commentary";
import Event from "./Components/Event";
import Info from "./Components/Info";
import MyTable from "./Components/MyTable";
import Team from "./Components/Team";
import styles from "./FMatchDetails.module.css";

const FMatchDetails = () => {
  const history = useNavigate();
  const location = useLocation();
  const eid = location.pathname.split("=")[1].split("-")[0];
  const tabName = location.pathname.split("=")[1].split("-")[1];
    const [data, setData] = useState({});
    const [play,setPlay]=useState(false)
  /* Get scoreboard data */
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://livescore6.p.rapidapi.com/matches/v2/get-scoreboard",
      params: { Eid: eid, Category: "soccer" },
      headers: {
        "X-RapidAPI-Key": api_key,
        "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
      },
    };

     axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
          setData(response.data);
          setPlay(true)
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
// console.log(data);
  const changePage = (tabName) => {
    history(`/football/matchDetails/eid=${eid}-${tabName}`);
  };
  return (
    <div className={`${styles.fmatchDetails_wrapper}`}>
      <NavigationBar />
      <hr className="text-white" />

      <Container>
        <Row className="w-100 g-0 ">
          {play ? (
            <Col lg={8} className="">
              <div className="scoreBoard bg-dark">
                <div
                  className={`text-white border  border-secondary rounded p-3 my-2 ${styles.info_p}`}
                >
                  <h5 className="text-start fw-bold pb-2">
                    {data?.Stg?.CompN} 
                  </h5>
                  <Row>
                    {/* Team 01 Info */}
                    <Col className="text-center">
                      <img
                        src={`https://lsm-static-prod.livescore.com/medium/${data?.T1[0].Img} `}
                        width="40"
                        className="img-fluid "
                        alt=""
                      />
                      <p className="text-white fs-5">{data?.T1[0].Nm}</p>
                    </Col>
                    {/* Score both Team */}
                    <Col>
                      <div className="text-center">
                        <h2 className="text-center">
                          {data?.Tr1} - {data?.Tr2}{" "}
                        </h2>
                        <p>{data?.Eps}</p>
                      </div>
                    </Col>
                    {/* Team 2 info */}
                    <Col className="text-center">
                      <img
                        src={`https://lsm-static-prod.livescore.com/medium/${data.T2[0].Img} `}
                        width="40"
                        className="img-fluid "
                        alt=""
                      />
                      <p className="text-white fs-5">{data?.T2[0].Nm}</p>
                    </Col>
                  </Row>
                </div>
              </div>
              {/* Match Navigation */}
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
                 {/*  <Nav.Item onClick={() => changePage("team")}>
                    <Nav.Link eventKey="team" className="text-white">
                      Team
                    </Nav.Link>
                  </Nav.Item> */}
                </Nav>
              </div>
              <div className="tabs">
                <div className={tabName === "info" ? "d-block" : "d-none"}>
                  <Info />
                </div>
                <div className={tabName === "event" ? "d-block" : "d-none"}>
                  <Event />
                </div>
                <div
                  className={tabName === "commentary" ? "d-block" : "d-none"}
                >
                  <Commentary />
                </div>
                <div className={tabName === "table" ? "d-block" : "d-none"}>
                  <MyTable/>
                </div>
                {/* <div className={tabName === "team" ? "d-block" : "d-none"}>
                  <Team />
                </div> */}
              </div>
            </Col>
          ) : (
            <Loader />
          )}
          <Col lg={4} className={`${styles.sidebar_bg} g-0`}>
            <Container>
              <SideBarNews id={football_news_id}></SideBarNews>{" "}
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FMatchDetails;
