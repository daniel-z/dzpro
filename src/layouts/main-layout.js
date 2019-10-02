import React, {Fragment} from 'react';
import './main-layout.scss';
import Footer from '../shared/footer/footer';

export default(props) => (
  <Fragment>
    {props.children}
    <Footer/>
  </Fragment>
);