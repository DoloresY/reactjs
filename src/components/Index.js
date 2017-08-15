import React from 'react';

export default class IndexList extends React.Component {
	
	getList() {
		return (
			<div className="list">
				内容1
			</div>
		)
	}
	render() {
	 return (
	     <div className="wrap">
	       {this.getList()}
	     </div>
	     );
	}

}