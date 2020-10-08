import React from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components';
// CONTEXT API IMPORT
import { useStateValue , StateContext } from '../../../StateProvider';
import ActivityItem from './ActivityItem/ActivityItem.jsx';
import styledItems from '../../../styled-items';

const OuterDiv = styled.div`
  width: 35%;
  align-self: flex-start;
  background-color: ${styledItems.lightGray};
  min-height: 600px;
  margin: 25px;
  padding: 20px;
`;
const Heading = styled.div`
  font-size: 1.6em;
  color: ${styledItems.darkGray};
`;

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

const activitiesList = [];


const Activities = (props) => {
  
  // stockActivities.forEach((activity, index) => {
  //   const item = <form><ActivityItem activity={activity} id={`act${index}`} key={`act${index}`} handleChange = {props.handleChange} state={props.state}/></form>;
  //   activitiesList.push(item);
  // });
  
  // CONTEXT API, RELEVENT STATE ELEMENTS
  const [{ userName }, dispatch] = useStateValue();
  return (
    <OuterDiv>
      <Heading>Activities</Heading>
      <ActivityItem activity={stockActivities[0]} id={`act0`} key={`act0`} handleChange = {props.handleChange} state={props.state}/>
      <ActivityItem activity={stockActivities[1]} id={`act1`} key={`act1`} handleChange = {props.handleChange} state={props.state}/>
      <ActivityItem activity={stockActivities[2]} id={`act2`} key={`act2`} handleChange = {props.handleChange} state={props.state}/>
      <ActivityItem activity={stockActivities[3]} id={`act3`} key={`act3`} handleChange = {props.handleChange} state={props.state}/>
      <ActivityItem activity={stockActivities[4]} id={`act4`} key={`act4`} handleChange = {props.handleChange} state={props.state}/>
      <ActivityItem activity={stockActivities[5]} id={`act5`} key={`act5`} handleChange = {props.handleChange} state={props.state}/>
      <ActivityItem activity={stockActivities[6]} id={`act6`} key={`act6`} handleChange = {props.handleChange} state={props.state}/>
      <ActivityItem activity={stockActivities[7]} id={`act7`} key={`act7`} handleChange = {props.handleChange} state={props.state}/>
    </OuterDiv>
  );
}

export default Activities;