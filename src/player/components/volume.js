import React from 'react';

import Icons from '../../icons/components/icons';
import './volume.css';

export default function Volume(props) {
	return(
		<div className="Volume">
			<div onClick={props.handleVolumeToggle}>
				{
					(props.volume > 0) ?
						<Icons.Sound
							color="white"
							size={24}
						/>
					:
						<Icons.Mute
							color="white"
							size={24}
						/>
				}
			</div>
			<div className="Volume-range">
				<input
					type="range"
					min={0}
					max={1}
					step={0.05}
					value={props.volume}
					onChange={props.handleVolumeChange}
				/>
			</div>
		</div>
	)
}