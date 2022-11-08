import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { api_key } from "../../Shared/apikey";
import styles from "../FMatchDetails.module.css"
const Info = () => {
  const [info, setInfo] = useState();
  const location = useLocation();
  const eid = location.pathname.split("=")[1].split("-")[0];
  const tabName = location.pathname.split("=")[1].split("-")[1];

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://livescore6.p.rapidapi.com/matches/v2/get-info",
      params: { Category: "soccer", Eid: eid },
      headers: {
        "X-RapidAPI-Key": api_key,
        "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
      },
    };

/*     axios
      .request(options)
      .then(function (response) {
        setInfo(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      }); */
  }, []);
  return (
    <div>
      <div className="py-2">
        <p className={`text-white border-top border-bottom border-secondary rounded p-3 ${styles.info_p}`}>
          Referee: <span className="fw-bold">{info?.Refs[0].Nm}</span>
        </p>
        <p className={`text-white border-top border-bottom border-secondary rounded p-3 ${styles.info_p}`}>
          Venue: <span className="fw-bold">{info?.Vnm}</span>
        </p>
      </div>
    </div>
  );
};

export default Info;
