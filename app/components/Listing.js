import React, { Component } from 'react';

import ListingName from './ListingName';
import ListingAddy from './ListingAddy';

const Listing = ({ key, name, address1, address2, address3, address4 }) => {
	return (
		<div className="listing" key={key}>
			<ListingName name={name} />
			<ListingAddy address1={address1} address2={address2} address3={address3} address4={address4} />
		</div>
	)
}

export default Listing;