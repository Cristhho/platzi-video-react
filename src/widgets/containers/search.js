import React, {Component} from 'react';
import Search from '../components/search';
import {connect} from 'react-redux';
import * as actions from '../../actions/index';
import {bindActionCreators} from 'redux';

class SearchContainer extends Component {

	state = {
		value: '',
		prompt: false
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.actions.searchAsyncEntities(this.input.value)
	}

	inputSetRef = (element) => {
		this.input = element
	}

	handleInputChange = (event) => {
		this.setState({
			value: event.target.value,
			prompt: !!(event.target.value.length)
		})
	}

	render() {
		return(
			<Search
				setRef={this.inputSetRef}
				handleSubmit={this.handleSubmit}
				handleChange={this.handleInputChange}
				value={this.state.value}
				prompt={this.state.prompt}
			/>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return{
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(null, mapDispatchToProps)(SearchContainer)