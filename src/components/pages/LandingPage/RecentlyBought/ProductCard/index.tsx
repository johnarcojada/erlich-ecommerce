import React from 'react';
import BEMHelper from 'react-bem-helper';
import 'components/pages/LandingPage/RecentlyBought/ProductCard/_productCard.scss';
import Button from 'components/Button';
import { IconBag } from 'assets/images';

interface Props {
  product_id: number;
  name: string;
  image: string;
  price: number;
  discount: number;
  onClick: (id: number) => void;
}

const className = BEMHelper('product-card');

const ProductCard: React.FC<Props> = ({
  product_id,
  image,
  name,
  price,
  discount,
  onClick,
}) => {
  return (
    <div {...className('')}>
      <div {...className('product-wrapper')}>
        <div {...className('product-wrapper-hover')}>
          <Button variant="white" onClick={() => onClick(product_id)}>
            <div {...className('button-wrapper')}>
              <img src={IconBag} alt="Icon Bag" />
              Add to Bag
            </div>
          </Button>
        </div>
        <img src={image} alt={name} {...className('image')} />
      </div>
      <span {...className('name')}>{name}</span>
      <div {...className('price-wrapper')}>
        <span {...className('price')}>${price}</span>
        {discount !== 0 && <span {...className('discount')}>${discount}</span>}
      </div>
    </div>
  );
};

export default ProductCard;
