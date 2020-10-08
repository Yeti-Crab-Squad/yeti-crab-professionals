import React from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components';
// CONTEXT API IMPORT
import { useStateValue , StateContext } from '../../StateProvider';
import styledItems from '../../styled-items';

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.div`
  width: 300px;
  color: ${styledItems.darkGray};
  font-size: 2em;
  text-align: center;
`;

const Login = () => {
  // CONTEXT API, RELEVENT STATE ELEMENTS
  const [{ userName }, dispatch] = useStateValue();
  return (
    <StyledDiv>
      <StyledText>
        Meet your pup's new best friend today....
      </StyledText>
    </StyledDiv>
  );
}

export default Login;