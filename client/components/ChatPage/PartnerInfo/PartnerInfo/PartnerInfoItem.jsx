import React from 'react';
import styled from 'styled-components';

const PartnerInfoItemStyles = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 70%;
	height: 150px;
	background-color: #5ac4ff;
	overflow: scroll;
`;

export function PartnerInfoItem({ partnerInfo }) {
	const { firstName, age, location } = partnerInfo;
	return (
		<PartnerInfoItemStyles>
			<h3>{firstName}</h3>
			<p>Location: {location}</p>
			<p>Age: {age} years old</p>
		</PartnerInfoItemStyles>
	);
}
