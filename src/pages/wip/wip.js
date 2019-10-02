import React, {useEffect} from 'react';
import './wip.scss';
import {Link} from 'react-router-dom';
import {ROUTES} from '../../constants';
import {scrollToClass} from "../../utils/utils";

export default() => {

  useEffect(() => {
    setTimeout(() => {
      scrollToClass('page');
    }, 100);
  });

  return (
    <div className="wip-page page">
      <div className="wip-page__legend">
        <h1>
          This page is still in progress
        </h1>
        <Link to={ROUTES.HOME}>
          Go to home page</Link>
        <div className="wip-page__gif"></div>
      </div>
    </div>
  )
};
