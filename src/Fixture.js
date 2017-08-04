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
				<div>
					<p>{this.fixture[0]} vs {this.fixture[1]}</p>
				</div>
			</li>
		);
	}
}

export default Fixture;