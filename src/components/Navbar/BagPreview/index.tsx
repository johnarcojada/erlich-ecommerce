import React from 'react';
import BEMHelper from 'react-bem-helper';
import 'components/Navbar/BagPreview/_bagPreview.scss';
import Tag from 'components/Tag';
import { RecentlyBought1 } from 'assets/images';
import Button from 'components/Button';

const className = BEMHelper('bag-preview');

const BagPreview: React.FC = () => {
  return (
    <div {...className('')}>
      <div {...className('item-list')}>
        <div {...className('item')}>
          <div {...className('item-image-wrapper')}>
            <img
              src={RecentlyBought1}
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
              Festive Looks Rust Red Ribbed Velvet Long Sleeve Bodysuit
            </span>
            <span {...className('item-detail', ['brand'])}>
              Bronx and Banco
            </span>
            <span {...className('item-detail', ['size'])}>Size: S</span>
            <span {...className('item-detail', ['color'])}>
              Color: Multicolor
            </span>
            <span {...className('item-detail', ['qty'])}>Qty: 1</span>
            <span {...className('item-detail', ['price'])}>1,444 Php</span>
          </div>
        </div>
        <div {...className('item')}>
          <div {...className('item-image-wrapper')}>
            <img
              src={RecentlyBought1}
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
              Festive Looks Rust Red Ribbed Velvet Long Sleeve Bodysuit
            </span>
            <span {...className('item-detail', ['brand'])}>
              Bronx and Banco
            </span>
            <span {...className('item-detail', ['size'])}>Size: S</span>
            <span {...className('item-detail', ['color'])}>
              Color: Multicolor
            </span>
            <span {...className('item-detail', ['qty'])}>Qty: 1</span>
            <span {...className('item-detail', ['price'])}>1,444 Php</span>
          </div>
        </div>
      </div>
      <div {...className('summary')}>
        <div {...className('summary-detail')}>
          <a href="#" {...className('summary-detail-text', ['link'])}>
            My Bag (2)
          </a>
          <span {...className('summary-detail-text', ['price'])}>
            1,400 Php
          </span>
        </div>
        <Button>Begin Checkout</Button>
      </div>
    </div>
  );
};

export default BagPreview;
