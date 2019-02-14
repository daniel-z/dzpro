import React from 'react';
import ParticlesPointerTracker from '../components/particles-pointer-tracker';

import './home.scss';
import '../components/particles-pointer-tracker';

const particlesTracker = new ParticlesPointerTracker();
particlesTracker.init();

export default () => (
  <div className="home-page">
    <div className="row">
      <div className="six column">
        <h1 className='home-page__title'> Daniel Zamorano </h1>
        <h4 className='home-page__subtitle'> Work in progress </h4>
      </div>
    </div>
  </div>
);