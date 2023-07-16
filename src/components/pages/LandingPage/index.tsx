import React from 'react';
import Hero from 'components/pages/LandingPage/Hero';
import Navbar from 'components/Navbar';
import Deals from 'components/pages/LandingPage/Deals';
import VipExclusive from 'components/pages/LandingPage/VipExclusive';
import Trending from 'components/pages/LandingPage/Trending';
import NewArrivals from 'components/pages/LandingPage/NewArrivals';
import RecentlyBought from 'components/pages/LandingPage/RecentlyBought';
import Inspo from 'components/pages/LandingPage/Inspo';

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
    </>
  );
};

export default App;
