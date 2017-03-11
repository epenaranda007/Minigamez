import React from 'react';

var Choice = (props) => (
  <th>
    <img className="rps-choice" src={props.choice.image}  onClick={() => props.onPlayerPicked(props.choice.id)} />
  </th>
);

export default Choice;