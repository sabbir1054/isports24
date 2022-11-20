import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footer_bg}>
      <Container className="py-5">
        <hr className="text-white" />
        <Row className="mt-2">
          <Col sm={5}>
            <p className="text-center text-white fs-5 mt-2">Join with us</p>
            <div className="d-flex justify-content-center ">
              <p className={`mx-2 ${styles.social_icon}`}>
                <a
                  href="https://www.facebook.com/iSports.world24"
                  className={styles.social_icon}
                  target="blank"
                >
                  <FaFacebook />
                </a>
              </p>
              <p className={`mx-2 ${styles.social_icon}`}>
                <a
                  href="https://www.youtube.com/channel/UCxiZZPb_Hw5wROVajWfFz2Q"
                  className={styles.social_icon}
                  target="blank"
                >
                  <FaYoutube />
                </a>
              </p>
            </div>
          </Col>
          <Col sm={7}>
            {" "}
            <div className="d-flex justify-content-center">
              <img src="/assets/photos/logo2.png" alt="" width={300} />
            </div>
            <p className="text-center  text-while ">
              We provide you all kind of latest football and cricket score and
              news . We always try to updated our system. Feel free to give us
              feedback to{" "}
              <a href="mailto: info@isports24.net">
                {" "}
                Click here: info@isports24.net
              </a>
            </p>
            <p className="text-center  text-while">
              ©2022-2023 isports24.net All rights reserved
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
