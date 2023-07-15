import React from 'react';
import BEMHelper from 'react-bem-helper';
import 'components/NewArrivals/_newArrivals.scss';
import { NewArrivalsBg } from 'assets/images';
import Button from 'components/Button';

const className = BEMHelper('new-arrivals');

const NewArrivals: React.FC = () => {
  return (
    <div {...className('')}>
      <img src={NewArrivalsBg} alt="New Arrivals" {...className('image-bg')} />
      <div {...className('content-wrapper')}>
        <h1 {...className('title')}>New Arrivals</h1>
        <p {...className('subtitle')}>Get ready for the holidays with us!</p>
        <Button variant="white">Shop now</Button>
      </div>
    </div>
  );
};

export default NewArrivals;
