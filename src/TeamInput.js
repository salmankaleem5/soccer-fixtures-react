import React, { Component } from 'react';
import teamData from './data/teams.json';

class TeamInput extends Component {
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			last_valid_selection: ['0'],
		};
	}

	handleChange(e){
		var options = e.target.options;

		var selected_values = [];
		for( var i = 0; i < options.length; i++ ){
			if( options[i].selected ){
				selected_values.push(options[i].value);
			}
		}

		if( selected_values.length > 2 ){
			selected_values = this.state.last_valid_selection;
		} else {
			this.setState({
				last_valid_selection: selected_values,
			});
		}

		this.props.onSelectChange(selected_values);
	}

	render(){
		const options = teamData.map( (team, i) => 
			<option key={i} value={team}>{team}</option>
		);
		const val = this.props.value;
		return (
			<select value={val} onChange={this.handleChange} multiple='true'>
				<option value='0'>Select a team</option>
				{options}
			</select>
		);
	}
}

export default TeamInput;