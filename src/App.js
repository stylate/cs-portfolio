import React from 'react'
import Texture from './components/Texture'
import Header from './components/Header'
import Splash from './components/Splash'
import './layout/styles.scss'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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