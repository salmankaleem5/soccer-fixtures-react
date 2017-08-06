import React, { Component } from 'react';
import './Fixture.css';

class Fixture extends Component {
	constructor(props){
		super(props);
		this.fixture = props.fixture;
	}

	render(){
		return (
			<li className="FixtureItem">
				<p>{this.fixture['home']} vs {this.fixture['away']}</p>
			</li>
		);
	}
}

export default Fixture;