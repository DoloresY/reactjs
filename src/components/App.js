require('normalize.css/normalize.css');

import React from 'react';
import {BrowserRouter as Router, Route,Link } from 'react-router-dom';

import Header from './Header';
import IndexList from './Index.js';
import About from './About.js';

class AppComponent extends React.Component {
  render() {
	 	return (
	     	<div className="newsList">
	       		<Header/>
	       		<Router>
	       			<div>
	       				<Route path="/index" component={IndexList}/>
								<Route path="/about" component={About}/>
							</div>
						</Router>
	     	</div>
	     );
	}
}

AppComponent.defaultProps = {
};



export default AppComponent;
