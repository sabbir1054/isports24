import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "../../News.module.css"
const NewsNav = (props) => {
  const location = useLocation();
  const path = location.pathname;
  const [activateLink, setActivateLink] = useState(`${location.pathname}`);
  const colorChange = (idName) => {
    props.func(idName)
    setActivateLink(idName);
    };
    
  //make link and params for  get data
    const broken_link = activateLink.split("/");
    // console.log(location.pathname);

  useEffect(() => {
    if (location.pathname === "/news") {
      setActivateLink("/news/all");
    } else {
      //set color
      setActivateLink(location.pathname);
    }
  }, [activateLink]);
  return (
    <div>
      <ul className="list-unstyled d-flex mt-3">
        <li onClick={() => colorChange("all")}>
          <NavLink
            to="/news/all"
            id="all"
            className={`btn text-secondary ${
              activateLink === "/news/all" ? styles.active : styles.newsNav_link
            }`}
          >
            All
          </NavLink>
        </li>
        <li onClick={() => colorChange("football")}>
          <NavLink
            to={`/news/football`}
            id="football"
            className={`btn text-secondary ${
              activateLink === `/news/football`
                ? styles.active
                : styles.newsNav_link
            }`}
          >
            Football
          </NavLink>
        </li>
        <li onClick={() => colorChange("cricket")}>
          <NavLink
            to={`/news/cricket`}
            id="cricket"
            className={`btn text-secondary ${
              activateLink === `/news/cricket`
                ? styles.active
                : styles.newsNav_link
            }`}
          >
            Cricket
          </NavLink>
        </li>
        <li onClick={() => colorChange("champion_league")}>
          <NavLink
            to={`/news/champion_league`}
            id="champion_league"
            className={`btn text-secondary ${
              activateLink === `/news/champion_league`
                ? styles.active
                : styles.newsNav_link
            }`}
          >
            Champions League
          </NavLink>
        </li>
        <li onClick={() => colorChange("world_cup_2022")}>
          <NavLink
            to={`/news/world_cup_2022`}
            id="world_cup_2022"
            className={`btn text-secondary ${
              activateLink === `/news/world_cup_2022`
                ? styles.active
                : styles.newsNav_link
            }`}
          >
            World Cup 2022
          </NavLink>
        </li>
        <li onClick={() => colorChange("transfer_news")}>
          <NavLink
            to={`/news/transfer_news`}
            id="transfer_news"
            className={`btn text-secondary ${
              activateLink === `/news/transfer_news`
                ? styles.active
                : styles.newsNav_link
            }`}
          >
            Transfer News
          </NavLink>
        </li>
        <li onClick={() => colorChange("others_news")}>
          <NavLink
            to={`/news/others_news`}
            id="others_news"
            className={`btn text-secondary ${
              activateLink === `/news/others_news`
                ? styles.active
                : styles.newsNav_link
            }`}
          >
            Others
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NewsNav;
