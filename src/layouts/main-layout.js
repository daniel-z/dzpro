import React from 'react';
import './main-layout.scss';
import Header from '../shared/header/header';
import Footer from '../shared/footer/footer';

export default (props) => (
  <div className='container'>
    <Header />
      { props.children }
    <Footer />
  </div>
);