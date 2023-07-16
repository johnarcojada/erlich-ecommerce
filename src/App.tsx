import React from 'react';
import Hero from 'components/Hero';
import Navbar from 'components/Navbar';
import Deals from 'components/Deals';
import VipExclusive from 'components/VipExclusive';
import Trending from 'components/Trending';
import NewArrivals from 'components/NewArrivals';
import RecentlyBought from 'components/RecentlyBought';
import Inspo from 'components/Inspo';
import CartPage from 'components/CartPage';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Deals />
      <VipExclusive />
      <Trending />
      <NewArrivals />
      <RecentlyBought />
      <Inspo />
      <CartPage />
    </>
  );
};

export default App;
