import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import Loader from '../../Loader/Loader';
import { api_key } from '../../Shared/apikey';
import styles from "../CMatch.module.css"
const CCommentary = () => {

  const [isNotAvailable, setIsNotAvailable] = useState(false);
  const [play, setPlay] = useState(false);
  const [commentary, setCommentary] = useState([]);
  const location = useLocation();
  const eid = location.pathname.split("=")[1].split("-")[0];
  const tabName = location.pathname.split("=")[1].split("-")[1];

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://livescore6.p.rapidapi.com/matches/v2/get-innings",
      params: { Eid: eid, Category: "cricket" },
      headers: {
        "X-RapidAPI-Key": api_key,
        "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.SDInn[0].Com);

        if (response.data.SDInn[0].Com !== undefined ) {
          setCommentary(response.data.SDInn[0].Com);
          setPlay(true);
        } else {
          setIsNotAvailable(true);
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);



    return (
      <div>
        <div className="p-2">
          {isNotAvailable ? (
            <h1 className="text-white text-center">
              Commentary data not available
            </h1>
          ) : (
            ""
          )}
          {play ? (
            commentary?.map((item) => (
              <Row
                className={`text-white border  border-secondary rounded p-3 my-2 ${styles.info_p} g-0`}
              >
                <Col md={2}>
                  <p className="text-white">Over : {item?.Ov}</p>
                  <p className="text-secondary">{item?.S}'</p>
                </Col>
                <Col md={10}>
                  <p className="text-white">{item?.T}</p>
                </Col>
              </Row>
            ))
          ) : (
            <Loader />
          )}
        </div>
      </div>
    );
};

export default CCommentary;