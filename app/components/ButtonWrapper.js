import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from './Button';

const mapStateToProps = (state, ownProps) => {
	return {
		lat1: state.postcode.firstinputlat,
		lng1: state.postcode.firstinputlng,
		lat2: state.postcode.secondinputlat,
		lng2: state.postcode.secondinputlng,
		valid: state.postcode.firstinputisValid && state.postcode.secondinputisValid,
		query: state.query.query,
		midpointLat: state.midpoint.coordinates[0],
		midpointLng: state.midpoint.coordinates[1]
	}
}

const ButtonWrapper = connect(
	mapStateToProps
)(Button);

export default ButtonWrapper;