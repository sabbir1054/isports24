import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import ReactCountryFlag from "react-country-flag";
import { NavLink } from "react-router-dom";
// import ReactCountryFlag from "react-country-flag";
import styles from "../../Football/Football.module.css";
const SingleCricketMatch = ({ singleMatch }) => {
  console.log(singleMatch.T1[0].Abr);
  return (
    <div className={`py-2 ${styles.singleMatch_container}`}>
      <NavLink
        to={`/cricket/matchDetails/eid=${singleMatch.Eid}-scorecard`}
        className="text-white text-decoration-none"
      >
        {" "}
        <Card className={`${styles.singleMatch_wrapper}`}>
          <Card.Body>
            <Container>
              <div className="d-flex justify-content-between">
                <p className="text-danger">{singleMatch.ErnInf}</p>
                <p className="text-danger">{`*` + singleMatch.EpsL}</p>
              </div>
              <Row className="text-white">
                <Col>
                  <p>{singleMatch.T1[0].Nm}</p>
                </Col>
                <Col className="text-end">
                  <p className="">
                    {singleMatch.Tr1CO1 ? (
                      <span>
                        {singleMatch.Tr1C1 + `/` + singleMatch.Tr1CW1}{" "}
                        <small className="ms-1">{`( ${singleMatch.Tr1CO1} )`}</small>{" "}
                      </span>
                    ) : (
                      <span>0/0</span>
                    )}
                  </p>
                </Col>
                <Col className={styles.ScoreBoardSpace}></Col>
                {/* Team 2 */}
              </Row>
              <Row className="text-white">
                <Col>
                  <p>
                    {" "}
                    {/* <ReactCountryFlag countryCode="US" /> */}
                    {singleMatch.T2[0].Nm}
                  </p>
                </Col>
                <Col className="text-end ">
                  <p>
                    {singleMatch.Tr2C1 ? (
                      <span>
                        {singleMatch.Tr2C1 + `/` + singleMatch.Tr2CW1}{" "}
                        <small className="me-1">{`( ${singleMatch.Tr2CO1} )`}</small>{" "}
                      </span>
                    ) : (
                      <span>0/0</span>
                    )}
                  </p>
                </Col>
                <Col className={styles.ScoreBoardSpace}></Col>
              </Row>
              <p className="text-start fw-bold ">{singleMatch.ECo}</p>
            </Container>
          </Card.Body>
        </Card>
      </NavLink>
    </div>
  );
};

export default SingleCricketMatch;
