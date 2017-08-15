import React from 'react';

export default class About extends React.Component {
	
	aboutUs() {
		return (
			<div className="about">
				关于我们
			</div>
		)
	}
	render() {
	 return (
	     <div className="wrap">
	       {this.aboutUs()}
	     </div>
	     );
	}

}