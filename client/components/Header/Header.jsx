import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// CONTEXT API IMPORT
import { useStateValue, StateContext } from '../../StateProvider';
import styledItems from '../../styled-items';
import UserInfo from './UserInfo/UserInfo.jsx';

const HeaderBG = styled.div`
	background-color: ${styledItems.primaryBlue};
	height: 130px;
	padding: 20px;
	display: flex;
	justify-content: space-between;
	width: 100%;
`;

const Logo = styled.div`
	font-size: 2em;
	color: ${styledItems.darkGray};
	font-weight: 100;
`;

const BlackText = styled.span`
	color: ${styledItems.black};
	font-weight: 800;
`;

const Header = () => {
	return (
		<HeaderBG>
			<Logo>
				Coffee<BlackText>&</BlackText>Woof
			</Logo>
			<UserInfo />
		</HeaderBG>
	);
};

export default Header;
