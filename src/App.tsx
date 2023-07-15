import React from 'react';
import Hero from 'components/Hero';
import Navbar from 'components/Navbar';
import Deals from 'components/Deals';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Deals />
    </>
  );
};

export default App;
