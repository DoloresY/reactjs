require('sources/styles/header.less');

import React from 'react';
import {BrowserRouter as Router, Route,Link } from 'react-router-dom';

export default class Header extends React.Component {

	getLogo = () => {
		return (
			<div className="header-logo">
				<a href="/index">Index</a>
			</div>
		);
	}

	getNav = () => {
		var navLinks = [
			 {
				name: '首页',
				url: '/index'
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
								<a key={navLink.url} href={ navLink.url }>
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