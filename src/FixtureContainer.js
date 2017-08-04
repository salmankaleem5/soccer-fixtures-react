import React, { Component } from 'react';
import MatchRound from './MatchRound';
import myData from './data/data.json';

class FixtureContainer extends Component {
	constructor(props){
		super(props);
	}

	render(){
		const fixtures = myData.map( (round_array, i) =>
			<MatchRound key={i} round_data={round_array}></MatchRound>
		);
		return (
			<ul>{fixtures}</ul>
		);
	}
}

export default FixtureContainer;