import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { api_key } from "../../../Shared/apikey";
import NavSelectTeam from "../NavSelectTeam";
const ScoreCard = () => {
  const [players, setPlayers] = useState([]);
  const [firstInn, setFirstInn] = useState([]);
  const [secondInn, setSecondInn] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState("tm1");
  const [isNotAvailable, setIsNotAvailable] = useState(false);
  const [play, setPlay] = useState(false);
  const location = useLocation();
  const eid = location.pathname.split("=")[1].split("-")[0];
  const tabName = location.pathname.split("=")[1].split("-")[1];
  const [allData, setAllData] = useState({});

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
        console.log(response.data.SDInn[1]);
        if (response.data.SDInn[0] !== undefined) {
          setAllData(response.data);
          setPlayers(response.data.Prns);
          setFirstInn(response.data.SDInn[0]);
          setSecondInn(response.data.SDInn[1]);
          setPlay(true);
        } else {
          setIsNotAvailable(true);
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const getSelectedTeam = (x) => {
    setSelectedTeam(x);
    // console.log(x);
  };
  const getWicketStat = (info) => {
    if (info == "lbw [B]") {
      return "lbw";
    } else if (info == "c & b [B]") {
      return "caught out";
    } else if (info == "c [F] b [B]") {
      return "caught out";
    } else if (info == "run out ([F])") {
      return "run out";
    } else if (info == "b [B]") {
      return "b";
    } else {
      return info;
    }
  };

  return (
    <div>
      <div className="p-2">
        {isNotAvailable ? (
          <div>
            <h1 className="text-white text-center">
              Commentary data not available
            </h1>
          </div>
        ) : (
          ""
        )}
        {play ? (
          <NavSelectTeam
            myFunc={getSelectedTeam}
            tm1={allData?.SDInn[0]?.Ti}
            tm2={allData?.SDInn[1]?.Ti}
          />
        ) : (
          ""
        )}
        {play && selectedTeam === "tm1" ? (
          <div>
            <Table  hover className="mt-3">
              <thead>
                <tr>
                  <th className="-2 text-center text-white fs-5">Batters</th>
                  <th className="-2 text-center text-white fs-5">R</th>
                  <th className="-2 text-center text-white fs-5">B</th>
                  <th className="-2 text-center text-white fs-5">4S</th>
                  <th className="-2 text-center text-white fs-5">6S</th>
                  <th className="-2 text-center text-white fs-5">S/R</th>
                </tr>
              </thead>
              <tbody>
                {play && selectedTeam === "tm1"
                  ? firstInn?.Bat?.map((item) => (
                      <tr>
                        <td className="fs-6 text-light">
                          {players?.map((item2) =>
                            item.Pid == item2.Pid ? (
                              <span>
                                {item2.Snm} <br />{" "}
                                <small>
                                  {`( ${getWicketStat(item?.LpTx)} )`}{" "}
                                </small>
                              </span>
                            ) : (
                              ""
                            )
                          )}
                        </td>
                        <td className="fs-6 text-light text-center">
                          {item?.R}
                        </td>
                        <td className="fs-6 text-light text-center">
                          {item?.B}
                        </td>
                        <td className="fs-6 text-light text-center">
                          {item?.$4}
                        </td>
                        <td className="fs-6 text-light text-center">
                          {item?.$6}
                        </td>
                        <td className="fs-6 text-light text-center">
                          {item?.Sr}
                        </td>
                      </tr>
                    ))
                  : ""}
              </tbody>
            </Table>
            <br />
            <Table  responsive  className="mt-3">
              <thead>
                <tr>
                  <th className="-2 text-center text-white fs-5">BOWLING</th>
                  <th className="-2 text-center text-white fs-5">O</th>
                  <th className="-2 text-center text-white fs-5">M</th>
                  <th className="-2 text-center text-white fs-5">R</th>
                  <th className="-2 text-center text-white fs-5">W</th>
                  <th className="-2 text-center text-white fs-5">NB</th>
                  <th className="-2 text-center text-white fs-5">WD</th>
                  <th className="-2 text-center text-white fs-5">E/R</th>
                </tr>
              </thead>
              <tbody>
                {play && selectedTeam === "tm1"
                  ? firstInn?.Bow?.map((item) => (
                      <tr>
                        <td className="fs-6 text-light">
                          {players?.map((item2) =>
                            item.Pid == item2.Pid ? (
                              <span>{item2.Snm}</span>
                            ) : (
                              ""
                            )
                          )}
                        </td>
                        <td className="fs-6 text-light text-center">
                          {item?.Ov}
                        </td>
                        <td className="fs-6 text-light text-center">
                          {item?.Md}
                        </td>
                        <td className="fs-6 text-light text-center">
                          {item?.R}
                        </td>
                        <td className="fs-6 text-light text-center">
                          {item?.Wk}
                        </td>
                        <td className="fs-6 text-light text-center">
                          {item?.NB}
                        </td>
                        <td className="fs-6 text-light text-center">
                          {item?.WB}
                        </td>
                        <td className="fs-6 text-light text-center">
                          {item?.Er}
                        </td>
                      </tr>
                    ))
                  : ""}

                <tr>
                  <td colSpan={8}>
                    <span className="fw-bold me-3 text-white"> Extra: {firstInn?.Ex}</span>
                    <span className="mx-3 text-white">
                      {" "}
                      <span className="fw-bold"> B: </span>
                      {firstInn?.B}
                    </span>
                    <span className="mx-3 text-white">
                      {" "}
                      <span className="fw-bold"> LB: </span> {firstInn?.LB}
                    </span>{" "}
                    <span className="mx-3 text-white">
                      {" "}
                      <span className="fw-bold"> NB: </span> {firstInn?.NB}
                    </span>{" "}
                    <span className="mx-3 text-white">
                      {" "}
                      <span className="fw-bold"> WD: </span> {firstInn?.WB}
                    </span>{" "}
                    <span className="mx-3 text-white">
                      {" "}
                      <span className="fw-bold"> P: </span>
                      {firstInn?.Pen}
                    </span>{" "}
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        ) : (
          ""
        )}
        {play && selectedTeam === "tm2" ? (
          <div>
            <Table variant={"dark"} responsive hover className="mt-3">
              <thead>
                <tr>
                  <th className="-2 text-center text-white fs-5">Batters</th>
                  <th className="-2 text-center text-white fs-5">R</th>
                  <th className="-2 text-center text-white fs-5">B</th>
                  <th className="-2 text-center text-white fs-5">4S</th>
                  <th className="-2 text-center text-white fs-5">6S</th>
                  <th className="-2 text-center text-white fs-5">S/R</th>
                </tr>
              </thead>
              <tbody>
                {play && selectedTeam === "tm2"
                  ? secondInn?.Bat?.map((item) => (
                      <tr>
                        <td className="fs-6 text-light">
                          {players?.map((item2) =>
                            item.Pid == item2.Pid ? (
                              <span>
                                {item2.Snm} <br />{" "}
                                <small>
                                  {`( ${getWicketStat(item?.LpTx)} )`}{" "}
                                </small>
                              </span>
                            ) : (
                              ""
                            )
                          )}
                        </td>
                        <td className="fs-6 text-light text-center">
                          {item?.R}
                        </td>
                        <td className="fs-6 text-light text-center">
                          {item?.B}
                        </td>
                        <td className="fs-6 text-light text-center">
                          {item?.$4}
                        </td>
                        <td className="fs-6 text-light text-center">
                          {item?.$6}
                        </td>
                        <td className="fs-6 text-light text-center">
                          {item?.Sr}
                        </td>
                      </tr>
                    ))
                  : ""}
              </tbody>
            </Table>
            <br />
            <Table variant={"dark"} responsive hover className="mt-3">
              <thead>
                <tr>
                  <th className="-2 text-center text-white fs-5">BOWLING</th>
                  <th className="-2 text-center text-white fs-5">O</th>
                  <th className="-2 text-center text-white fs-5">M</th>
                  <th className="-2 text-center text-white fs-5">R</th>
                  <th className="-2 text-center text-white fs-5">W</th>
                  <th className="-2 text-center text-white fs-5">NB</th>
                  <th className="-2 text-center text-white fs-5">WD</th>
                  <th className="-2 text-center text-white fs-5">E/R</th>
                </tr>
              </thead>
              <tbody>
                {play && selectedTeam === "tm2"
                  ? secondInn?.Bow?.map((item) => (
                      <tr>
                        <td className="fs-6 text-light">
                          {players?.map((item2) =>
                            item.Pid == item2.Pid ? (
                              <span>{item2.Snm}</span>
                            ) : (
                              ""
                            )
                          )}
                        </td>
                        <td className="fs-6 text-light text-center">
                          {item?.Ov}
                        </td>
                        <td className="fs-6 text-light text-center">
                          {item?.Md}
                        </td>
                        <td className="fs-6 text-light text-center">
                          {item?.R}
                        </td>
                        <td className="fs-6 text-light text-center">
                          {item?.Wk}
                        </td>
                        <td className="fs-6 text-light text-center">
                          {item?.NB}
                        </td>
                        <td className="fs-6 text-light text-center">
                          {item?.WB}
                        </td>
                        <td className="fs-6 text-light text-center">
                          {item?.Er}
                        </td>
                      </tr>
                    ))
                  : ""}
                <tr>
                  <td colSpan={8}>
                    <span className="fw-bold me-3">
                      {" "}
                      Extra: {secondInn?.Ex}
                    </span>
                    <span className="mx-3 ">
                      {" "}
                      <span className="fw-bold"> B: </span>
                      {secondInn?.B}
                    </span>
                    <span className="mx-3 ">
                      {" "}
                      <span className="fw-bold"> LB: </span> {secondInn?.LB}
                    </span>{" "}
                    <span className="mx-3 ">
                      {" "}
                      <span className="fw-bold"> NB: </span> {secondInn?.NB}
                    </span>{" "}
                    <span className="mx-3 ">
                      {" "}
                      <span className="fw-bold"> WD: </span> {secondInn?.WB}
                    </span>{" "}
                    <span className="mx-3 ">
                      {" "}
                      <span className="fw-bold"> P: </span>
                      {secondInn?.Pen}
                    </span>{" "}
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ScoreCard;
