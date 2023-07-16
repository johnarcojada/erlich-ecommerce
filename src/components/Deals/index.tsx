import React from 'react';
import BEMHelper from 'react-bem-helper';
import 'components/Deals/_deals.scss';
import Button from 'components/Button';

const className = BEMHelper('deals-section');

const Deals: React.FC = () => {
  return (
    <div {...className('')}>
      <div {...className('deals-item-wrapper')}>
        <div {...className('deals-item')}>
          <div {...className('deals-item-label')}>
            <span className="deals-item-label-price">$5</span>
            <span className="deals-item-sub-label">Off</span>
          </div>
          <span {...className('deals-item-description')}>
            On orders above $50
          </span>
        </div>
        <div {...className('deals-item')}>
          <div {...className('deals-item-label')}>
            <span className="deals-item-label-price">$5</span>
            <span className="deals-item-sub-label">Off</span>
          </div>
          <span {...className('deals-item-description')}>
            On orders above $50
          </span>
        </div>
        <div {...className('deals-item')}>
          <div {...className('deals-item-label')}>
            <span className="deals-item-label-price">$5</span>
            <span className="deals-item-sub-label">Off</span>
          </div>
          <span {...className('deals-item-description')}>
            On orders above $50
          </span>
        </div>
        <div {...className('deals-item')}>
          <div {...className('deals-item-label')}>
            <span className="deals-item-label-price">$5</span>
            <span className="deals-item-sub-label">Off</span>
          </div>
          <span {...className('deals-item-description')}>
            On orders above $50
          </span>
        </div>
      </div>
      <div {...className('deals-item-button')}>
        <Button variant="black">Check out all site-wide deals</Button>
      </div>
    </div>
  );
};

export default Deals;
