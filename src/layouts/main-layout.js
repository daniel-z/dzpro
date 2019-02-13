import React from 'react';
import './main-layout.scss';
import Header from '../shared/header/header';
import Footer from '../shared/footer/footer';
import MainNavigation from '../shared/main-navigation/main-navigation';

export default (props) => (
  <div>
    <MainNavigation />
    <Header />
    <div className="container">
      { props.children }
    </div>
    <Footer />
  </div>
);