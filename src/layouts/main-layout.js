import React from 'react';
import './main-layout.scss';
import Footer from '../shared/footer/footer';

export default(props) => (
  <div className='container'>
    {props.children}
    <Footer/>
  </div>
);