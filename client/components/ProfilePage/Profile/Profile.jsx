import React from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components';
// CONTEXT API IMPORT
import { useStateValue , StateContext } from '../../../StateProvider';
import styledItems from '../../../styled-items';

const OuterDiv = styled.div`
  width: 100;
  align-self: flex-start;
  background-color: ${styledItems.white};
  border: 3px solid ${styledItems.lightGray};
  margin: 25px;
  padding: 20px;
`;
const Heading = styled.div`
  font-size: 1.4em;
  color: ${styledItems.darkGray};
`;
const LesserText = styled.div`
  font-size: .8em;
  color: ${styledItems.white};
`;

const StyledImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

const HumanInfo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const CreatureTextArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HumanTextDesc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-top: 10px;
  background-color: ${styledItems.primaryBlue};
  color: ${styledItems.white};
`;

const StyledForm = styled.form`
  margin: 0;
  font-size: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledInputLeft = styled.input`
  padding: 5px;
  margin-top: 4px;
  border: none;
  background-color: ${styledItems.primaryBlue};
  color: ${styledItems.white};
  text-align: left;
  width: 100px;
  border-bottom: 1px solid white;
`;

const StyledInputRight = styled.input`
  padding: 5px;
  margin-top: 4px;
  border: none;
  background-color: ${styledItems.primaryBlue};
  color: ${styledItems.white};
  text-align: right;
  width: 60px;
  border-bottom: 1px solid white;
`;

const StyledInputCenter = styled.input`
  padding: 5px;
  margin-top: 4px;
  border: none;
  background-color: ${styledItems.primaryBlue};
  color: ${styledItems.white};
  text-align: center;
  width: 100px;
  border-bottom: 1px solid white;
`;

const DogInfo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const DogNameInput = styled.input`
padding: 5px;
margin-top: 4px;
border: none;
font-size: 1.4em;
background-color: ${styledItems.white};
color: ${styledItems.darkGray};
text-align: center;
`;

const Profile = (props) => {
  // CONTEXT API, RELEVENT STATE ELEMENTS
  const [{ userInfo , petInfo }, dispatch] = useStateValue();
  console.log(userInfo);
  return (
    <OuterDiv>
      <HumanInfo>
        <StyledImg src={userInfo.avatarUrl} />
        <CreatureTextArea>
          <Heading>{userInfo.fullName}</Heading>
          <HumanTextDesc>
            <LesserText>{userInfo.email}</LesserText>
            <StyledForm  >
              <StyledInputRight type="input" name='userAge' defaultValue={userInfo.age} value={props.state.userAge} onChange={props.handleChange} placeholder = {`age`}/>
              <LesserText> years old</LesserText>
            </StyledForm>
            <StyledForm  >
              <LesserText>I live in </LesserText>
              <StyledInputLeft type="input" name='userLocation' defaultValue={userInfo.location} value={props.state.userLocation} onChange={props.handleChange} placeholder = {`location`}/>  
            </StyledForm>
          </HumanTextDesc>
        </CreatureTextArea>
      </HumanInfo>

      <DogInfo>
        <StyledImg src={petInfo.avatarUrl} />

        <CreatureTextArea>
          <StyledForm>
            <DogNameInput type="input" name='petName' value={props.state.petName} onChange={props.handleChange} placeholder = {`dog name`}/>
          </StyledForm>
          <HumanTextDesc>
            <StyledForm>
              <StyledInputCenter type="input" name='petAge' value={props.state.petAge} onChange={props.handleChange} placeholder = {`age`}/>
            </StyledForm>
            <StyledForm>
              <StyledInputCenter type="input" name='petBreed' value={props.state.petBreed} onChange={props.handleChange} placeholder = {`size`}/>
            </StyledForm>
            <StyledForm>
              <StyledInputCenter type="input" name='petSize' value={props.state.petSize} onChange={props.handleChange} placeholder = {`breed`}/>
            </StyledForm>
            <StyledForm>
              <StyledInputCenter type="input" name='petAvatar' value={props.state.petAvatar} onChange={props.handleChange} placeholder = {`avatar url`}/>
            </StyledForm>
          </HumanTextDesc>
        </CreatureTextArea>
      </DogInfo>
    </OuterDiv>
  );
}

export default Profile;