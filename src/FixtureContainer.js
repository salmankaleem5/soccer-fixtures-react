import React, { Component } from 'react';
import Fixture from './Fixture';
import myData from './data/data.json';

class FixtureContainer extends Component {
	constructor(props){
		super(props);
	}

	render(){
		const fixtures = myData.map( (fixtureObj, i) =>
			<Fixture key={fixtureObj[0]+fixtureObj[1]+i} data={fixtureObj}></Fixture>
		);
		return (
			<div>
				<ul>{fixtures}</ul>
			</div>
		);
	}
}

export default FixtureContainer;