import React from 'react'
import { Header, Splash, Texture } from './components/Index'
import './layout/styles.scss'

const App = () => {
  return (
    <div className="main">
      <div className="splash">
        {Header}
        {Splash}
      </div>
      <div className="display">
        <Texture/>
      </div>
    </div>
  );
};

export default App;