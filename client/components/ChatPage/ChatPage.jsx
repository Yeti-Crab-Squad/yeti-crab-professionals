import React, { useState } from 'react';
import styled from 'styled-components';

import { UserList } from './UserList/UserList.jsx';
import { ChatContainer } from './ChatBox/ChatContainer.jsx';

const ChatPageStyle = styled.div`
	display: flex;
	min-height: 80%;
	min-width: 100%;
	margin: 0 10px;
	background-color: cornsilk;
`;

export function ChatPage() {
	//use context to pull down matchlist
	const matchList = [
		{
			_id: 564345532,
			firstName: 'Gary',
			location: 'Los Angeles, CA',
			age: '28',
			avatarUrl: 'https://picsum.photos/id/117/300/150',
			activities: {
				coffee: 'i like starbucks',
				hiking: 'not much but sure',
				walking: 'why?',
			},
			petInfo: {
				name: 'Chico',
				age: '2',
				breed: 'Pitbull Terrier Mix',
				size: 'Medium',
				avatarUrl: 'https://picsum.photos/id/237/300/150/',
			},
		},
		{
			_id: 1007,
			firstName: 'Kevin',
			location: 'Los Angeles, CA',
			age: '28',
			avatarUrl: 'https://picsum.photos/id/197/300/150/',
			activities: {
				xcv: 'i like starbucks',
				asdf: 'test',
			},
			petInfo: {
				name: 'Chachi',
				age: '2',
				breed: 'Pitbull Terrier Mix',
				size: 'Medium',
				avatarUrl: 'https://picsum.photos/id/222/300/150/',
			},
		},
		{
			_id: 3001,
			firstName: 'John',
			location: 'Los Angeles, CA',
			age: '28',
			avatarUrl: 'https://picsum.photos/id/111/300/150/',
			activities: { asdf: 'i like starbucks' },
			petInfo: {
				name: 'Luna',
				age: '2',
				breed: 'Kitty Kat',
				size: 'Tiny thang',
				avatarUrl: 'https://picsum.photos/id/217/300/150/',
			},
		},
	];

	const [selectedPartner, setSelectedPartner] = useState(null);
	if (selectedPartner) {
		return (
			<ChatPageStyle>
				<UserList
					matchList={matchList}
					setSelectedPartner={setSelectedPartner}
					selectedPartner={selectedPartner}
				/>
				<ChatContainer selectedPartner={selectedPartner} />
			</ChatPageStyle>
		);
	} else {
		return (
			<ChatPageStyle>
				<UserList
					matchList={matchList}
					setSelectedPartner={setSelectedPartner}
					selectedPartner={selectedPartner}
				/>
				{/* empty divs for placeholders for styling */}
				<div></div>
				<div></div>
			</ChatPageStyle>
		);
	}
}
