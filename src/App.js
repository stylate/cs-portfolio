import React from 'react'
import Texture from './components/Texture'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="main">
      <div className="splash">
      </div>
      <div className="display">
        <Texture/>
      </div>
    </div>
  );
};

export default App;