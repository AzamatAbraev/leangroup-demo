import React, { Component } from "react";
import Slider from "react-slick";

import "./Certificates.scss";

import certificate1 from "../../assets/images/certificate-1.png";
import certificate2 from "../../assets/images/certificate-2.png";
import certificate3 from "../../assets/images/certificate-3.png";
import certificate4 from "../../assets/images/certificate-4.png";
import certificate5 from "../../assets/images/certificate-5.png";

export class Certificates extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 300,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <section className="certificates" id="certificates">
        <div className="container">
          <div className="certificates__header">
            <h2 className="certificates__title">
              Качество продукции подтверждают <span>сертификаты</span>
            </h2>
          </div>
          <Slider ref={(slider) => (this.slider = slider)} {...settings}>
            <div className="slide">
              <img src={certificate1} alt="Certificate" />
            </div>
            <div className="slide">
              <img src={certificate2} alt="Certificate" />
            </div>
            <div className="slide">
              <img src={certificate3} alt="Certificate" />
            </div>
            <div className="slide">
              <img src={certificate4} alt="Certificate" />
            </div>
            <div className="slide">
              <img src={certificate5} alt="Certificate" />
            </div>
            <div className="slide">
              <img src={certificate1} alt="Certificate" />
            </div>
            <div className="slide">
              <img src={certificate2} alt="Certificate" />
            </div>
          </Slider>
        </div>
      </section>
    );
  }
}

export default Certificates;
