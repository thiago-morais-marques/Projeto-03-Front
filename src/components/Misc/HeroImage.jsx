import * as React from 'react';
import './styles/HeroImage.css';
import Img from './images/background.jpg';

const HeroImage = () => (
  <div className="background">
    <img alt="background" src={Img} />
  </div>
);

export default HeroImage;
