import React, { Component } from "react";
import Slider from "react-slick";
import "./Products.scss";

export class Products extends Component {
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
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };
    return (
      <section className="products" id="products">
        <Slider ref={(slider) => (this.slider = slider)} {...settings}>
          <div className="slide1 slide">
            <div className="container products__container">
              <div className="slide__content">
                <h3 className="slide__subtitle">LEANGROUP - тубы и этикетки</h3>
                <h2 className="slide__title">Ламинатные тубы</h2>
                <p className="slide__desc">
                  Используются для производства зубных паст. Широко применяются
                  в сегменте косметики, пищевой индустрии, парафармацевтике,
                  бытовой химии и DIY (Do-it-Yourself).
                </p>
                <button className="slide__btn">Каталог</button>
              </div>
            </div>
          </div>
          <div className="slide2 slide">
            <div className="container products__container">
              <div className="slide__content">
                <h3 className="slide__subtitle">LEANGROUP - тубы и этикетки</h3>
                <h2 className="slide__title">Экструзионные тубы</h2>
                <p className="slide__desc">
                  Экструзионные тубы применяются для упаковки и продвижения
                  более дорогих продуктов, в основном в косметической отрасли.
                </p>
                <button className="slide__btn">Каталог</button>
              </div>
            </div>
          </div>
          <div className="slide3 slide">
            <div className="container products__container">
              <div className="slide__content">
                <h3 className="slide__subtitle">LEANGROUP - тубы и этикетки</h3>
                <h2 className="slide__title">Другая упаковка</h2>
                <p className="slide__desc">
                  Широко применяются в сегменте косметики, пищевой индустрии,
                  парафармацевтике, бытовой химии и DIY (Do-it-Yourself).
                </p>
                <button className="slide__btn">Каталог</button>
              </div>
            </div>
          </div>
        </Slider>
      </section>
    );
  }
}

export default Products;
