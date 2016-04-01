import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import updateMidpoint from '../actionCreators/updateMidpoint';
import addListing from '../actionCreators/addListing';
import clearListings from '../actionCreators/clearListings';
import createMidpointUrl from '../utils/createMidpointUrl';
import createListingUrl from '../utils/createListingUrl';

const Button = ({ lat1, lng1, lat2, lng2, valid, query, midpointLat, midpointLng, dispatch }) => {

	return (
		<button onClick={e => {

				if (valid) {
					dispatch(clearListings());
					let url = createMidpointUrl(lat1, lng1, lat2, lng2);
					axios.get(url).then((result) => {
						let points = result.data.trips[0].via_points;

						let midpoint = points[Math.ceil(points.length/2)];
						dispatch(updateMidpoint( 
							midpoint
						))
					}).then(() => {
						if (midpointLat !== 0 || midpointLng !== 0) {
							let url = createListingUrl(midpointLat, midpointLng, query);

							axios.get(url).then((result) => {
								if (result.status === 200) {
									let venues = result.data.response.venues;

									venues.map((venue) => {
										dispatch(addListing(
											venue.name,
											venue.specials,
											venue.location.formattedAddress
										))
									})
								}
							})
						}

					})
				}		
			}
		}>
			go
		</button>
	);
};


export default Button;