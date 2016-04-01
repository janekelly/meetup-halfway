import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import updateQuery from '../actionCreators/updateQuery';

let QueryInput = ({ dispatch, name, displayName }) => {
	let input;

	return (
		<div>
			<label htmlFor={name}>{displayName}</label>
			<br />
			<input id={name} ref={node => {
				input = node;
			}}
				onChange = {() => {
					dispatch(updateQuery(
						input.value
					));
				}}
			/>
		</div>
	);
};

QueryInput = connect()(QueryInput); // dispatch is injected automatically
export default QueryInput;