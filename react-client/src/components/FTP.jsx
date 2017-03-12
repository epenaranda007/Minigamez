import React from 'react';
import $ from 'jquery';
import FTPTable from './FTPTable.jsx';

class FTP extends React.Component {
  constructor(props) {
    super(props);

    this.allCards = [
      {code: 'KH'}
    ]; 

    this.state = {
      // gameCards: [
      //   [],
      //   [],
      //   // [],
      //   // []
      // ],
      firstCard: null,
      secondCard: null,
      bestTime: 0,
      timer: 0,
      gameMessage: ''
    };

  }

  render() {
    return (
      <div className="FTP">
        <div><h3 className="besttime-h3">BEST TIME</h3></div>
        <div className="game-message-ftp">TEST GAME MESSAGE</div>
        <FTPTable />
      </div>
    );
  }

}

export default FTP;