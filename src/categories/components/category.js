import React from 'react';
import PlayList from '../../playlist/components/playlist.js';

function Category(props) {
	return(
		<section className="row playlist-wrapper">
			<span>{props.description}</span>
			<h3>{props.title}</h3>
			<PlayList
				playlist={props.playlist}
				handleOpenModal={props.handleOpenModal}
			/>
		</section>
	);
}

export default Category;