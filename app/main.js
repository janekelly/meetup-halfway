import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Reducers
import postcode from './reducers/postcodeReducer';
import midpoint from './reducers/midpointReducer';
import listings from './reducers/listingsReducer';
import query from './reducers/queryReducer';

// Components
import App from './components/App';
const app = combineReducers({
	postcode, midpoint, query, listings
});

const initialState = {
	postcode: {
		firstinput: '',
		firstinputisValid: false,
		firstinputlat: 0,
		firstinputlng: 0,
		secondinput: '',
		secondinputisValid: false,
		secondinputlat: 0,
		secondinputlng: 0
	},
	midpoint: {
		coordinates: [0,0]
	},
	query: {
		query: ''
	},
	listings: []
}

// ReactDOM render
ReactDOM.render(
	<Provider store={createStore(app, initialState,
	window.devToolsExtension ? window.devToolsExtension() : f => f)}>
		<App />
	</Provider>,
	document.getElementById('root')
);