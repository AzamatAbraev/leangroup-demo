import { Component } from "react";
import "./Footer.scss";
import logo from "../../assets/images/footer-logo.svg";
import vk from "../../assets/images/vk.svg";
import facebook from "../../assets/images/facebook.svg";
import linkedin from "../../assets/images/linkedin.svg";

export class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer__top">
            <a href="#products" className="footer__home">
              <img src={logo} alt="Logo" />
            </a>
            <div className="footer__media">
              <a href="https://vk.com/">
                <img src={vk} alt="vk" />
              </a>
              <a href="https://facebook.com/">
                <img src={facebook} alt="facebook" />
              </a>
              <a href="https://linkedin.com/">
                <img src={linkedin} alt="linkedin" />
              </a>
            </div>
          </div>
          <div className="footer__content">
            <div className="footer__info">
              <div className="footer__col">
                <h3 className="footer__col__title">Продукция</h3>
                <div className="footer__col__desc">
                  <a href="#products-tab">Продукция</a>
                  <a href="#products-tab">Экструзионные тубы</a>
                  <a href="#products-tab">Другая упаковка</a>
                </div>
              </div>
              <div className="footer__col">
                <h3 className="footer__col__title">Компания</h3>
                <div className="footer__col__desc">
                  <a href="#about">О нас</a>
                  <a href="#team">Наша команда</a>
                  <a href="#certificates">Сертификаты</a>
                </div>
              </div>
              <div className="footer__col">
                <h3 className="footer__col__title">Сертификаты</h3>
                <div className="footer__col__desc">
                  <a href="#info">Контакты</a>
                  <a href="#news">Новости</a>
                  <a href="#vacancies">Вакансии</a>
                </div>
              </div>
            </div>
            <div className="footer__address">
              <div className="footer__column">
                <h3 className="footer__column__title">Беларусь</h3>
                <div className="footer__column__numbers">
                  <p>+375 (17) 270 53 77</p>
                  <p>+375 (17) 270 53 78</p>
                </div>
              </div>
              <div className="footer__column">
                <h3 className="footer__column__title">Европа</h3>
                <div className="footer__column__numbers">
                  <p>+48 73 1111 044</p>
                </div>
              </div>
              <div className="footer__column">
                <h3 className="footer__column__title">Москва</h3>
                <div className="footer__column__numbers">
                  <p>+7 (495) 280 73 44</p>
                  <p>+7 (495) 280 73 44</p>
                </div>
              </div>
              <div className="footer__column">
                <h3 className="footer__column__title">Екатеринбург</h3>
                <div className="footer__column__numbers">
                  <p>+7 (343) 346 82 06</p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <p className="footer__copyright">
              © 2022 Leangroup. All Rights Reserved. Разработка и продвижение
              сайтов SkyWeb.by
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
