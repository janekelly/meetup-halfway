import React, { Component } from 'react';
import { connect } from 'react-redux';
import Listings from './Listings';

const mapStateToProps = (state, ownProps) => {
	return {
		listings: state.listings
	}
}

const ListingsWrapper = connect(
	mapStateToProps
)(Listings);

export default ListingsWrapper;