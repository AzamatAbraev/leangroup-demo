import React, { Component } from "react";
import "./Header.scss";
import logo from "../../assets/images/logo.svg";
import darklight from "../../assets/images/dark-light.svg";
import menu from "../../assets/images/menu.svg";

export class Header extends Component {
  state = {
    nav: false,
  }
  render() {
    const {nav} = this.state;
    const toggle = () => {
      this.setState({ nav: !nav });
    }
    const themeChange = () => {
      document.body.classList.toggle("dark");
    }
    return (
      <header>
        <nav>
          <div className="container nav__container">
            <div className="nav__logo">
              <a href="#products">
                <img src={logo} alt="Logo" />
              </a>
            </div>
            <ul className="nav__list">
              <li className="nav__list__item">
                <a href="#products" className="nav__list__link list1">
                  Продукция
                </a>
              </li>
              <li className="nav__list__item">
                <a href="#certificates" className="nav__list__link">
                  Сертификаты
                </a>
              </li>
              <li className="nav__list__item">
                <a href="#team" className="nav__list__link">
                  Наша команда
                </a>
              </li>
              <li className="nav__list__item">
                <a href="#about" className="nav__list__link">
                  О нас
                </a>
              </li>
              <li className="nav__list__item">
                <a href="#news" className="nav__list__link">
                  Новости
                </a>
              </li>
              <li className="nav__list__item">
                <a href="#vacancies" className="nav__list__link">
                  Вакансии
                </a>
              </li>
              <li className="nav__list__item">
                <a href="#info" className="nav__list__link list__last">
                  Контакты
                </a>
              </li>
            </ul>
            <div className="nav__theme">
              <button className="nav__theme__change">
                <img onClick={themeChange} src={darklight} alt="dark mode" />
              </button>
              <div className="hamburger">
                <button onClick={toggle} className="nav__open">
                  <img src={menu} alt="Menu burger" />
                </button>
              </div>
            </div>
            <div className={`nav__res ${nav ? "show" : ""}`}>
              <a className="nav__res__link">Продукция</a>
              <a className="nav__res__link">Сертификаты</a>
              <a className="nav__res__link">Наша команда</a>
              <a className="nav__res__link">О нас</a>
              <a className="nav__res__link">Новости</a>
              <a className="nav__res__link">Вакансии</a>
              <a className="nav__res__link">Контакты</a>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
