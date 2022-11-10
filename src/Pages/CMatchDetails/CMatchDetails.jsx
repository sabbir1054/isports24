import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import SingleCricketMatch from "../Home/Components/Cricket/MatchList/SingleCricketMatch";
import SideBarNews from "../Home/Components/SideBarNews/SideBarNews";
import Loader from "../Loader/Loader";
import { api_key, cricket_news_id } from "../Shared/apikey";
import NavigationBar from "../Shared/Navbar/NavigationBar";
import styles from "./CMatch.module.css";
import CCommentary from "./Components/CCommentary";
import CInfo from "./Components/CInfo";
import CTeams from "./Components/CTeams";
import ScoreCard from "./Components/ScoreCard/ScoreCard";
const CMatchDetails = () => {
  const history = useNavigate();
  const location = useLocation();
  const eid = location.pathname.split("=")[1].split("-")[0];
  const tabName = location.pathname.split("=")[1].split("-")[1];
  const [data, setData] = useState({});
  const [play, setPlay] = useState(false);
  console.log(eid);
  /* Get scoreboard data */
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://livescore6.p.rapidapi.com/matches/v2/get-scoreboard",
      params: { Eid: eid, Category: "cricket" },
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
        setPlay(true);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
//   console.log(data);

  const changePage = (tabName) => {
    history(`/cricket/matchDetails/eid=${eid}-${tabName}`);
  };
  return (
    <div className={styles.CmatchDetails_wrapper}>
      <NavigationBar />
      <hr className="text-white" />

      <Container>
        <Row className="w-100 g-0 ">
          {play ? (
            <Col lg={8} className="">
              <SingleCricketMatch singleMatch={data} />
              {/* Match Navigation */}
              <div className="match-navigation mt-3">
                <Nav variant="tabs" defaultActiveKey={tabName}>
                  <Nav.Item onClick={() => changePage("info")}>
                    <Nav.Link eventKey="info" className="text-white">
                      Info
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item onClick={() => changePage("scorecard")}>
                    <Nav.Link eventKey="scorecard" className="text-white">
                      Score card
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item onClick={() => changePage("commentary")}>
                    <Nav.Link eventKey="commentary" className="text-white">
                      Commentary
                    </Nav.Link>
                  </Nav.Item>
                  {/* <Nav.Item onClick={() => changePage("table")}>
                  <Nav.Link eventKey="table" className="text-white">
                    Table
                  </Nav.Link>
                </Nav.Item> */}
                  <Nav.Item onClick={() => changePage("team")}>
                    <Nav.Link eventKey="team" className="text-white">
                      Team
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
              <div className="tabs">
                <div className={tabName === "info" ? "d-block" : "d-none"}>
                  <CInfo stgInfo={data.Stg} />
                </div>
                <div className={tabName === "scorecard" ? "d-block" : "d-none"}>
                  <ScoreCard />
                </div>
                <div
                  className={tabName === "commentary" ? "d-block" : "d-none"}
                >
                  <CCommentary />
                </div>
                {/*           <div className={tabName === "table" ? "d-block" : "d-none"}>
                <MyTable />
              </div> */}
                <div className={tabName === "team" ? "d-block" : "d-none"}>
                  <CTeams tm1={data?.T1[0]?.Nm} tm2={data?.T2[0]?.Nm} />
                </div>
              </div>
            </Col>
          ) : (
            <Loader />
          )}
          <Col lg={4} className={`${styles.sidebar_bg} g-0`}>
            <Container>
              <SideBarNews id={cricket_news_id}></SideBarNews>{" "}
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CMatchDetails;
