import React from 'react';
import styled from 'styled-components';
import { UserItem } from './UserItem/UserItem.jsx';

const UserListStyle = styled.div`
	border: 2px solid #aedfff;
	min-height: 100%;
	min-width: 25%;
	max-width: 25%;
	overflow: scroll;
`;

export function UserList({ matchList, setSelectedPartner, selectedPartner }) {
	const displayMatchList = matchList.map((user, idx) => {
		return (
			<UserItem
				user={user}
				key={`${user}-${idx}`}
				setSelectedPartner={setSelectedPartner}
				selectedPartner={selectedPartner}
			/>
		);
	});

	return <UserListStyle>{displayMatchList}</UserListStyle>;
}
