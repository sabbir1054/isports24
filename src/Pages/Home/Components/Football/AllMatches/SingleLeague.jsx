import React from "react";
import { Accordion } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import RealCricketLive from "../../Cricket/MatchList/RealCricketLive";
import SingleCricketMatch from "../../Cricket/MatchList/SingleCricketMatch";
import styles from "../Football.module.css";
import RealFootballLive from "./RealFootballLive";
import SingleMatch from "./SingleMatch";
const SingleLeague = ({ league }) => {
  const location = useLocation();
  const broken_link=(String(location.pathname)).split("/")
  // console.log(league);
  return (
    <div className="py-2 ">
  {/*     {broken_link[1] === "cricket" && broken_link[2] === "list-live" ? (
        <RealCricketLive />
      ) : broken_link[1] === "football" && broken_link[2] === "list-live" ? (
        <RealFootballLive />
      ) : (
        ""
      )} */}

      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0" className={styles.accordion_item}>
          <Accordion.Header className={styles.accordion_header}>
            <h5 className="py-0 fw-bold">{league.Snm}</h5>
            <span className={`fs-6 text mx-1 ${styles.text_span}`}>{`(${league.Cnm})`}</span>
          </Accordion.Header>
          <Accordion.Body>
            {broken_link[1] == "cricket"
              ? league.Events.map((singleMatch) => (
                  <SingleCricketMatch singleMatch={singleMatch} />
                ))
              : league.Events.map((singleMatch) => (
                  <SingleMatch singleMatch={singleMatch} />
                ))}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default SingleLeague;
