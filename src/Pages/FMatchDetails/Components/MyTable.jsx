import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useLocation } from "react-router-dom";
import Loader from "../../Loader/Loader";
import { api_key } from "../../Shared/apikey";

const MyTable = () => {
  const [compid, setCompid] = useState("");
  const [wtable, setWTable] = useState([]);
  const [isNotAvailable, setIsNotAvailable] = useState(false);
  const [play, setPlay] = useState(false);
  const [data, setData] = useState({});
  const [table, setTable] = useState([]);
  const location = useLocation();
  const eid = location.pathname.split("=")[1].split("-")[0];
  const tabName = location.pathname.split("=")[1].split("-")[1];

  const getTable = (compId) => {
    setCompid(compId);
    const options = {
      method: "GET",
      url: "https://livescore6.p.rapidapi.com/competitions/get-table",
      params: { CompId: compId },
      headers: {
        "X-RapidAPI-Key": api_key,
        "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        if (
          response.data.Stages[0].LeagueTable.L[0].Tables[0].team != undefined
        ) {
          if (compId == "54") {
            setWTable(response.data.Stages);
          } else {
            setData(response.data.Stages[0]);
            // console.log(response.data.Stages[0]);
            setTable(response.data.Stages[0].LeagueTable.L[0].Tables[0].team);
          }
          setPlay(true);
        } else {
          setIsNotAvailable(true);
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://livescore6.p.rapidapi.com/matches/v2/get-scoreboard",
      params: { Category: "soccer", Eid: eid },
      headers: {
        "X-RapidAPI-Key": api_key,
        "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data.Stg.CompId);
        if (response.data.Stg.CompId !== undefined) {
          getTable(response.data.Stg.CompId);
        } else {
          setIsNotAvailable(true);
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  if (wtable.length > 0) {
    wtable.map((item) => {
      console.log(item.LeagueTable.L[0].Tables[0].team);
    });
  }
  return (
    <div>
      {/* Not available massage */}
      {isNotAvailable ? (
        <h1 className="text-white text-center">Table data not available</h1>
      ) : (
        ""
      )}

      {compid == "54" ? (
        <>
          {wtable.map((item) => (
            <>
              <h4 className="text-center text-white">{item.Sdn }</h4>
              <Table className="text-white my-2" responsive bordered>
                <thead>
                  <th className="py-2">#</th>
                  <th>TEAM</th>
                  <th>P</th>
                  <th>W</th>
                  <th>D</th>
                  <th>L</th>
                  <th>F</th>
                  <th>A</th>
                  <th>GD</th>
                  <th>PTS</th>
                </thead>
                <tbody>
                  {play ? (
                    item.LeagueTable.L[0].Tables[0].team.map((item) => (
                      <tr>
                        <td>{item.rnk}</td>
                        <td>{item.Tnm}</td>
                        <td>{item.pld}</td>
                        <td>{item.win}</td>
                        <td>{item.drw}</td>
                        <td>{item.lst}</td>
                        <td>{item.gf}</td>
                        <td>{item.ga}</td>
                        <td>{item.gd}</td>
                        <td>{item.pts}</td>
                      </tr>
                    ))
                  ) : (
                    <Loader />
                  )}
                </tbody>
              </Table>
            </>
          ))}
        </>
      ) : (
        <Table className="text-white" responsive bordered>
          <thead>
            <th className="py-2">#</th>
            <th>TEAM</th>
            <th>P</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>F</th>
            <th>A</th>
            <th>GD</th>
            <th>PTS</th>
          </thead>
          <tbody>
            {play ? (
              table.map((item) => (
                <tr>
                  <td>{item.rnk}</td>
                  <td>{item.Tnm}</td>
                  <td>{item.pld}</td>
                  <td>{item.win}</td>
                  <td>{item.drw}</td>
                  <td>{item.lst}</td>
                  <td>{item.gf}</td>
                  <td>{item.ga}</td>
                  <td>{item.gd}</td>
                  <td>{item.pts}</td>
                </tr>
              ))
            ) : (
              <Loader />
            )}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default MyTable;
