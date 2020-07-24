import React from 'react';
import { GlobalStyles } from './styles/global';
import { Layout } from './styles/styles';
import Globe from './components/Globe';
import Header from './components/Header';
import NEOList from './components/NearEarthObjectList';
import DataOptions from './components/DataOptions';

import AsteroidState from './context/asteroids/AsteroidState';

import Particles from './components/Particles/index';
import Footer from './components/Footer';

function App() {
  return (
    <AsteroidState>
      <Layout>
        <GlobalStyles />
        <Header />
        <Globe />
        <Particles />
        <DataOptions />
        <NEOList />
        <Footer />
      </Layout>
    </AsteroidState>
  );
}

export default App;

// Attempt to create a layout with grid, see if you can addisn gthe particles file to a specific grid area, once that is complete change its z index, place the globe over the particles
