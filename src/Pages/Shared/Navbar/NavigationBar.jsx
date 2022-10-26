import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
const NavigationBar = () => {
  return (
    <>
      <Navbar className={`${styles.navBar_wrapper}`} expand="lg" variant="dark">
        <Container>
          <Navbar.Brand>
            <NavLink to="/home">
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
                <NavLink to="/home" className={`${styles.nav_link}`}>
                  Home
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/news" className={`${styles.nav_link}`}>
                  News
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/sports" className={`${styles.nav_link}`}>
                  Sports
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/about" className={`${styles.nav_link}`}>
                  About
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/about" className={`${styles.nav_link}`}>
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
