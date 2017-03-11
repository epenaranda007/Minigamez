import React from 'react';
import RPSChoice from './RPSChoice.jsx';

var RPSTable = (props) => (
  <table className="rps-table">
    <tbody>
      <tr>
        {props.choices.map( choice => <RPSChoice choice={choice} onPlayerPicked={props.onPlayerPicked} />)}
      </tr>
    </tbody>
  </table>
);

export default RPSTable;