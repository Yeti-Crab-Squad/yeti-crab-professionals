import React from "react";
import {Link, Redirect} from "react-router-dom";
import styled from 'styled-components';
import { useStateValue , StateContext } from '../../../StateProvider';
import styledItems from '../../../styled-items';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

const Register = styled.div`
  color: ${styledItems.darkGray};
  font-size: 1.4em;
`;

const OuterDiv = styled.div`
  margin-right: 100px;
  &:hover {
    cursor: pointer;
  }
`;

const StyledImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin: 10px;
`;

const OverallDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const LineDiv = styled.div`
  display: flex;
  align-items: center;  
`;


const UserInfo = () => {
  // CONTEXT API, RELEVENT STATE ELEMENTS
  const [{ userInfo, petInfo }, dispatch] = useStateValue();

  // FACEBOOK RESPONSE
  const responseFacebook = response => {
    if (response.accessToken) {
      // send user data to DB
      fetch('/api/login', {
        method: 'POST',
        headers: {
          "Content-Type": "Application/JSON",
        },
        body: JSON.stringify(response)
      })
      .then((res) => res.json())
      .then((data) => {
        // data contains email, first_name, full_name, profile_img
        console.log('response from server', data);
        const info = data[0];
        dispatch({ 
          type: 'clickLogin',
          id: info._id,
          full_name: info.full_name,
          first_name: info.first_name,
          email: info.email,
          profile_img: info.profile_img,
          user_age: info.user_age,
          location: info.location,
          dog_name: info.dog_name,
          dog_image: info.dog_image,
          dog_age: info.dog_age,
          dog_size: info.dog_size,
          dog_breed: info.dog_breed,
          preferred_activities: info.preferred_activities,
        });
      })
      .catch((err) => console.log('POST: FB info to DB ERROR: ', err));

      // send user to destination
      // console.log(`You're logged in ${response.name}, ${response.email}, ${response.picture.data.url}`); 
    }
  }

  const modifyDirection = () => {
    redirection = <Redirect to="/profilepage" />;
  }

  // CONDITIONAL RENDERING OF CORNER DIV
  let cornerDiv;
  let redirection;
  if(userInfo.fullName == '') {
    cornerDiv = 
     <FacebookLogin 
        fields="name, email, picture" 
        appId="371520144220769" 
        callback={responseFacebook} 
        render={renderProps => (<Register onClick={renderProps.onClick}>login with facebook</Register>)}
        />;
  } else if(petInfo.name == '') {
    cornerDiv = <Link to="/profilepage" ><LineDiv><StyledImg src={userInfo.avatarUrl} /><Register>{userInfo.firstName}</Register></LineDiv></Link>;
    redirection = <Redirect to="/profilepage" />;
  } else {
    //console.log(JSON.stringify(userInfo));
    cornerDiv = <Link to="/profilepage" ><OverallDiv><LineDiv><StyledImg src={userInfo.avatarUrl} /><Register>{userInfo.firstName}</Register></LineDiv><LineDiv><StyledImg src={petInfo.avatarUrl} /><Register>{petInfo.name}</Register></LineDiv></OverallDiv></Link>;
    redirection = <Redirect to="/profilepage" />;
  }
  
  return (
    <OuterDiv>
       {cornerDiv}
       {redirection}
    </OuterDiv>
  );
}

export default UserInfo;