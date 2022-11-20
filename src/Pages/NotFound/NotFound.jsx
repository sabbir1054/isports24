import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NavigationBar from '../Shared/Navbar/NavigationBar';
import styles from "./Notfound.module.css"
const NotFound = () => {
    return (
      <div className={styles.NotFound_wrapper}>
        <NavigationBar />
        <Container className='d-flex justify-content-center'>
          <img src="/assets/photos/ntf.png" alt="" srcset="" />
        </Container>
      </div>
    );
};

export default NotFound;