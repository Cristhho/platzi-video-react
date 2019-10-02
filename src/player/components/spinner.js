import React from 'react';

import './spinner.css';

export default function Spinner(props) {
	if(props.active){
		return(
			<div className="Spinner">
				<span>Cargando...</span>
			</div>
		)
	} else {
		return null;
	}
}