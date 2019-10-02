import React from 'react';

import Icons from '../../icons/components/icons';
import './play-pause.css';

export default function PlayPause(props) {
	return(
		<div className="PlayPause">
			{
				props.pause ?
					<button onClick={props.handleClick}>
						<Icons.Play
							color="white"
							size={24}
						/>
					</button>
				:
					<button onClick={props.handleClick}>
						<Icons.Pause
							color="white"
							size={24}
						/>
					</button>
			}
		</div>
	)
}