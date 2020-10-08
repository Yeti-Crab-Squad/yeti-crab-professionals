import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react'; 
import FacebookLogin from "react-facebook-login";

const FBLogin = props => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [picture, setPicture] = useState('');
  //const history = useHistory();

  //let fbContent;
  const handleClick = event => 0;
  
  const responseFacebook = response => {
    if (response.accessToken) {
      setIsLoggedIn(true);
      setEmail(response.email);
      setName(response.name);
      setPicture(response.picture);
      console.log(`Logging in`); 
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
        console.log('response from server', data);
      })
      .catch((err) => console.log('POST: FB info to DB ERROR: ', err));
      // send user to destination
      console.log(`You're logged in ${response.name}`); 
    }
  }

  return (
      <FacebookLogin 
      appId="371520144220769"
      autoLoad={true}
      fields="name, email, picture"
      onClick={handleClick}
      callback={responseFacebook}
      />
  );
}

export default FBLogin;