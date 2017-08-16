import React from 'react';
import { DatePicker, message, Card } from 'antd';

export default class IndexList extends React.Component {
	
	constructor(props) {
	    super(props);
	    this.state = {
	      date: '',
	    };
	}
	handleChange(date) {
	    message.info('您选择的日期是: ' + date.toString());
	    this.setState({ date });
	}
	
	render() {
	    return (
	      <div style={{ width: 400, margin: '100px auto' }}>
	      	<Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
			    <div className="custom-image">
			      <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
			    </div>
			    <div className="custom-card">
			      <h3>Europe Street beat</h3>
			      <p>www.instagram.com</p>
			    </div>
			</Card>
			
	        <DatePicker onChange={value => this.handleChange(value)} />
	        <div style={{ marginTop: 20 }}>当前日期：{this.state.date.toString()}</div>
	      </div>
	    );
	}

}