import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { api_key } from "../../Shared/apikey";

const CTeams = ({ tm1, tm2 }) => {
  const [isNotAvailable, setIsNotAvailable] = useState(false);
  const [play, setPlay] = useState(false);
  const [team1, setTeam1] = useState([]);
  const [team2, setTeam2] = useState([]);
  const location = useLocation();
  const eid = location.pathname.split("=")[1].split("-")[0];
  const tabName = location.pathname.split("=")[1].split("-")[1];

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://livescore6.p.rapidapi.com/matches/v2/get-lineups",
      params: { Eid: eid, Category: "cricket" },
      headers: {
        "X-RapidAPI-Key": api_key,
        "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.Lu);
        if (response.data.Lu[0].Ps.length > 0) {
          setTeam1(response.data.Lu[0].Ps);
          setTeam2(response.data.Lu[1].Ps);
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <div className="both_team">
        <Container>
          <Row>
            <Col sm={6}>
              <Table  responsive  className="mt-3">
                <thead>
                  <tr>
                    <th className="-2 text-center text-white fs-5">
                      TEAM {tm1}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {team1?.map((player) => (
                    <tr>
                      <td className="fs-6 text-light">{player?.Snm}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
            <Col sm={6}>
              <Table responsive className="mt-3">
                <thead>
                  <tr>
                    <th className="text-center fs-5 text-white">TEAM {tm2}</th>
                  </tr>
                </thead>
                <tbody>
                  {team2?.map((player) => (
                    <tr>
                      <td className="fs-6 text-light">{player?.Snm}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default CTeams;
