import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Loader from "../../Loader/Loader";
import { api_key } from "../../Shared/apikey";
import styles from "../FMatchDetails.module.css";

const Event = () => {
  const [play, setPlay] = useState(false);
  const [data, setData] = useState({});
  const [firstEvent, setFirstEvent] = useState();
  const [secondEvent, setSecondEvent] = useState();
  const location = useLocation();
  const eid = location.pathname.split("=")[1].split("-")[0];
  const tabName = location.pathname.split("=")[1].split("-")[1];

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://livescore6.p.rapidapi.com/matches/v2/get-incidents",
      params: { Category: "soccer", Eid: eid },
      headers: {
        "X-RapidAPI-Key": api_key,
        "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        const [number, number2] = Object.keys(response.data.Incs);
        console.log(response.data.Incs[number]);
        //  console.log(response.data.Incs[number2]);
        //  console.log(number2);
        console.log(response.data);
        setData(response.data);
        setFirstEvent(response.data.Incs[number]);
        setSecondEvent(response.data.Incs[number2]);
        setPlay(true);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return (
    <div>
      {/* Start  */}
      {play ? (
        firstEvent.map((item) => (
          <Row
            className={`text-white border border-secondary rounded  my-1 ${styles.info_p} g-0`}
          >
            <Col xs={4}>
              <p className="text-start pt-2 ms-2"> {item.Min} ' </p>{" "}
            </Col>
            <Col xs={8}>
              <p className="text-start pt-2 fw-bold fs-6">
                {item.Pn}{" "}
                {item.IT == 43 ? (
                  <img src="/assets/photos/yealloCard.png" width={15} alt="" />
                ) : (
                  ""
                )}
                {item.IT == 45 ? (
                  <img src="/assets/photos/redCard.png" width={20} alt="" />
                ) : (
                  ""
                )}
                {item.Sc ? (
                  <span className="text-success fw-bold">
                    Goal {item.Sc[0]} - {item.Sc[1]}
                  </span>
                ) : (
                  ""
                )}
              </p>
            </Col>
          </Row>
        ))
      ) : (
        <Loader />
      )}
      {/* Half Time */}
      <div>
        {play ? (
          <Row
            className={`text-white border g-0 my-1 border-secondary rounded  ${styles.info_p}`}
          >
            <Col xs={4}>
              <p className="text-start pt-2 ms-2"> Half Time </p>{" "}
            </Col>
            <Col xs={8}>
              <p className="text-start pt-2 fw-bold fs-5">
                {data.Trh1} - {data.Trh2}
              </p>
            </Col>
          </Row>
        ) : (
          <Loader />
        )}
      </div>
      {/* Last Part  */}
      <div>
        {play ? (
          secondEvent.map((item) => (
            <Row
              className={`text-white border border-secondary rounded my-1  ${styles.info_p} g-0`}
            >
              <Col xs={4}>
                <p className="text-start pt-2 ms-2"> {item.Min} ' </p>{" "}
              </Col>
              <Col xs={8}>
                <p className="text-start pt-2 fw-bold ">
                  {item.Pn}{" "}
                  {item.IT == 43 ? (
                    <img
                      src="/assets/photos/yealloCard.png"
                      width={15}
                      alt=""
                    />
                  ) : (
                    ""
                  )}
                  {item.IT == 45 ? (
                    <img src="/assets/photos/redCard.png" width={20} alt="" />
                  ) : (
                    ""
                  )}
                  {item.Sc ? (
                    <span className="text-success fw-bold">
                      Goal {item.Sc[0]} - {item.Sc[1]}
                    </span>
                  ) : (
                    ""
                  )}
                </p>
              </Col>
            </Row>
          ))
        ) : (
          <Loader />
        )}
      </div>
      {/* Full time */}
      <div>
        {play ? (
          <Row
            className={`text-white border g-0 my-1 border-secondary rounded  ${styles.info_p}`}
          >
            <Col xs={4}>
              <p className="text-start pt-2 ms-2"> Full Time </p>{" "}
            </Col>
            <Col xs={8} >
              <p className="text-start pt-2 fw-bold fs-5">
                {data.Tr1} - {data.Tr2}
              </p>
            </Col>
          </Row>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default Event;
