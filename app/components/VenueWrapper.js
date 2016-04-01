import React, { Component } from 'react';
import { connect } from 'react-redux';
import VenueTitle from './VenueTitle';
import VenueTitle from './VenueDesc';
import VenueTitle from './VenuePic';

const VenueWrapper = () => {

	return (
		<div>
			<VenueTitle />
			<VenueDesc />
			<VenuePic />
		</div>
	);
};

export default VenueWrapper;