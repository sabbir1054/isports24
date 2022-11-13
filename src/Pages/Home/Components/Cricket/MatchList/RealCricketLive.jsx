import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { db } from "../../../../../Firebase/DBinit";
import styles from "../../Football/Football.module.css";

const RealCricketLive = () => {
  const [live, setLive] = useState(false);
  const [tm1, setTm1] = useState({});
  const [tm2, setTm2] = useState({});

  // get real data
  useEffect(() => {
    const cricketCollectRef = collection(db, "cricket");
    const cricketInfo = onSnapshot(cricketCollectRef, (snapshot) => {
      // console.log(snapshot.docs[0].data());
      const liveStatus = snapshot.docs[0].data();
      const team1Data = snapshot.docs[1].data();
      const team2Data = snapshot.docs[2].data();
      setLive(liveStatus.live);
      setTm1(team1Data);
      setTm2(team2Data);
    });
  }, []);
  // console.log(tm1.imgUrl);
  return (
    <div className="mb-2">
      {live === true ? (
        <Card className={`${styles.singleMatch_wrapper}`}>
          <Card.Body>
            <Container>
              <h4 className="text-center text-white mb-5">Enjoy Your Live</h4>
              <div className="d-flex justify-content-between"></div>
              <Row className="text-white">
                <Col>
                  {" "}
                  <img
                    src={`${tm1.imgUrl}`}
                    alt=""
                    width={30}
                    className="rounded d-inline-block"
                  />{" "}
                  <p className="d-inline-block">{tm1.name}</p>{" "}
                </Col>
                <Col className="text-end">
                  <p className="">
                    {live ? (
                      <span>
                        {tm1.run + `/` + tm1.wk}{" "}
                        <small className="ms-1">{`( ${tm1.over} )`}</small>{" "}
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
                  {" "}
                  <img
                    src={`${tm2.imgUrl}`}
                    alt=""
                    width={30}
                    className="rounded d-inline-block"
                  />{" "}
                  <p className="d-inline-block">{tm2.name}</p>{" "}
                </Col>
                <Col className="text-end">
                  <p className="">
                    {live ? (
                      <span>
                        {tm2.run + `/` + tm2.wk}{" "}
                        <small className="ms-1">{`( ${tm2.over} )`}</small>{" "}
                      </span>
                    ) : (
                      <span>0/0</span>
                    )}
                  </p>
                </Col>
                <Col className={styles.ScoreBoardSpace}></Col>
                {/* Team 2 */}
              </Row>
              {/* <p className="text-start fw-bold ">{singleMatch.ECo}</p> */}
            </Container>
          </Card.Body>
        </Card>
      ) : (
        ""
      )}
    </div>
  );
};

export default RealCricketLive;
