import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Loader from "../../Loader/Loader";
import { api_key } from "../../Shared/apikey";
import styles from "../CMatch.module.css";

const CInfo = ({ stgInfo }) => {
  const [isNotAvailable, setIsNotAvailable] = useState(false);
  const [play, setPlay] = useState(false);
  const [info, setInfo] = useState({});
  const location = useLocation();
  const eid = location.pathname.split("=")[1].split("-")[0];
  const tabName = location.pathname.split("=")[1].split("-")[1];
  console.log(stgInfo);
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://livescore6.p.rapidapi.com/matches/v2/get-info",
      params: { Category: "cricket", Eid: eid },
      headers: {
        "X-RapidAPI-Key": api_key,
        "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        if (response.data?.Refs[0].Nm) {
          setInfo(response.data);
          setPlay(true);
        } else {
          setIsNotAvailable(true);
        }

        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {info && play == false ? (
        <h1 className="text-white text-center">
          Information data not available
        </h1>
      ) : (
        ""
      )}
      {play ? (
        <div className="py-2">
          <Row
            className={`text-white border-top border-bottom border-secondary rounded p-3 ${styles.info_p}`}
          >
            <Col xs={4}>Event: </Col>
            <Col xs={8}>
              {" "}
              <span className="fw-bold">{stgInfo?.Snm}</span>
              {`( ${stgInfo?.Cnm})`}
            </Col>
          </Row>
          <Row
            className={`text-white border-top border-bottom border-secondary rounded p-3 ${styles.info_p}`}
          >
            <Col xs={4}>Venue: </Col>
            <Col xs={8}>
              {" "}
              <span className="fw-bold">{info?.Vnm}</span>
              {`( ${info?.VCnm})`}
            </Col>
          </Row>
          <Row
            className={`text-white border-top border-bottom border-secondary rounded p-3 ${styles.info_p}`}
          >
            <Col xs={4}>Umpires: </Col>
            <Col xs={8}>
              {info?.Refs.map((item) => (
                <span className="px-2">
                  {item.Nm} <br />{" "}
                </span>
              ))}
            </Col>
          </Row>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default CInfo;
