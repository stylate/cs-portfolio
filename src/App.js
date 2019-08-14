import React from 'react'
import MediaQuery from 'react-responsive';

import { Texture } from './components/Index'
import './layout/styles.scss'

import Layout from './components/Layout';
import Splash from './components/Splash';

const App = () => {
  return (
    <Layout>
      <Splash />
    </Layout>
  );
};

export default App;