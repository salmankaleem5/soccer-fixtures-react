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
		var className = 'FixtureItem';
		if( this.props.team_selected === '0' ){
			return className;
		}

		if( this.state.fixture['home'] === this.props.team_selected || this.state.fixture['away'] === this.props.team_selected ){
			className += ' active-fixture';
		} else {
			className += ' inactive-fixture';
		}

		return className;
	}

	render(){
		var classNames = this.checkActive(this.props.team_selected);
		return (
			<li className={classNames}>
				<p>{this.state.fixture['home']} vs {this.state.fixture['away']}</p>
			</li>
		);
	}
}

export default Fixture;