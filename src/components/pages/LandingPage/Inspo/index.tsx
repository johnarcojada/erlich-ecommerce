import React from 'react';
import BEMHelper from 'react-bem-helper';
import 'components/pages/LandingPage/Inspo/_inspo.scss';
import {
  InstaImg1,
  InstaImg2,
  InstaImg3,
  InstaImg4,
  InstaImg5,
} from 'assets/images';
import Button from 'components/Button';

const className = BEMHelper('inspo-section');

const inspoImgs = [InstaImg1, InstaImg2, InstaImg3, InstaImg4, InstaImg5];

const Inspo: React.FC = () => {
  const items = [];
  return (
    <div {...className('')}>
      <div {...className('header')}>
        <h1 {...className('title')}>Your Next Inspo</h1>
        <p {...className('subtitle')}>
          Checkout who’s wearing what by using #THREADEDInspo on Instagram
        </p>
      </div>
      <div {...className('body')}>
        {inspoImgs.map(image => (
          <div {...className('inspo-image-wrapper')}>
            <img src={image} alt="Inspo Image" />
          </div>
        ))}
      </div>
      <div {...className('button-wrapper')}>
        <Button>View all post</Button>
      </div>
    </div>
  );
};

export default Inspo;
