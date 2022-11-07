import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "../../News.module.css"
const NewsNav = () => {
  const location = useLocation();
  const path = location.pathname;
  const [activateLink, setActivateLink] = useState(`${location.pathname}`);
  const colorChange = (idName) => {
    setActivateLink(idName);
    };
    
  //make link and params for  get data
    const broken_link = activateLink.split("/");
    console.log(location.pathname);

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
      </ul>
    </div>
  );
};

export default NewsNav;
