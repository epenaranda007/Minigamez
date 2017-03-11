import React from 'react';
import RPSTable from './RPSTable.jsx';
import RPSComputer from './RPSComputer.jsx';

class RPS extends React.Component {
  constructor(props) {
    super(props);

    this.played = false;
    this.highscore = 0;
    this.score = 0;

    this.defaults = {
      compChoice: {
        id: 'D',
        name: 'Default',   
        image: 'https://media4.giphy.com/media/BXJmoUgthcYFi/200w.webp#41'
      },
      gameMessage: 'ROCK PAPER SCISSORS',
      rpsArray: [
        {
          id: 'R',
          name: 'Rock',
          image: 'http://www.rock-paper-scissors-game.com/i/rock.png',
          visibility: ''
        }, 
        {
          id: 'P',
          name: 'Paper',
          image: 'http://www.rock-paper-scissors-game.com/i/paper.png',
          visibility: ''
        }, 
        {
          id: 'S',
          name: 'Scissors',
          image: 'http://www.rock-paper-scissors-game.com/i/scissors.png',
          visibility: ''
        }
      ]
    }
    //clones objects in array
    this.rps = JSON.parse(JSON.stringify(this.defaults.rpsArray));
    // this.rps = this.defaults.rpsArray;

    this.state = {
      compPick: this.defaults.compChoice,
      gameMessage: this.defaults.gameMessage
    };

  }

  randomPick() {
    var choices = ['R', 'P', 'S'];
    return Math.floor(Math.random() * 3);
  }

  onPlayerPicked(playerChoice) {
    if(this.played) {
      this.gameReset();
    } else {
      this.hideOtherChoices(playerChoice);
      var comp = this.randomPick();
      var compPickId = this.rps[comp].id;
      var message = '';

      if (playerChoice === compPickId) {
        message = 'Score: ' + this.highscore + ' DRAW! Click to Play Again';
      } else if (playerChoice === 'R' && compPickId=== 'S') {
        this.updateScore();
        message = 'Score: ' + this.score + ' WIN! Click to Play Again';
      } else if (playerChoice === 'P' && compPickId=== 'R') {
        this.updateScore();
        message = 'Score: ' + this.score + ' WIN! Click to Play Again';
      } else if (playerChoice === 'S' && compPickId=== 'P') {
        this.updateScore();
        message = 'Score: ' + this.score + ' WIN! Click to Play Again';
      } else {
        this.score = 0;
        message = 'Score: ' + this.score + ' LOSE! Click to Play Again';
      }

      this.setState({compPick: this.rps[comp], gameMessage: message});
      this.played = true;
    }
  }

  updateScore() {
    this.score++;
    if (this.score > this.highscore) {
      this.highscore = this.score;
    }
  }

  hideOtherChoices(id) {
    if(id === 'R') {
      this.rps[1].visibility = 'hide-element';
      this.rps[2].visibility = 'hide-element';
    } else if (id === 'P') {
      this.rps[0].visibility = 'hide-element';
      this.rps[2].visibility = 'hide-element';
    } else {
      this.rps[1].visibility = 'hide-element';
      this.rps[0].visibility = 'hide-element';
    }
  }

  gameReset() {
    if(this.played) {
      this.played = false;
      this.rps = JSON.parse(JSON.stringify(this.defaults.rpsArray));
      this.setState({
        compPick: this.defaults.compChoice,
        gameMessage: this.defaults.gameMessage
      });
    }
    
  }


  render() {
    return (
      <div className="RPS">
        <div><h3 className="score-h3">{'HIGHSCORE: ' + this.highscore}</h3></div>
        <RPSComputer compChoice={this.state.compPick}/>
        <div className="game-message" onClick={() => this.gameReset()}><h3 className="h3-game-message">{this.state.gameMessage}</h3></div>
        <RPSTable choices={this.rps} onPlayerPicked={this.onPlayerPicked.bind(this)} />
      </div>
    );
  }

}

export default RPS;