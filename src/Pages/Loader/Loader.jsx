import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div
      className="d-flex justify-content-center mt-5"
      style={{ height: "100vh" }}
    >
      <Spinner animation="border" variant="light" />
    </div>
  );
};

export default Loader;
