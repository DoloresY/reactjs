require('styles/header.less');

import React from 'react';
import {BrowserRouter as Router, Route,Link } from 'react-router-dom';

export default class Header extends React.Component {

	getLogo() {
		return (
			<Router>
				<div className="header-logo">
					<Link to="/index">Index</Link>
				</div>
			</Router>
		);
	}

	getNav() {
		var navLinks = [
			 {
				name: '首页',
				url: 'index'
			 },
			 {
			   name: '分类',
			   url: 'categories'
			 },
			 {
			   name: '归档',
			   url: 'archives'
			 },
			 {
			   name: '关于',
			   url: 'about'
			 }
		];

		return (
			<div className="headerNav">
				{
					navLinks.map(function(navLink){
						return (
								<a key={navLink.url} className="navLink" href={ navLink.url }>
									{ navLink.name }
								</a>
						);
					})
				}
			</div>
		);
	}
	
	render() {
		return (
			<div className="header">
				<div className="header_wrap">
					{this.getNav()}
					{this.getLogo()}
				</div>
			</div>
		);
	}
}