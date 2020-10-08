import React from 'react';
import styled from 'styled-components';

const PartnerPetInfoStyles = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 70%;
	height: 150px;
	background-color: #5ac4ff;
	overflow: scroll;
`;

export function PartnerPetInfoItem({ petInfo }) {
	const { name, age, breed, size } = petInfo;
	return (
		<PartnerPetInfoStyles>
			<h3>{name}</h3>
			<p>Age: {age} years old</p>
			<p>Breed: {breed}</p>
			<p>Size: {size}</p>
		</PartnerPetInfoStyles>
	);
}
