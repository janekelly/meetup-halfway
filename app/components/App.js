import React, { Component } from 'react';
import PostcodeInput from './PostcodeInput.js';
import QueryInput from './QueryInput.js';
import ButtonWrapper from './ButtonWrapper.js';
import ListingsWrapper from './ListingsWrapper.js';


const App = () => (
	<div className='container'>		
		<h4>Let's Meetup Halfway...</h4>
		<div className='form-group'>
			<PostcodeInput name='firstinput' displayName='Enter the First Postcode' />
		</div>
		<div className='form-group'>
			<PostcodeInput name='secondinput' displayName='Enter the Second Postcode' />
		</div>
		<div className='form-group'>
			<QueryInput name='query' displayName='What would you like to consume?' />
		</div>
		<ButtonWrapper />
		<hr className='separator' />
		<h4>Venues</h4>
		<ListingsWrapper />
	</div>
);

export default App;