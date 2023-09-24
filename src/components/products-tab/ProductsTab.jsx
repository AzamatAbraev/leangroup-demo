import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import "./ProductsTab.scss";

import tab1 from "../../assets/images/tab-1.png";
import tab2 from "../../assets/images/tab-2.png";
import tab3 from "../../assets/images/tab-3.png";
import tab4 from "../../assets/images/tab-4.png";
import tab5 from "../../assets/images/tab-5.png";


export class ProductsTab extends Component {
  render() {
    return (
      <section id="products-tab" className="products__tab">
        <div className="container">
          <h1 className="products__tab__title">
            Наша <span>продукция</span>
          </h1>
          <Tabs>
            <TabList>
              <Tab>Ламинатные тубы</Tab>
              <Tab>Экструзионные тубы</Tab>
              <Tab>Другая упаковка</Tab>
            </TabList>

            <TabPanel>
              <div className="tab-slide">
                <img src={tab1} alt="Cosmetics" />
              </div>
              <div className="tab-slide">
                <img src={tab2} alt="Cosmetics" />
              </div>
              <div className="tab-slide">
                <img src={tab3} alt="Cosmetics" />
              </div>
              <div className="tab-slide">
                <img src={tab4} alt="Cosmetics" />
              </div>
              <div className="tab-slide">
                <img src={tab5} alt="Cosmetics" />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="tab-slide">
                <img src={tab3} alt="Cosmetics" />
              </div>
              <div className="tab-slide">
                <img src={tab2} alt="Cosmetics" />
              </div>
              <div className="tab-slide">
                <img src={tab4} alt="Cosmetics" />
              </div>
              <div className="tab-slide">
                <img src={tab5} alt="Cosmetics" />
              </div>
              <div className="tab-slide">
                <img src={tab1} alt="Cosmetics" />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="tab-slide">
                <img src={tab5} alt="Cosmetics" />
              </div>
              <div className="tab-slide">
                <img src={tab4} alt="Cosmetics" />
              </div>
              <div className="tab-slide">
                <img src={tab1} alt="Cosmetics" />
              </div>
              <div className="tab-slide">
                <img src={tab3} alt="Cosmetics" />
              </div>
              <div className="tab-slide">
                <img src={tab2} alt="Cosmetics" />
              </div>
            </TabPanel>
          </Tabs>
          <div className="tab-btn-container">
          <button className="tab-btn">
            Перейти в каталог
          </button>
          </div>
        </div>
      </section>
    );
  }
}

export default ProductsTab;
