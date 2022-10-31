import React from "react";
import { Accordion } from "react-bootstrap";
import styles from "../Football.module.css";
import SingleMatch from "./SingleMatch";
const SingleLeague = ({ league }) => {
  // console.log(league);
  return (
    <div className="py-2 ">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0" className={styles.accordion_item}>
          <Accordion.Header className={styles.accordion_header}>
            <h5 className="py-0 fw-bold">{league.Snm}</h5>
            <span className="fs-6 text-secondary mx-1">{`(${league.Cnm})`}</span>
          </Accordion.Header>
          <Accordion.Body >
            {league.Events.map((singleMatch) => (
              <SingleMatch singleMatch={singleMatch} />
            ))}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default SingleLeague;
