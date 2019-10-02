import React from 'react';

import './timer.css';

export default function Timer(props) {
	return(
		<div className="Timer">
			<p>
				<span>{props.currentTime} / {props.duration}</span>
			</p>
		</div>
	)
}