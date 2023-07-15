import React from 'react';
import BEMHelper from 'react-bem-helper';
import 'components/RecentlyBought/_recentlyBought.scss';
import {
  RecentlyBought1,
  RecentlyBought2,
  RecentlyBought3,
  RecentlyBought4,
  RecentlyBought5,
} from 'assets/images';
import ProductCard from './ProductCard';

const className = BEMHelper('recently-bought-section');

const RecentlyBought: React.FC = () => {
  const products = [
    {
      name: 'Festive Looks Rust Red Ribbed Velvet Long Sleeve Bodysuit',
      image: RecentlyBought1,
      price: 38,
      discount: 0,
    },
    {
      name: 'Chevron Flap Crossbody Bag',
      image: RecentlyBought2,
      price: 5.77,
      discount: 7.34,
    },
    {
      name: 'Manilla Tan Multi Plaid Oversized Fringe Scarf',
      image: RecentlyBought3,
      price: 29,
      discount: 39,
    },
    {
      name: 'Diamante Puff Sleeve Dress - Black',
      image: RecentlyBought4,
      price: 45.99,
      discount: 0,
    },
    {
      name: 'Banneth Open Front Formal Dress in Black',
      image: RecentlyBought5,
      price: 69,
      discount: 99.95,
    },
  ];
  return (
    <div {...className('')}>
      <h1 {...className('title')}>Recently Bought</h1>
      <div {...className('product-list')}>
        {products.map(({ name, image, price, discount }) => (
          <ProductCard
            name={name}
            image={image}
            price={price}
            discount={discount}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentlyBought;
