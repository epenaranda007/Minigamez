import React from 'react';
import FTPRow from './FTPRow.jsx';

var FTPTable = (props) => (
  <table className="ftp-table">
    <tbody>
    {props.cards.map( row => <FTPRow rowCards={row} clickCard={props.clickCard} />)}
    </tbody>
  </table>

); 

export default FTPTable;

/*

props.cards.map(
        row => {
          <FTPRow rowCards={row} />
        }
      )

{props.cards.map(
      (row) => {
        <tr className="ftp-tr">
          row.map((card) => <FTPCard />);
        </tr>
      }
    )}


{
      props.cards.map(
        (row) => {
          <tr className="ftp-tr">
            row.map(
              (card) => <FTP />
            );
          </tr>
        }
      )
    }

console.log('ftptable props.cards', props.cards)
*/