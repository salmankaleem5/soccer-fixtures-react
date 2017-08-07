import React, { Component } from 'react';
import Fixture from './Fixture';

class MatchRound extends Component {
	constructor(props){
		super(props);
		this.state = {
			roundDate: props.round_data.date,
			fixtures: props.round_data.fixtures,
		};
	}

	render(){
		const fixtures = this.state.fixtures.map( (fixture, i) =>
			<Fixture key={i} fixture={fixture} team_selected={this.props.team_selected}></Fixture>
		);
		return (
			<div>
				<p>{this.state.roundDate}</p>
				<div>
					<ul>{fixtures}</ul>
				</div>
			</div>
		);
	}
}

export default MatchRound;