import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FcCalendar } from "react-icons/fc";
import { GoSearch } from "react-icons/go";

import { NavLink, useLocation } from "react-router-dom";
import AllFMatches from "../AllMatches/AllFMatches";
import styles from "./DateNavBar.module.css";
import {
  day1Nav,
  day1Str,
  day2Str,
  day3Str,
  day4Str,
  day5Nav,
  day5Str,
} from "./MakeDate";

const DateNavBar = () => {
  const location = useLocation();
  const path = location.pathname;
  const [activateLink, setActivateLink] = useState(`${location.pathname}`);
  /* Modal Calendar */
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [value, onChange] = useState(new Date());
  //custom date select
  const dateString =
    String(value.getFullYear()) +
    String(value.getMonth() + 1) +
    String(value.getDate());

  const colorChange = (idName) => {
    setActivateLink(idName);
  };
  //make link and params for  get data
  const broken_link = activateLink.split("/");



  useEffect(() => {
    if (location.pathname==="/") {
      setActivateLink("/football/list-live")
    } else {
      //set color
      setActivateLink(location.pathname);
    }
    
   
  }, [activateLink, value]);
  // console.log(dateString);

  return (
    <div>
      <ul className="list-unstyled d-flex mt-3">
        <li onClick={() => colorChange("list-live")}>
          <NavLink
            to="/football/list-live"
            id="list-live"
            className={`btn text-secondary ${
              activateLink === "/football/list-live"
                ? styles.active
                : styles.dateNav_link
            }`}
          >
            Live
          </NavLink>
        </li>
        <li onClick={() => colorChange("day1")} className={styles.nav_DAY1}>
          <NavLink
            to={`/football/allMatches/${day1Str}`}
            id="day1"
            className={`btn text-secondary ${
              activateLink === `/football/allMatches/${day1Str}`
                ? styles.active
                : styles.dateNav_link
            }`}
          >
            {day1Nav[0] + ` ` + day1Nav[2] + ` ` + day1Nav[1]}
          </NavLink>
        </li>
        <li onClick={() => colorChange("day2")}>
          <NavLink
            to={`/football/allMatches/${day2Str}`}
            id="day2"
            className={`btn text-secondary ${
              activateLink === `/football/allMatches/${day2Str}`
                ? styles.active
                : styles.dateNav_link
            }`}
          >
            Yesterday
          </NavLink>
        </li>
        <li onClick={() => colorChange("day3")}>
          <NavLink
            to={`/football/allMatches/${day3Str}`}
            id="day3"
            className={`btn text-secondary ${
              activateLink === `/football/allMatches/${day3Str}`
                ? styles.active
                : styles.dateNav_link
            }`}
          >
            Today
          </NavLink>
        </li>
        <li onClick={() => colorChange("day4")} className={styles.nav_DAY4}>
          <NavLink
            to={`/football/allMatches/${day4Str}`}
            id="day4"
            className={`btn text-secondary ${
              activateLink === `/football/allMatches/${day4Str}`
                ? styles.active
                : styles.dateNav_link
            }`}
          >
            Tomorrow
          </NavLink>
        </li>
        <li onClick={() => colorChange("day5")} className={styles.nav_DAY5}>
          <NavLink
            to={`/football/allMatches/${day5Str}`}
            id="day5"
            className={`btn text-secondary ${
              activateLink === `/football/allMatches/${day5Str}`
                ? styles.active
                : styles.dateNav_link
            }`}
          >
            {day5Nav[0] + ` ` + day5Nav[2] + ` ` + day5Nav[1]}
          </NavLink>
        </li>
        <li onClick={() => setShow(true)} className={styles.calendar_btn}>
          <FcCalendar className="fs-3 mt-1" />
        </li>
      </ul>
      <hr className="text-white" />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Select you date</Modal.Title>
        </Modal.Header>
        <Modal.Body className=" d-flex justify-content-center">
          <Calendar onChange={onChange} value={value} className="" />
        </Modal.Body>
        <Modal.Footer>
          <NavLink to={`/football/allMatches/${dateString}`}>
            <Button variant="primary" onClick={handleClose}>
              Search <GoSearch />
            </Button>
          </NavLink>
        </Modal.Footer>
      </Modal>

      <AllFMatches />
    </div>
  );
};

export default DateNavBar;
