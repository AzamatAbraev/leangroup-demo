import React, { Component } from "react";

import "./Form.scss";

import formName from "../../assets/images/form-name.svg";
import formNumber from "../../assets/images/form-tel.svg";

export class Form extends Component {
  render() {
    return (
      <section id="info" className="info">
        <div className="container info__container">
          <div className="info__header">
            <h2 className="info__title">
              Получить подробную <span>информацию</span>
            </h2>
            <p className="info__subtitle">
              Просто заполните форму, наш менеджер свяжетсяс вами в ближайшее
              время
            </p>
          </div>
          <form className="form">
            <div className="form__row">
              <div className="form__input">
                <img src={formName} alt="Form Name" />
                <input
                  placeholder="Ваше имя"
                  className="form__name"
                  type="text"
                  required
                />
              </div>
              <div className="form__input">
                <img src={formNumber} alt="Phone Number" />
                <input
                  placeholder="+375 (29) 0000000"
                  className="form__number"
                  type="text"
                  required
                />
              </div>
            </div>
            <textarea
              placeholder="Ваше имя"
              name="comment"
              id="comment"
            ></textarea>
            <div className="form__btn">
              <button type="submit">Получить информацию</button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default Form;
