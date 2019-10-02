import React from 'react';
import './wip.scss';
import {Link} from 'react-router-dom';
import {ROUTES} from '../../constants';

export default() => (
  <div className="wip-page">
    <div className="wip-page__legend">
      <h1>
        This page is still in progress
      </h1>
      <Link to={ROUTES.HOME}>
        Go to home page</Link>
      <div className="wip-page__gif"></div>
    </div>
  </div>
);
