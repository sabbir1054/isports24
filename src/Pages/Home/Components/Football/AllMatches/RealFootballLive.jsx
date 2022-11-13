import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { db } from "../../../../../Firebase/DBinit";
import styles from "../Football.module.css"




const RealFootballLive = () => {
  const [live, setLive] = useState(false);
  const [tm1, setTm1] = useState({});
  const [tm2, setTm2] = useState({});

  // get real data
  useEffect(() => {
    const footballCollectRef = collection(db, "football");
    const footballInfo = onSnapshot(footballCollectRef, (snapshot) => {
      // console.log(snapshot.docs[0].data());
      const liveStatus = snapshot.docs[0].data();
      const team1Data = snapshot.docs[1].data();
      const team2Data = snapshot.docs[2].data();
      setLive(liveStatus.live);
      setTm1(team1Data);
      setTm2(team2Data);
    });
  }, []);
//   console.log(tm1);
  return (
    <div>
      {live ? (
        <Container
          className={`pt-3 pb-3 rounded mb-2 ${styles.singleMatch_wrapper}`}
        >
          <h4 className="text-center text-white mb-5">Enjoy Your Live</h4>
          <Row>
            {/* Team 01 Info */}
            <Col className="text-center">
              <img
                src={`${tm1.imgUrl} `}
                width="40"
                className="img-fluid rounded"
                alt=""
              />
              <p className="text-white fs-5">{tm1.name}</p>
            </Col>
            {/* Score both Team */}
            <Col>
              <div className="text-center">
                <h2 className="text-center">
                  {tm1.goal} - {tm2.goal}{" "}
                </h2>
              </div>
            </Col>
            {/* Team 2 info */}
            <Col className="text-center">
              <img
                src={`${tm2.imgUrl}`}
                width="40"
                className="img-fluid rounded"
                alt=""
              />
              <p className="text-white fs-5">{tm2.name}</p>
            </Col>
          </Row>
        </Container>
      ) : (
        ""
      )}
    </div>
  );
};

export default RealFootballLive;
