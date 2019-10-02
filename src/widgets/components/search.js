import React from 'react';
import './search.css';

function Search(props) {
	return(
		<form
			className="search"
			onSubmit={props.handleSubmit}
		>
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