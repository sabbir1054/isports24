import { React, useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, redirect, useLocation } from "react-router-dom";
import styles from "./Navigation.module.css";

const NavigationBar = () => {
  const [path, setPath] = useState("football");
  const location = useLocation();

  // url location
  useEffect(() => {
    const broken_url = location.pathname.split("/");
    if (broken_url[1] == "football") {
      setPath("/football");
    } else if (broken_url[1] == "cricket") {
      setPath("/cricket");
    } else if (broken_url[1] == "news") {
      setPath("/news");
    } else if (broken_url[1] == "liveTv") {
      setPath("/liveTv");
    } else {
      setPath("/football");
    }
  }, []);
 
  return (
    <>
      <Navbar className={`${styles.navBar_wrapper}`} expand="lg" variant="dark">
        <Container>
          <Navbar.Brand>
            <NavLink to="/football/list-live">
              <img
                alt=""
                src="/assets/photos/logo.png"
                width="250"
                className="d-inline-block align-top"
              />
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link>
                <NavLink
                  to="/football/list-live"
                  className={
                    path == "/football"
                      ? `${styles.nav_link_activate}`
                      : `${styles.nav_link}`
                  }
                >
                  Football
                </NavLink>
              </Nav.Link>

              <Nav.Link>
                <NavLink
                  to="/cricket/list-live"
                  className={
                    path == "/cricket"
                      ? `${styles.nav_link_activate}`
                      : `${styles.nav_link}`
                  }
                >
                  Cricket
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  to="/news"
                  className={
                    path == "/news"
                      ? `${styles.nav_link_activate}`
                      : `${styles.nav_link}`
                  }
                >
                  News
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  to="/liveTv"
                  className={
                    path == "/liveTv"
                      ? `${styles.nav_link_activate}`
                      : `${styles.nav_link}`
                  }
                >
                  Live Tv
                </NavLink>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        
      </Navbar>
    </>
  );
};

export default NavigationBar;
