import React, { Component } from 'react';
import Fixture from './Fixture';

class MatchRound extends Component {
	constructor(props){
		super(props);
		this.roundDate = props.round_data.date;
		this.fixtures = props.round_data.fixtures;
	}

	render(){
		const fixtures = this.fixtures.map( (fixture, i) =>
			<Fixture key={i} fixture={fixture}></Fixture>
		);
		return (
			<div>
				<p>{this.roundDate}</p>
				<div>
					<ul>{fixtures}</ul>
				</div>
			</div>
		);
	}
}

export default MatchRound;