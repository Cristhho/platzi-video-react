import React from 'react';
import './home-layout.css';

function HomeLayout(props) {
	return(
		<main className="main-content">
			{props.children}
		</main>
	);
}

export default HomeLayout;