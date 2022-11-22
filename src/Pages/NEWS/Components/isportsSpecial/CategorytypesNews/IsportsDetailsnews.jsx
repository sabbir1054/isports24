import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import SideBarNews from "../../../../Home/Components/SideBarNews/SideBarNews";
import Loader from "../../../../Loader/Loader";
import { cricket_news_id, football_news_id } from "../../../../Shared/apikey";
import NavigationBar from "../../../../Shared/Navbar/NavigationBar";
import styles from "../../../News.module.css";
const IsportsDetailsnews = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[3];

  const [iSports10, setisports10] = useState({});

  useEffect(() => {
    const access_token = "b123e083993d4e5a0898908e27b0118df728793f";

    axios
      .get(`https://api.isports24.net/api/all_content_api/${id}`, {
        headers: {
          Authorization: `Token ${access_token}`,
        },
      })
      .then((res) => {
        // const getCData = res.data.filter((item) => item.id == id);
        // setisports10(getCData[0]);
        setisports10(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log(iSports10);
  return (
    <div className={styles.newsDetails_wrapper}>
      <NavigationBar />
      <hr className="text-white" />
      <Container>
        <Row className="w-100 g-0">
          <Col lg={8}>
            {iSports10?.id ? (
              <div>
                {" "}
                <div className="d-flex justify-content-center">
                  <div className={`news_header  py-2`}>
                    <h1 className="fw-bold text-start mb-3 mt-5">
                      {iSports10?.title}
                    </h1>
                    {/* Author logo */}
                    {/* <img
                      src={`https://www.livescore.com${iSports10.image}`}
                      alt=""
                    /> */}
                    <p className="text-white py-0 d-inline-block ms-2 fw-bold">
                      {/* {data?.article?.publishedBy?.name}{" "} */}
                    </p>
                    <p className="text-white  text-start py-0">
                      <span className="fw-bold">Publish Date:</span>{" "}
                      {iSports10.uploaded.split("T")[0]}
                    </p>
                    <hr className="text-secondary" />
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  {iSports10.have_any_video === true ? (
                    <iframe
                      width="720"
                      height="415"
                      src={`${iSports10.video}`}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  ) : (
                    <img
                      src={`${iSports10.image}`}
                      className={`img-fluid rounded ${styles.news_img}`}
                      alt=""
                      srcset=""
                    />
                  )}
                </div>
                <div className={`text-white   d-flex justify-content-center`}>
                  <div className={`p-4 ${styles.news_body}`}>
                    <p className="fs-5">{iSports10.details}</p>
                  </div>
                </div>{" "}
              </div>
            ) : (
              <Loader />
            )}
          </Col>
          <Col lg={4} className={`${styles.sidebar_bg} g-0`}>
            <Container>
              {iSports10?.id == 1 ? (
                <SideBarNews id={cricket_news_id} iId={iSports10.category} />
              ) : iSports10?.id == 2 ? (
                <SideBarNews id={football_news_id} iId={iSports10.category} />
              ) : (
                <SideBarNews id={football_news_id} iId={iSports10.category} />
              )}
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default IsportsDetailsnews;
