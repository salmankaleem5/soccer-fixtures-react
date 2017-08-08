import React, { Component } from 'react';
import './Fixture.css';

class Fixture extends Component {
	constructor(props){
		super(props);
		this.state = {
			fixture: props.fixture,
		}
	}

	checkActive(selection){
		var className = 'FixtureItem';

		if( selection.length === 1 ){
			var selected = selection[0];

			if( selected === '0' ){
				return className;
			}

			if( this.state.fixture['home'] === selected || this.state.fixture['away'] === selected ){
				className += ' active-fixture';
			} else {
				className += ' inactive-fixture';
			}
		} else if( selection.length === 2 ){
			// Only show fixtures with both selected teams

			if( selection[0] === '0' ){
				if( this.state.fixture['home'] === selection[1] || this.state.fixture['away'] === selection[1] ){
					className += ' active-fixture';
				} else {
					className += ' inactive-fixture';
				}				
			} else {
				if( (this.state.fixture['home'] === selection[0] && this.state.fixture['away'] === selection[1]) || (this.state.fixture['away'] === selection[0] && this.state.fixture['home'] === selection[1]) ){
					className += ' active-fixture';
				} else {
					className += ' inactive-fixture';	
				}
			}
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