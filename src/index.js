import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Products from './components/products/Products';
import About from './components/about/About';
import Certificates from './components/certificates/Certificates';
import ProductsTab from './components/products-tab/ProductsTab';
import Form from './components/form/Form';
import Team from './components/team/Team';
import News from './components/news/News';
import Backtop from './components/backtop/Backtop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Fragment>
    <App/>
    <Backtop/>
    <Header />
    <Products/>
    <About/>
    <Certificates/>
    <ProductsTab/>
    <Form/>
    <Team/>
    <News/>
    <Footer/>
  </Fragment>
);