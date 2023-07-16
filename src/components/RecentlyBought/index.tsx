import React from 'react';
import BEMHelper from 'react-bem-helper';
import 'components/RecentlyBought/_recentlyBought.scss';
import ProductCard from './ProductCard';
import { products, Product } from 'utils/data';
import useCart from 'utils/useCart';

const className = BEMHelper('recently-bought-section');

const RecentlyBought: React.FC = () => {
  const { addItem } = useCart();
  return (
    <div {...className('')}>
      <h1 {...className('title')}>Recently Bought</h1>
      <div {...className('product-list')}>
        {products.map(
          ({ product_id, name, image, price, discount }: Product) => (
            <ProductCard
              product_id={product_id}
              name={name}
              image={image}
              price={price}
              discount={discount}
              onClick={(product_id: number) => addItem(product_id)}
            />
          )
        )}
      </div>
    </div>
  );
};

export default RecentlyBought;
