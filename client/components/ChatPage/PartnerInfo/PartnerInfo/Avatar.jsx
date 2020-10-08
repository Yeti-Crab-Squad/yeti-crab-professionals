import React from 'react';
import styled from 'styled-components';

const AvatarStyles = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	min-width: 90%;
	width: 90%:
	min-height: 200px;
	max-height: 150px;
	padding: 10px;
	transition: transform 0.4s;
`;

const AvatarImgStyles = styled.img`
	max-width: 250px;
	max-height: 150px;

	&:hover {
		transform: scale(1.4) rotate(0.1deg);
		transition: 0.6s ease-in;
		cursor: pointer;
	}
`;

export function Avatar({ url }) {
	return (
		<AvatarStyles>
			<AvatarImgStyles src={url} />
		</AvatarStyles>
	);
}
