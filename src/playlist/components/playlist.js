import React, { Component } from 'react';

import Media from '../containers/media';
import './playlist.css';
import Icons from '../../icons/components/icons';

function Playlist(props) {
	return(
		<div className="row playlist">
		{
			props.playlist.map((mediaId) => {
				return(
					<Media
						id={mediaId}
						key={mediaId}
						openModal={props.handleOpenModal}
					/>
				)
			})
		}
		</div>
	);
}

export default Playlist;