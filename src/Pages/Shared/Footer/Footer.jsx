import React from "react";
import { Container } from "react-bootstrap";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer_bg}>
      <Container className="py-5">
        <hr className="text-white" />
        <p className="text-center fw-bold text-while">isports24.com</p>
        <p className="text-center  text-while">
          We provide you all kind of latest football and cricket score and news
          . We always try to updated our system. Feel free to give us feedback.
        </p>
        <p className="text-center  text-while">
          ©2022-2023 isports24.com All rights reserved
        </p>
      </Container>
    </div>
  );
};

export default Footer;
