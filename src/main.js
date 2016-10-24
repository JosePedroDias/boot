// @flow

import React from 'react';
import ReactDOM from 'react-dom';



import configuration from 'services/configuration';

import Hello from 'views/Hello.jsx';



// const n = configuration() * 3; // flow breaks due to different types
const n = Number( configuration() ) * 3;



console.log(`n = ${n}`);


const mountNode = document.querySelector('#root');
ReactDOM.render(<Hello name="Jane" />, mountNode);
