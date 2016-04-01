import React, { Component } from 'react';

const ListingAddy = ({ address1, address2, address3, address4 }) => {
	return (
		<div>
			<ul>
				<li>{address1}</li>
				<li>{address2}</li>
				<li>{address3}</li>
				<li>{address4}</li>
			</ul>
			
		</div>
	)
}

export default ListingAddy;