import React from 'react';
import RPSTable from './RPSTable.jsx';
import RPSComputer from './RPSComputer.jsx';

class RPS extends React.Component {
  constructor(props) {
    super(props);

    this.highscore = 0;
    this.rps = [
      {
        id: 'R',
        name: 'Rock',
        image: 'http://www.rock-paper-scissors-game.com/i/rock.png',
      }, 
      {
        id: 'P',
        name: 'Paper',
        image: 'http://www.rock-paper-scissors-game.com/i/paper.png',
      }, 
      {
        id: 'S',
        name: 'Scissors',
        image: 'http://www.rock-paper-scissors-game.com/i/scissors.png'
      }
    ];

    this.defaults = {
      compChoice: {
      id: 'D',
      name: 'Default',   
      image: 'https://media4.giphy.com/media/BXJmoUgthcYFi/200w.webp#41'
      },
      gameMessage: 'ROCK PAPER SCISSORS'
    }

    this.state = {
      picked: null,
      compPick: this.defaults.compChoice,
      gameMessage: this.defaults.gameMessage
    };

  }

  onPlayerPicked(choice) {
    var computerPicked = this.randomPick();
    // console.log(this.compChoice);
    if (choice === this.state.compPick.id) {
      this.setState({compPick: this.rps[computerPicked], game});
    }
  }

  randomPick() {
    var choices = ['R', 'P', 'S'];
    return Math.floor(Math.random() * 3);
  }

  render() {
    return (
      <div className="RPS">
        <RPSComputer compChoice={this.state.compPick}/>
        <div className="game-message"><h3>{this.state.gameMessage}</h3></div>
        <RPSTable choices={this.rps} onPlayerPicked={this.onPlayerPicked.bind(this)} />
      </div>
    );
  }

}

export default RPS;