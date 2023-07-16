import React, { useState } from 'react';
import BEMHelper from 'react-bem-helper';
import 'components/Navbar/_navbar.scss';
import {
  Logo,
  IconUser,
  IconBag,
  IconHeart,
  IconHeadset,
  IconSearch,
  IconUSFlag,
  IconChevronRight,
} from 'assets/images';
import BagPreview from './BagPreview';

const className = BEMHelper('navbar-container');

const Navbar: React.FC = () => {
  const [selectedLink, setSelectedLink] = useState('Women');
  const [isBagSelected, setIsBagSelected] = useState(false);
  const navlinks = [
    {
      label: 'Women',
      link: '#',
    },
    {
      label: 'Plus',
      link: '#',
    },
    {
      label: 'Men',
      link: '#',
    },
    {
      label: 'Accessories',
      link: '#',
    },
  ];

  const onBagIconClick = () => {};

  return (
    <div {...className('')}>
      <div {...className('left-nav')}>
        {navlinks.map(({ label, link }, index) => (
          <a
            href={link}
            key={index}
            onClick={() => setSelectedLink(label)}
            {...className('navlink', [selectedLink === label ? 'active' : ''])}
          >
            {label}
          </a>
        ))}
      </div>
      <div {...className('logo-wrapper')}>
        <img src={Logo} {...className('logo-img')} />
      </div>
      <div {...className('right-nav')}>
        <span {...className('right-nav-icon-btn')}>
          <img src={IconUser} alt="Icon User" className="right-nav-icon" />
        </span>
        <span {...className('right-nav-icon-btn')}>
          <img
            src={IconBag}
            alt="Icon Bag"
            className="right-nav-icon"
            onClick={() => setIsBagSelected(!isBagSelected)}
          />
          {isBagSelected && <BagPreview />}
        </span>
        <span {...className('right-nav-icon-btn')}>
          <img src={IconHeart} alt="Icon Heart" className="right-nav-icon" />
        </span>
        <span {...className('right-nav-icon-btn')}>
          <img
            src={IconHeadset}
            alt="Icon Headset"
            className="right-nav-icon"
          />
        </span>
        <span {...className('right-nav-icon-btn')}>
          <img src={IconSearch} alt="Icon Search" className="right-nav-icon" />
        </span>
        <button {...className('right-nav-button')}>
          <img src={IconUSFlag} alt="Icon Search" />
          <span>USD$</span>
          <img
            {...className('right-nav-button-chevron')}
            src={IconChevronRight}
            alt="Icon Chevron Right"
          />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
