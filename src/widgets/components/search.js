import React from 'react';
import {Prompt} from 'react-router';

import './search.css';

function Search(props) {
	return(
		<form
			className="search"
			onSubmit={props.handleSubmit}
		>
			<Prompt 
				when={props.prompt}
				message="¿Esta seguro de dejar la página?"/>
			<input
				ref={props.setRef}
				type="text"
				className="search-input"
				placeholder="Search"
				name="search"
				onChange={props.handleChange}
				value={props.value}
			/>
		</form>
	)
}

export default Search