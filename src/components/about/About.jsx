import React, { Component } from "react";
import "./About.scss";
import videoImg from "../../assets/images/video.png";
import videoBtn from "../../assets/images/video-button.svg";

export class About extends Component {
  render() {
    return (
      <section className="about" id="about">
        <div className="container">
          <div className="about__header">
            <h2 className="about__title">
              О компании <span>LEANGROUP</span>
            </h2>
          </div>
          <div className="about__main">
            <div className="about__modal">
              <img className="about__modal__video" src={videoImg} alt="Video" />
              <button className="modal__btn">
                <img src={videoBtn} alt="Video button" />
              </button>
            </div>
            <div className="about__desc">
              <p>
                Компания OOO «ЛеанГрупп» начала свою деятельность в 1999 году и
                на сегодняшний день является ведущей компанией по производству
                ламинатных и экструзионных туб.
              </p>
              <p>
                Имея две технологии - для производства ламинатных и
                экструзионных туб, мы предлагаем вам широкий спектр
                возможностей. Большим преимуществом является собственный
                печатный цех в ламинате и in-line печать в экструзии c
                возможностью различных дополнительных опций декора. Ocoбoe
                внимание уделяется работе c поставщиками для контроля и
                поддержания качества производимой нами продукции.
              </p>
              <p>
                C января 2018 года компания стала членом Европейской Ассоциации
                производителей туб (ETMA), что подтверждает сильную позицию
                бренда и на рынке Европы.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
