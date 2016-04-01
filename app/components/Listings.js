import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Listing from './Listing';


const Listings = ({ listings }) => {
	if (listings.length > 0) {
		console.log(listings);
		return (
			<div>
				{listings.map (listing => 
					<Listing 
						key={listing.id}
						name={listing.name}
						address1={listing.address[0]}
						address2={listing.address[1]}
						address3={listing.address[2]}
						address4={listing.address[3]}
					/>
				)}
			</div>
		);
	} else {
		return (
			<div> No listings found </div>
		);
	}

};

export default Listings;