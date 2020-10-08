import React from 'react';
import styled from 'styled-components';

const PartnerActivitiesListStyles = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 70%;
	height: 150px;
	background-color: #5ac4ff;
	overflow: scroll;
	margin-top: 10px;
	overflow: auto;

	h3 {
		margin-top: 10px;
	}

	div {
		display: flex;
		width: 100%;
		max-width: 100%;
		justify-content: space-evenly;
		overflow: scroll;
		white-space: wrap;

		div {
			margin: 5px 0;
		}
	}
`;

export function PartnerActivitiesList({ activities }) {
	const activitiesJSX = [];
	for (const activity in activities) {
		activitiesJSX.push(
			<div>
				<div>{formatActivity(activity)}: </div>
				<div>{activities[activity]}</div>
			</div>
		);
	}
	return (
		<PartnerActivitiesListStyles>
			<h3>Activities:</h3>
			{activitiesJSX}
		</PartnerActivitiesListStyles>
	);
}

function formatActivity(str) {
	return str[0].toUpperCase() + str.slice(1).toLowerCase();
}
