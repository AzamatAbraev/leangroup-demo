import React, { Component } from "react";

import "./News.scss";

import news1 from "../../assets/images/news-1.png";
import news2 from "../../assets/images/news-2.png";
import news3 from "../../assets/images/news-3.png";

export class News extends Component {
  render() {
    return (
      <section className="news" id="news">
        <div className="container">
          <h2 className="news__title">Новости</h2>
          <div className="news__row">
            <div className="news__card">
              <div className="news__img">
                <img src={news1} alt="Article" />
              </div>
              <p className="news__date">28.01.2022</p>
              <p className="news__desc">
                "ЛеанГрупп" серебряный призер EcoVadis!
              </p>
            </div>
            <div className="news__card">
              <div className="news__img">
                <img src={news2} alt="Article" />
              </div>
              <p className="news__date">28.01.2022</p>
              <p className="news__desc">
                "ЛеанГрупп" серебряный призер EcoVadis!
              </p>
            </div>
            <div className="news__card">
              <div className="news__img">
                <img src={news3} alt="Article" />
              </div>
              <p className="news__date">16.12.2021</p>
              <p className="news__desc">Туба, как вид упаковки</p>
            </div>
          </div>
          <div className="news__btn">
            <button>Bce новости</button>
          </div>
        </div>
      </section>
    );
  }
}

export default News;
