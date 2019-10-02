import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './media.css';

class Media extends PureComponent {

	state = {
		author: this.props.author
	}
	 
	handleClick = (event) => {
		this.props.openModal(this.props.id);
	}

	render() {
		return(
			<div className="col Media" onClick={this.handleClick}>
				<div className="card">
					<div className="card-image">
						<img src={this.props.cover} alt="" width={260} height={160}/>
					</div>
					<div className="card-content">
						<h3 className="card-title">{this.props.title}</h3>
						<p>{this.state.author}</p>
					</div>
				</div>
			</div>
		);
	}
}

Media.propTypes = {
	image: PropTypes.string,
	title: PropTypes.string.isRequired,
	author: PropTypes.string,
	type: PropTypes.oneOf(['video', 'audio'])
}

export default Media;