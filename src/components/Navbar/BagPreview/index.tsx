import React from 'react';
import BEMHelper from 'react-bem-helper';
import 'components/Navbar/BagPreview/_bagPreview.scss';
import Tag from 'components/Tag';
import Button from 'components/Button';
import { useNavigate } from 'react-router-dom';
import useCart from 'utils/useCart';

const className = BEMHelper('bag-preview');

const BagPreview: React.FC = () => {
  const { items, quantity, subtotal } = useCart();
  const navigate = useNavigate();
  return (
    <div {...className('')}>
      <div {...className('item-list')}>
        {items.map(item => (
          <div {...className('item')}>
            <div {...className('item-image-wrapper')}>
              <img
                src={item.product?.image}
                alt="Festive Looks Rust Red Ribbed Velvet Long Sleeve Bodysuit"
              />
            </div>
            <div {...className('item-details')}>
              <span {...className('item-detail-tag-wrapper')}>
                <Tag variant="secondary" size="small">
                  Best seller
                </Tag>
              </span>
              <span {...className('item-detail', ['name'])}>
                {item.product?.name}
              </span>
              <span {...className('item-detail', ['brand'])}>
                Bronx and Banco
              </span>
              <span {...className('item-detail', ['size'])}>
                Size: {item.product?.size}
              </span>
              <span {...className('item-detail', ['color'])}>
                Color: Multicolor
              </span>
              <span {...className('item-detail', ['qty'])}>
                Qty: {item.quantity}
              </span>
              <span {...className('item-detail', ['price'])}>
                {((item.product?.price || 0) * item.quantity).toLocaleString(
                  undefined,
                  { maximumFractionDigits: 2 }
                )}{' '}
                Php
              </span>
            </div>
          </div>
        ))}
      </div>
      <div {...className('summary')}>
        <div {...className('summary-detail')}>
          <a
            href="#"
            onClick={() => navigate('/cart')}
            {...className('summary-detail-text', ['link'])}
          >
            My Bag ({quantity})
          </a>
          <span {...className('summary-detail-text', ['price'])}>
            {subtotal.toLocaleString(undefined, { maximumFractionDigits: 2 })}{' '}
            Php
          </span>
        </div>
        <Button onClick={() => navigate('/cart')}>Begin Checkout</Button>
      </div>
    </div>
  );
};

export default BagPreview;
