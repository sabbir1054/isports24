import React from "react";
import Slider from "react-slick";
const UpComingSlider = () => {
  const settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: true,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          //   slidesToShow: 2,
          //   slidesToScroll: 2,
          //   initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div>
        <Slider {...settings}>
          <div>
            <img src="/assets/photos/up1.jpg" alt="" srcset="" width={200} />
          </div>
          <div>
            <img src="/assets/photos/up2.jpg" alt="" srcset="" width={200} />
          </div>
          <div>
            <img src="/assets/photos/up3.png" alt="" srcset="" width={200} />
          </div>
          <div>
            <img src="/assets/photos/up1.jpg" alt="" srcset="" width={200} />
          </div>
          <div>
            <img src="/assets/photos/up2.jpg" alt="" srcset="" width={200} />
          </div>
          <div>
            <img src="/assets/photos/up4.png" alt="" srcset="" width={200} />
          </div>
          <div>
            <img src="/assets/photos/up3.png" alt="" srcset="" width={200} />
          </div>
          <div>
            <img src="/assets/photos/up1.jpg" alt="" srcset="" width={200} />
          </div>
          <div>
            <img src="/assets/photos/up5.png" alt="" srcset="" width={200} />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default UpComingSlider;
