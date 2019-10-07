import React, { PureComponent } from 'react';
import {withRouter} from 'react-router';

import './generic-page.css';

class NotFound extends PureComponent {

	handleBackClick = () => {
		this.props.history.goBack();
	};

	handleForwardClick = () => {
		this.props.history.goForward();
	};

	handleRandomClick = () => {
		const random = Math.round(Math.random() * (10 - 1) + 1);
		this.props.history.push(`/videos?id=${random}`);
	};

  render() {
    return (
      <div className="Page NotFound">
        <h1>404</h1>
        <h3 className="SadFace">☹</h3>
        <h2>No hemos encontrado la página que buscabas</h2>
        <button
        	className="btn red lighten-2"
        	onClick={this.handleForwardClick}>
        	Ir a la siguiente ruta 👉
        </button>
        <button
        	className="btn red lighten-2"
        	onClick={this.handleBackClick}>
        	Ir a la ruta anterior 👈
        </button>
        <button
        	className="btn red lighten-2"
        	onClick={this.handleRandomClick}>
        	Video aleatorio 🎁
        </button>
      </div>
    )
  }
}

export default withRouter(NotFound)