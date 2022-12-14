import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "../Football.module.css";
const SingleMatch = ({ singleMatch }) => {
  // console.log(singleMatch);
  return (
    <div className={`py-2`}>
      <NavLink
        to={`/football/matchDetails/eid=${singleMatch.Eid}-info`}
        className="text-white text-decoration-none"
      >
        <Card className={`${styles.singleMatch_wrapper}`}>
          <Card.Body>
            <Container>
              <Row>
                <Col>
                  Time {`(Minute)`}
                  <br />
                  {singleMatch.Eps}
                </Col>
                <Col>
                  <p>
                    {" "}
                    <span>
                      <img
                        src={`https://lsm-static-prod.livescore.com/medium/${singleMatch.T1[0].Img} `}
                        width="30"
                        className="img-fluid me-1"
                        alt=""
                      />
                    </span>
                    {singleMatch.T1[0].Nm}
                  </p>
                </Col>
                <Col className="text-end">
                  <p>{singleMatch.Tr1}</p>
                </Col>
                {/* Team 2 */}
              </Row>
              <Row>
                <Col></Col>
                <Col>
                  <p>
                    {" "}
                    <span>
                      <img
                        src={`https://lsm-static-prod.livescore.com/medium/${singleMatch.T2[0].Img} `}
                        width="30"
                        className="img-fluid me-1"
                        alt=""
                      />
                    </span>
                    {singleMatch.T2[0].Nm}
                  </p>
                </Col>
                <Col className="text-end">{singleMatch.Tr2}</Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </NavLink>
    </div>
  );
};

export default SingleMatch;
