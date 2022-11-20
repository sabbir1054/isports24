import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { IsportsLatestNewsContext } from "../../../../../Context/IsportsLatestProvider";
import SingleISideBar from "./SingleISideBar";

const IsportsSidebar = ({id}) => {
  const location = useLocation();
  const pathname = location.pathname.split("/")[1];
  const [cricket, setCricket] = useState([]);
  const [football, setFootball] = useState([]);
  const { iSports10 } = useContext(IsportsLatestNewsContext);
  //filter data
  const makeData = () => {
    const getCData = iSports10.filter((item) => item.category == 1);
    const getFData = iSports10.filter((item) => item.category == 2);
    setCricket(getCData);
    setFootball(getFData);
  };
  useEffect(() => {
    if (iSports10.length > 0) {
      makeData();
    }
  }, [iSports10]);
  console.log(pathname);
  console.log(cricket);
  // console.log(football);
  return (
    <div>
      {pathname == "cricket"||id==1
        ? cricket.map((item) => <SingleISideBar data={item} />)
        : ""}
      {pathname == "football"||pathname== ""||id==2
        ? football.map((item) => <SingleISideBar data={item} />)
        : ""}
    </div>
  );
};

export default IsportsSidebar;
