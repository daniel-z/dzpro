import React from 'react';
import ParticlesComponent from '../components/particles/particles-component';

import './home.scss';

const Home = () => (
  <div className="home-page">
    <ParticlesComponent id={'particles-home'} />
    <div className="row">
      <div className="six column">
        <h1 className='home-page__title'> Daniel Zamorano </h1>
        <h4 className='home-page__subtitle'> Work in progress </h4>
      </div>
    </div>
  </div>
);

export default Home;