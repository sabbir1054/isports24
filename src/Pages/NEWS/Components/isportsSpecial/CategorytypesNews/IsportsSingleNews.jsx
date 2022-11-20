import React from "react";
import { Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "../../../News.module.css";

const IsportsSingleNews = ({ data }) => {
  console.log(data);
  return (
    <>
      <Col>
        <NavLink
          to={`/isportsnews/details/${data.id}`}
          className="text-white text-decoration-none"
        >
          <div className={`card mb-3 ${styles.single_card_wrapper}`}>
            <div className="row g-0">
              <div className="col-md-5">
                <img
                  className="img-fluid rounded-start"
                  src={`${data.image}`}
                  alt=""
                />
              </div>
              <div className="col-md-7">
                <div className="card-body">
                  <h5 className="card-title">{data.title}</h5>

                  <p className="card-text">
                    <small className="text-muted">
                     <span className="me-2">Date: {data.uploaded.split("T")[0]}</span> Time:
                      {data.uploaded.split("T")[1]}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </NavLink>
      </Col>
    </>
  );
};

export default IsportsSingleNews;
