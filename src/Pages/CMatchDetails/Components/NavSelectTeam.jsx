import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "../CMatch.module.css";
const NavSelectTeam = (props) => {
  const location = useLocation();
  const path = location.pathname;
  const [activateLink, setActivateLink] = useState("tm1");

  const colorChange = (idName) => {
    props.myFunc(idName);
    setActivateLink(idName);
  };

  return (
    <div>
      <ul className="list-unstyled d-flex mt-3">
        <li
          onClick={() => colorChange("tm1")}
          id="tm1"
          className={`btn text-secondary ${
            activateLink === "tm1" ? styles.active : styles.teamNav_link
          }`}
        >
          {props.tm1}
        </li>
        <li
          onClick={() => colorChange("tm2")}
          id="tm2"
          className={`btn text-secondary ${
            activateLink === `tm2` ? styles.active : styles.teamNav_link
          }`}
        >
          {props.tm2}
        </li>
      </ul>
    </div>
  );
};

export default NavSelectTeam;
