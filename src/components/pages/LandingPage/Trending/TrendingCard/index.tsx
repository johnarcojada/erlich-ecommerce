import React from 'react';
import BEMHelper from 'react-bem-helper';
import 'components/pages/LandingPage/Trending/TrendingCard/_trendingCard.scss';

interface Props {
  name: string;
  image: string;
}

const className = BEMHelper('trending-card');

const TrendingCard: React.FC<Props> = ({ name, image }) => {
  return (
    <div {...className('')}>
      <div {...className('wrapper')}>
        <img src={image} alt={name} {...className('image')} />
        <span {...className('name')}>{name}</span>
      </div>
    </div>
  );
};

export default TrendingCard;
