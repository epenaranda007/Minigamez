import React from 'react';
import $ from 'jquery';
import FTPTable from './FTPTable.jsx';
import _ from 'underscore-node';

class FTP extends React.Component {
  constructor(props) {
    super(props);

    this.allCards = [
      {
        code: 'KH',
        front: '../assets/images/king_of_hearts2.png',
        back: '../assets/images/red_joker.png',
        show: false
      },
      {
        code: 'KD',
        front: '../assets/images/king_of_diamonds2.png',
        back: '../assets/images/red_joker.png',
        show: false
      },
      {
        code: 'KC',
        front: '../assets/images/king_of_clubs2.png',
        back: '../assets/images/red_joker.png',
        show: false
      },
      {
        code: 'KS',
        front: '../assets/images/king_of_spades2.png',
        back: '../assets/images/red_joker.png',
        show: false
      },
      {
        code: 'JC',
        front: '../assets/images/jack_of_clubs2.png',
        back: '../assets/images/red_joker.png',
        show: false
      },
      {
        code: 'JD',
        front: '../assets/images/jack_of_diamonds2.png',
        back: '../assets/images/red_joker.png',
        show: false
      },
      {
        code: 'JH',
        front: '../assets/images/jack_of_hearts2.png',
        back: '../assets/images/red_joker.png',
        show: false
      },
      {
        code: 'JS',
        front: '../assets/images/jack_of_spades2.png',
        back: '../assets/images/red_joker.png',
        show: false
      },
      {
        code: 'QH',
        front: '../assets/images/queen_of_hearts2.png',
        back: '../assets/images/red_joker.png',
        show: false
      },

    ]; 

    this.state = {
      gameCards: null,
      firstCard: null,
      secondCard: null,
      bestTime: 0,
      timer: 0,
      gameMessage: '',
      solved: 0
    };

    this.openCardClick = this.openCardClick.bind(this);

  }

  componentWillMount() {
    // (_.shuffle(this.allCards.slice().concat(this.allCards.slice()))), //doubles the array and shuffle them
    var shuffled = _.shuffle(this.allCards.slice().concat(this.allCards.slice()));
    //clone each objects in the array
    var shuffledCards = shuffled.map(
      (obj) => {
        return Object.assign({}, obj);
      });

    var grid = [];
    for (var row = 0, curr = 0; row < 3; row++) {
      var arr = [];
      for (var col = 0; col < 6; col++, curr++) {
        arr[col] = shuffledCards[curr];
      }
      grid.push(arr);
    }
    this.setState({gameCards: grid});
  }

  openCardClick(card) {
    if (this.state.firstCard && this.state.secondCard) {
      if (this.state.firstCard.code === this.state.secondCard.code) {
        if(this.state.solved === 8) {
          this.setState({firstCard: null, secondCard: null, gameMessage: 'CONGRATULATIONS!',solved: (this.state.solved + 1)});          
        } else{
          this.setState({firstCard: null, secondCard: null, solved: (this.state.solved + 1)});
        }
      } else {
        this.state.firstCard.show = false;
        this.state.secondCard.show = false;        
        this.setState({firstCard: null, secondCard: null});
      }
    } else if (!this.state.firstCard) {
      card.show = true;
      this.setState({firstCard: card});
    } else if (this.state.firstCard) {
      card.show = true;
      this.setState({secondCard: card});
    } 
  }






  render() {
    return (
      <div className="FTP">
        <div><h3 className="besttime-h3">BEST TIME: {this.state.bestTime} Second(s)</h3></div>
        <div className="game-message-ftp"><h2 className="game-message-h2">{this.state.gameMessage}</h2></div>
        <FTPTable cards={this.state.gameCards} 
          clickCard={this.openCardClick}
        />
      </div>
    );
  }

}

export default FTP;
