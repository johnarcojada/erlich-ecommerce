import React from 'react';
import BEMHelper from 'react-bem-helper';
import 'components/pages/LandingPage/VipExclusive/_vipExclusive.scss';
import Button from 'components/Button';

const className = BEMHelper('vip-exclusive-section');

const VipExclusive: React.FC = () => {
  return (
    <div {...className('')}>
      <div {...className('wrapper')}>
        <span className="vip-section-header">Black Friday Exclusive</span>
        <span className="vip-section-subheader">
          Free shipping on all orders for vip 2 and up!
        </span>
        <div {...className('button')}>
          <Button variant="white">Shop now</Button>
        </div>
      </div>
    </div>
  );
};

export default VipExclusive;
