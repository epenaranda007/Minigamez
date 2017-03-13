import React from 'react';
import FTPCard from './FTPCard.jsx';

var FTPRow = (props) => (
  <tr className="ftp-tr">
    {
      props.rowCards.map(
        card => <FTPCard card={card} clickCard={props.clickCard} />
      )
    }
  </tr>

);

export default FTPRow;


/*
<FTPCard card={card} />


{
  props.rowCards.map(
    (card) => <FTPCard card={card} />
  )
}
*/