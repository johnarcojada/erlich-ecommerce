import React from 'react';
import Hero from 'components/Hero';
import Navbar from 'components/Navbar';
import Deals from 'components/Deals';
import VipExclusive from 'components/VipExclusive';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Deals />
      <VipExclusive />
    </>
  );
};

export default App;
