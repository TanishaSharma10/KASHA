import React from 'react';
import KashaHeader from './KashaHeader';
import Sidebar from './Sidebar.js';
import Feed from './Feed.js';
import Widget from './Widgets.js';
import './css/Kasha.css';

const Kasha = () => {
  return (
    <div className="kasha">
    
      <KashaHeader/>
      <div className="quora__contents">
        <div className="quora__content">
          <Sidebar/>
          <Feed/>
          <Widget/>
        </div>
      </div>
    
    </div>
  )
}

export default Kasha