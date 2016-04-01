import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import validatePostcode from '../utils/validatePostcode';
import createGeocodeUrl from '../utils/createGeocodeUrl';
import updatePostcode from '../actionCreators/updatePostcode';

let PostcodeInput = ({ dispatch, name, displayName }) => {
	let input;
	return (
		<div>
			<label htmlFor={name}>{displayName}</label><br />
			<input id={name} ref={node => {
				input = node;
			}} 
				onChange={() => {
					if (validatePostcode(input.value)) {
						axios.get(createGeocodeUrl(input.value)).then(
							(result) => {
								const data = result.data.results[0].geometry.location;
								dispatch(updatePostcode(
									input.value, 
									name, 
									validatePostcode(input.value),
									data.lat,
									data.lng
								));
							}
						)

					} else {
						dispatch(updatePostcode(
							input.value, 
							name, 
							false,
							''
						));
					}

				}				
			} />
		</div>
	);
};

PostcodeInput = connect()(PostcodeInput); // dispatch is injected automatically

export default PostcodeInput;