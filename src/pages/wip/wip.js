import React from 'react';
import './wip.scss';

export default() => (
  <div className="wip-page">
    <div className="wip-page__legend">
      <h1>
        This page is still in progress
      </h1>
      <a href="/">
        Go to home page</a>
      <div className="wip-page__gif"></div>
    </div>
  </div>
);
