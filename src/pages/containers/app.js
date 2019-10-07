import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {Map as map} from 'immutable';
import {Route, Switch, Redirect} from 'react-router-dom';

import Home from '../components/home';
import Videos from './home';
import NotFound from '../components/not-found';
import reducer from '../../reducers/index';
import Header from '../components/header'
import Video from './video';

const store = createStore(
	reducer,
	map(),
	composeWithDevTools(
		applyMiddleware(logger, thunk)
	)
);

class App extends React.Component {
	render() {
		return(
			<Provider store={store}>
				<React.Fragment>
					<Header />
					<Switch>
						<Route exact path="/" component={Home}/>
						<Route exact path="/videos" component={Videos} />
						<Route exact path="/videos/:id" component={Video} />
						<Redirect from="/v" to="/videos" />
						<Redirect from="/v/:id" to="/videos/:id" />
						<Route component={NotFound} />
					</Switch>
				</React.Fragment>
			</Provider>
		)
	}
}

export default App;