import React, { Component } from 'react';
import './Fixture.css';

class Fixture extends Component {
	constructor(props){
		super(props);
		this.fixture = props.data;
	}

	render(){
		return (
			<li className="FixtureItem">
				<p>{this.fixture.date}</p>
				<div>
					<p>{this.fixture[0]} vs {this.fixture[1]}</p>
				</div>
			</li>
		);
	}
}

export default Fixture;