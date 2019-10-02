import React from 'react';

import './controls.css';

export default function Controls(props) {
	return(
		<div className="Controls">
			{props.children}
		</div>
	)
}