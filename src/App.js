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
      <MediaQuery minWidth={769}>
        <Texture />
      </MediaQuery>
    </Layout>
  );

  // return (
  //   <div className="main">
  //     <div className="splash">
  //       {Header}
  //       {Splash}
  //     </div>
  //     <div className="display">
  //       <Texture/>
  //     </div>
  //   </div>
  // );
};

export default App;