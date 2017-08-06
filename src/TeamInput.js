import React, { Component } from 'react';
import teamData from './data/teams.json';

class TeamInput extends Component {
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e){
		this.props.onSelectChange(e.target.value);
	}

	render(){
		const options = teamData.map( (team, i) => 
			<option key={i} value={team}>{team}</option>
		);
		const val = this.props.value;
		return (
			<select value={val} onChange={this.handleChange}>
				{options}
			</select>
		);
	}
}

export default TeamInput;