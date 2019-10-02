import React, {Component} from 'react';
import logo from '../../../images/logo.png';
import './related.css';

function Related(props) {
	return(
		<aside className="related">
			<img src={logo} width={250}/>
		</aside>
	)
}

export default Related