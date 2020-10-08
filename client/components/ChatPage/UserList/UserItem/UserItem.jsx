import React from 'react';
import styled from 'styled-components';

const UserItemStyle = styled.div`
	display: flex;
	align-items: center;
	border: 1px solid #acacac;
	margin: 5px;
	min-height: 60px;
	max-height: 60px;
	background-color: ${({ isCurrentMatchedPartner }) =>
		isCurrentMatchedPartner ? '#5ac4ff' : 'transparent'};

	&:hover {
		background-color: #aedfff;
		transition: 1.5s all ease-out;
		cursor: pointer;
	}
`;

const AvatarStyle = styled.img`
	max-height: 40px;
	min-height: 40px;
	max-width: 40px;
	min-width: 40px;
	border-radius: 50%;
	width: 60%;

	&:hover {
		transform: scale(1.4);
		transition: 0.3s ease-in;
	}
`;

const LeftAvatarStyle = styled.div`
	padding-left: 50px;
	width: 60%;
	display: flex;
	justify-content: center;
`;

const RightAvatarStyle = styled.div`
	padding-right: 50px;
	width: 40%;
	display: flex;
	justify-content: space-evenly;
	padding: 0 10px;
	transition: transform 0.4s;
`;

const PartnersNameStyle = styled.h4`
	font-size: 1.3rem;
	color: #636363;
`;

export function UserItem({ user, setSelectedPartner, selectedPartner }) {
	const { firstName, petInfo, avatarUrl } = user;

	//check to see if user is the selectedPartner;
	let isCurrentMatchedPartner;
	if (user && selectedPartner) {
		isCurrentMatchedPartner = selectedPartner._id === user._id;
	}

	return (
		<UserItemStyle isCurrentMatchedPartner={isCurrentMatchedPartner}>
			<LeftAvatarStyle>
				<PartnersNameStyle onClick={() => setSelectedPartner(user)}>
					{firstName} & {petInfo.name}
				</PartnersNameStyle>
			</LeftAvatarStyle>

			<RightAvatarStyle>
				<AvatarStyle src={avatarUrl} />
				<AvatarStyle src={petInfo.avatarUrl} />
			</RightAvatarStyle>
		</UserItemStyle>
	);
}
