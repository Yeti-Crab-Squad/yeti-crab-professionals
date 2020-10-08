import React, {Component} from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components';
// CONTEXT API IMPORT
import { useStateValue , StateContext } from '../../StateProvider';
import styledItems from '../../styled-items';
import Activities from './Activities/Activities.jsx';
import Profile from './Profile/Profile.jsx';

const OuterDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 100%;
`;

const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 40%;
`;

const SaveButton = styled.div`
  font-size: 1.7em;
  padding: 10px;
  width: 180px;
  border: 1px solid ${styledItems.darkGray};
  border-radius: 2px;
  background-color: ${styledItems.primaryBlue};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${styledItems.white};
  justify-self: flex-end;
  text-decoration: none;
  &:hover {
    background-color: ${styledItems.darkGray};
    color: ${styledItems.secondaryBlue};
    cursor: pointer;
  }
`;

class ProfilePage extends Component {
  constructor (props) {
    super(props);
    this.state = {
      userLocation: '',
      userAge: '',
      petName: '',
      petAge: '',
      petBreed: '',
      petSize: '',
      petAvatar: '',
      Coffee: '',
      Hiking: '',
      Birdwatch: '',
      Running: '',
      Fetch: '',
      Swimming: '',
      Grooming: '',
      Beach: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({
      ...this.state,
      [event.target.name]: value,
    })
  }

  componentDidMount() {
    const [{ userInfo, petInfo }, dispatch] = this.context;
    console.log("LOG TEST",userInfo);
    this.setState({
      userLocation: userInfo.location,
      userAge: userInfo.age,
      petName: petInfo.name,
      petAge: petInfo.age,
      petBreed: petInfo.breed,
      petSize: petInfo.size,
      petAvatar: petInfo.avatarUrl,
      Coffee: userInfo.activities.Coffee || '',
      Hiking: userInfo.activities.Hiking || '',
      Birdwatch: userInfo.activities.Birdwatch || '',
      Running: userInfo.activities.Running || '',
      Fetch: userInfo.activities.Fetch || '',
      Swimming: userInfo.activities.Swimming || '',
      Grooming: userInfo.activities.Grooming || '',
      Beach: userInfo.activities.Beach || '',
    })
  }

  static contextType = StateContext;
  render() {
    const [{ userInfo, petInfo }, dispatch] = this.context;

    const saveProfile = () => {
      const stockActivities = [
        'Coffee',
        'Hiking',
        'Birdwatch',
        'Running',
        'Fetch',
        'Swimming',
        'Grooming',
        'Beach',
      ];

      userInfo.location = this.state.userLocation;
      userInfo.age = this.state.userAge;
      userInfo.activities = {};

      petInfo.name = this.state.petName,
      petInfo.age = this.state.petAge,
      petInfo.breed = this.state.petBreed,
      petInfo.size = this.state.petSize,
      petInfo.avatarUrl = this.state.petAvatar,

      stockActivities.forEach(activity => {
        if(this.state[activity] != '') {
          userInfo.activities[activity] = this.state[activity];
        }
      })
      // console.log(this.state);
      // console.log(stockActivities);
      // console.log(userInfo);

      dispatch({ 
        type: 'saveProfile',
        userInfo,
        petInfo,
      });

      // convert state to mongoDB format
      const mongoObj = {};
      mongoObj.first_name = userInfo.firstName;
      mongoObj.full_name = userInfo.fullName;
      mongoObj.email = userInfo.email;
      mongoObj.profile_img = userInfo.avatarUrl;
      mongoObj.user_age = userInfo.age;
      mongoObj.location = userInfo.location;
      mongoObj.dog_name = petInfo.name;
      mongoObj.dog_image = petInfo.avatarUrl;
      mongoObj.dog_age = petInfo.age;
      mongoObj.dog_size = petInfo.size;
      mongoObj.dog_breed = petInfo.breed;
      mongoObj.preferred_activities = [];
      Object.entries(userInfo.activities).forEach(([activity, description]) => {
        mongoObj.preferred_activities.push({'activity': activity, 'description': description })
      });
      // console.log(mongoObj);
     
      // console.log('===========>', userInfo._id)
      // send user data & pet data to DB
      fetch(`/api/updateUserData/${userInfo._id}`, {
        method: 'PUT',
        headers: {
          "Content-Type": "Application/JSON",
        },
        body: JSON.stringify(mongoObj)
      })
      .then((res) => res.json())
      .then((data) => {
        console.log('response from server', data);
      })
      .catch((err) => console.log('POST: PROFILE INFO to DB ERROR: ', err));      
    }

    return (
      <OuterDiv>
        <Activities handleChange = {this.handleChange} state = {this.state}/>
        <RightDiv>
          <Profile handleChange = {this.handleChange} state = {this.state}/>
          <Link to='/chatpage'><SaveButton onClick={() => {saveProfile()}}>Save</SaveButton></Link>
        </RightDiv>
      </OuterDiv>
    );
  }
}

export default ProfilePage;