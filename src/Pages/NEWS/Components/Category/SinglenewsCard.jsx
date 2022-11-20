import React from "react";
import { Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "../../News.module.css"
const SinglenewsCard = ({ article }) => {
  // console.log(article);
  const newUrl = article.url.split("/")[4];
  const dateTime = article.publishedAt.split("T");
  return (
    <Col>
      <NavLink
        to={`/news/details/${newUrl}`}
        className="text-white text-decoration-none"
      >
        <div className={`card mb-3 ${styles.single_card_wrapper}`}>
          <div className="row g-0">
            <div className="col-md-5">
              <img
                className="img-fluid rounded-start"
                src={`${article.mainMedia.gallery.url}`}
                alt=""
              />
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>

                <p className="card-text">
                  <small className="text-white">
                    <span className="me-2 text-white">Date: {dateTime[0]}</span> Time:
                    {dateTime[1].split("+")[0]}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </NavLink>
    </Col>
  );
};

export default SinglenewsCard;
