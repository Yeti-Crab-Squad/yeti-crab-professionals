import React, { useEffect } from 'react';
import styled from 'styled-components';

export const ChatBoxStyle = styled.div`
<<<<<<< HEAD
=======
	border: 1px solid purple;
	background-color: green;
>>>>>>> 0f73be7802ca328146c90267bd67fad56eb1dc8d
	min-height: 60%;
	max-height: 60%;
	overflow: auto;
`;

export function ChatBox({ chat }) {
	return (
		<ChatBoxStyle>
			<div className='chat-box'>
					{chat}
			</div>
		</ChatBoxStyle>
	);
}

