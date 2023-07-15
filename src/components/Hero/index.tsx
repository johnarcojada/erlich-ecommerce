import React from 'react';
import BEMHelper from 'react-bem-helper';
import Button from 'components/Button';
import {
  HeroBgDesktop,
  HeroPromo,
  IconCrown,
  IconStar,
  IconShipping,
  IconLocation,
  IconTag,
  IconChevronLeftWhite,
  IconChevronRightWhite,
} from 'assets/images';
import 'components/Hero/_hero.scss';

const className = BEMHelper('hero');

const Hero: React.FC = () => {
  return (
    <div {...className('')}>
      <div {...className('hero-ribbon')}>
        <div {...className('hero-ribbon-item-wrapper')}>
          <img src={IconCrown} alt="Icon Crown" />
          <span>Exclusive Deals for VIP 2 and up!</span>
        </div>
        <div {...className('hero-ribbon-item-wrapper')}>
          <img src={IconStar} alt="Icon Star" />
          <span>Weekly New Arrivals</span>
        </div>
        <div {...className('hero-ribbon-item-wrapper')}>
          <img src={IconShipping} alt="Icon Shipping" />
          <span>Free Shipping On Orders Over $100</span>
        </div>
        <div {...className('hero-ribbon-item-wrapper')}>
          <img src={IconLocation} alt="Icon Location" />
          <span>Track Your Order</span>
        </div>
        <div {...className('hero-ribbon-item-wrapper')}>
          <img src={IconTag} alt="Icon Tag" />
          <span>10% Off On Your First Order!</span>
        </div>
      </div>
      <img
        src={HeroBgDesktop}
        {...className('hero-bg-desktop')}
        alt="Hero Desktop"
      />
      <div {...className('hero-promo-container')}>
        <div {...className('hero-promo-wrapper')}>
          <img src={HeroPromo} alt="Hero Promo" />
          <div {...className('hero-promo-btn-wrapper')}>
            <Button size="large" variant="white">
              Shop Now
            </Button>
          </div>
        </div>
      </div>
      <div {...className('hero-slider-nav')}>
        <span className="slider-nav-arrow prev">
          <img src={IconChevronLeftWhite} alt="Slider Prev Icon" />
        </span>
        <div className="slider-nav-list">
          <span className="slider-nav-list-item"></span>
          <span className="slider-nav-list-item"></span>
        </div>
        <span className="slider-nav-arrow next">
          <img src={IconChevronRightWhite} alt="Slider Prev Icon" />
        </span>
      </div>
    </div>
  );
};

export default Hero;
