import React, { Component } from 'react';
import './Fixture.css';

class Fixture extends Component {
	constructor(props){
		super(props);
		this.state = {
			fixture: props.fixture,
		}
	}

	checkActive(teamSelected){
		if( this.state.fixture['home'] === this.props.team_selected || this.state.fixture['away'] === this.props.team_selected ){
			return 'active-fixture FixtureItem';
		} else {
			return 'inactive-fixture FixtureItem';
		}
	}

	render(){
		// if either of the two teams are props.team_selected, then add a class
		var classNames = this.checkActive(this.props.team_selected);
		return (
			<li className={classNames}>
				<p>{this.props.team_selected}</p>
				<p>{this.state.fixture['home']} vs {this.state.fixture['away']}</p>
			</li>
		);
	}
}

export default Fixture;