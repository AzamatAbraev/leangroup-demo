import React, { Component } from "react";
import Slider from "react-slick";

import "./Team.scss";

import team1 from "../../assets/images/team-1.png";
import team2 from "../../assets/images/team-2.png";
import team3 from "../../assets/images/team-3.png";
import team4 from "../../assets/images/team-4.png";
import team5 from "../../assets/images/team-5.png";

export class Team extends Component {
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
      dots: false,
      infinite: true,
      speed: 500,
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
            autoplay: true,
            dots: false,
          },
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            infinite: true,
            autoplay: true,
            dots: false,
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
      <section className="team" id="team">
        <div className="container">
          <div className="team__header">
            <h2 className="team__title">
              Наша <span>команда</span>
            </h2>
            <Slider ref={(slider) => (this.slider = slider)} {...settings}>
              <div className="team__card">
                <div className="team__content">
                  <div className="team__img">
                    <img src={team1} alt="Team member" />
                  </div>
                  <h3 className="team__name">Войнич Дарья</h3>
                  <p className="team__position">
                    Заместитель директора по продажам
                  </p>
                  <p className="team__number">+375 (17) 270-53-77 (317)</p>
                </div>
              </div>
              <div className="team__card">
                <div className="team__content">
                  <div className="team__img">
                    <img src={team2} alt="Team member" />
                  </div>
                  <h3 className="team__name">Мисько Екатерина</h3>
                  <p className="team__position">
                    Начальник отдела сопровождения
                  </p>
                  <div>
                    <p className="team__number">+375 (17) 270-53-77 (115)</p>
                    <p className="team__number"> +375 29 112-73-48</p>
                  </div>
                  <p className="team__email">k.melnichenko@leangroup.by</p>
                </div>
              </div>
              <div className="team__card">
                <div className="team__content">
                  <div className="team__img">
                    <img src={team3} alt="Team member" />
                  </div>
                  <h3 className="team__name">Дмитроченко Дмитрий</h3>
                  <p className="team__position">
                    Начальник отдела допечатной подготовки
                  </p>
                  <div>
                    <p className="team__number">+375 (17) 270-53-77 (333)</p>
                    <p className="team__number"> +375 29 360-32-26</p>
                  </div>
                  <p className="team__email">dmitrochenko@leangroup.by</p>
                </div>
              </div>
              <div className="team__card">
                <div className="team__content">
                  <div className="team__img">
                    <img src={team4} alt="Team member" />
                  </div>
                  <h3 className="team__name">Антух Евгений</h3>
                  <p className="team__position">Начальник отдела снабжения</p>
                  <div>
                    <p className="team__number">+375 (17) 270-53-77 (148)</p>
                    <p className="team__number"> +375 44 764-16-28</p>
                  </div>
                  <p className="team__email">j.antuh@leangroup.by</p>
                </div>
              </div>
              <div className="team__card">
                <div className="team__content">
                  <div className="team__img">
                    <img src={team5} alt="Team member" />
                  </div>
                  <h3 className="team__name">Мисник Елена</h3>
                  <p className="team__position">
                    Специалист по работе с клиентами
                  </p>
                  <div>
                    <p className="team__number">+375 (17) 270-53-77 (322)</p>
                    <p className="team__number"> +375 29 329-34-03</p>
                  </div>
                  <p className="team__email">e.misnik@leangroup.by</p>
                </div>
              </div>
              <div className="team__card">
                <div className="team__content">
                  <div className="team__img">
                    <img src={team2} alt="Team member" />
                  </div>
                  <h3 className="team__name">Мисько Екатерина</h3>
                  <p className="team__position">
                    Начальник отдела сопровождения
                  </p>
                  <div>
                    <p className="team__number">+375 (17) 270-53-77 (115)</p>
                    <p className="team__number"> +375 29 112-73-48</p>
                  </div>
                  <p className="team__email">k.melnichenko@leangroup.by</p>
                </div>
              </div>
              <div className="team__card">
                <div className="team__content">
                  <div className="team__img">
                    <img src={team4} alt="Team member" />
                  </div>
                  <h3 className="team__name">Антух Евгений</h3>
                  <p className="team__position">Начальник отдела снабжения</p>
                  <div>
                    <p className="team__number">+375 (17) 270-53-77 (148)</p>
                    <p className="team__number"> +375 44 764-16-28</p>
                  </div>
                  <p className="team__email">j.antuh@leangroup.by</p>
                </div>
              </div>
            </Slider>
            <div className="team__btn">
              <button>Наша команда</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Team;
