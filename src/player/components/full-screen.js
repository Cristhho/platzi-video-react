import React from 'react';

import Icons from '../../icons/components/icons';

import './full-screen.css';

export default function FullScreen(props) {
	return(
		<div
			className="FullScreen"
			onClick={props.handleFullScreenClick}
		>
			<Icons.FullScreen
				color="white"
				size={24}
			/>
		</div>
	)
}