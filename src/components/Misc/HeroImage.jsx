import * as React from 'react';
import '../../assets/styles/HeroImage.css';
import Img from '../../assets/images/background.jpg';

const HeroImage = () => (
  <div className="background">
    <img alt="background" src={Img} />
  </div>
);

export default HeroImage;
