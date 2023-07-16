import React from 'react';
import BEMHelper from 'react-bem-helper';
import 'components/Trending/_trending.scss';
import TrendingCard from './TrendingCard';
import {
  WinterFashion,
  Boots,
  NightOut,
  Holidays,
  Outerwear,
  WhiteDresses,
  Sweaters,
  Party,
} from 'assets/images/index';
import TrendingTags from './TrendingTags';

const className = BEMHelper('trending-section');

const Trending: React.FC = () => {
  const trendingCards = [
    {
      name: 'Winter fashion',
      image: WinterFashion,
    },
    {
      name: 'Boots',
      image: Boots,
    },
    {
      name: 'Night out',
      image: NightOut,
    },
    {
      name: 'Holidays',
      image: Holidays,
    },
    {
      name: 'Outerwear',
      image: Outerwear,
    },
    {
      name: 'White Dresses',
      image: WhiteDresses,
    },
    {
      name: 'Sweaters',
      image: Sweaters,
    },
    {
      name: 'Party',
      image: Party,
    },
  ];

  return (
    <div {...className('')}>
      <div {...className('header')}>
        <h1 {...className('header-title')}>Now Trending</h1>
        <p {...className('header-subtitle')}>
          See what everyone's wearing right now
        </p>
      </div>
      <div {...className('body')}>
        {trendingCards.map(({ name, image }, index) => (
          <TrendingCard image={image} name={name} key={index} />
        ))}
      </div>
      <TrendingTags />
    </div>
  );
};

export default Trending;
