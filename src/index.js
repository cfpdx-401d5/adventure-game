import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import GameApp from './GameApp.js';

import './index.css';

const makeMeCentered = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  height: '100vh',
};

let app = <GameApp/>;

ReactDOM.render(
  <div style={makeMeCentered}>
    {app}
  </div>,
  document.getElementById('root')
);

ReactDOM.render(
  <GameApp />,
  document.getElementById('root')
);

