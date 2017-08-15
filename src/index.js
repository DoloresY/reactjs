import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route,Link } from 'react-router-dom';
import App from './components/App';

// Render the main component into the dom
ReactDOM.render(<App />, document.getElementById('app'));
