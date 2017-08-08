import React, { Component } from 'react';
import MatchRound from './MatchRound';
import TeamInput from './TeamInput'
import myData from './data/data.json';

class FixtureContainer extends Component {
	constructor(props){
		super(props);
		//this.state = {value:'0'};
		this.state = {value: ['0']};
		this.handleSelectChange = this.handleSelectChange.bind(this);
	}

	handleSelectChange(val){
		this.setState({ value:val });
	}

	render(){
		const val = this.state.value;
		const matchRounds = myData.map( (round_array, i) =>
			<MatchRound key={i} round_data={round_array} team_selected={val}></MatchRound>
		);
		return (
			<div>
				<TeamInput onSelectChange={this.handleSelectChange} value={val}></TeamInput>
				<ul>{matchRounds}</ul>
			</div>
		);
	}
}

export default FixtureContainer;