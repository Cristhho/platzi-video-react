import React from 'react';
import {render} from 'react-dom';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import Home from '../pages/containers/home';
//import data from '../api.json';
import reducer from '../reducers/index';
import {Map as map} from 'immutable';
import {BrowserRouter} from 'react-router-dom';

import Header from '../pages/components/header'

// function logger({getState, dispatch}) {
// 	return (next)=> {
// 		return (action) => {
			
// 		}
// 	}
// }

// const logger = ({getState, dispatch}) => next => action => {
// 	console.log('este es mi estado anterior', getState().toJS());
// 	console.log('vamos a enviar esta accion', action);
// 	const rst = next(action);
// 	console.log('este es mi nuevo estado', getState().toJS());
// 	return rst;
// }

//import normalizedData from '../schemas/index';

// const initialState = {
// 	data: {
// 		//...data
// 		entities: normalizedData.entities,
// 		categories: normalizedData.result.categories,
// 		search: []
// 	},
// 	modal: {
// 		visibility: false,
// 		mediaId: null
// 	}
// }

const store = createStore(
	reducer,
	map(),
	composeWithDevTools(
		applyMiddleware(logger, thunk)
	)
	//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
	<BrowserRouter
	basename="/videos">
		<Provider store={store}>
			<React.Fragment>
				<Header />
				<Home />
			</React.Fragment>
		</Provider>
	</BrowserRouter>,
	document.getElementById("home-container")
);