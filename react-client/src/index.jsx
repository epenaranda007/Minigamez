import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import RPS from './components/RPS.jsx';
import FTP from './components/FTP.jsx';
// import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.displayUsername = '';

    this.state = { 
      games: {
        rps: {name: 'RockPaperScissor', navArea: 'nav-selected', gameArea: ''}, 
        ftp: {name: 'FindThePair', navArea: '', gameArea: 'hide-game-area'}
        // {name: 'Game3', description: 'Game3 description'}
      },
      username: '',
      password: '',
      currGame: 'rps'
    };

    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.signUpOrSigninUser = this.signUpOrSigninUser.bind(this);
    this.onGameTabClick = this.onGameTabClick.bind(this);
  }

  componentDidMount() {

  }

  handleUsername(event) {
    this.setState({username: event.target.value});
    event.preventDefault();
  }

  handlePassword(event) {
    this.setState({password: event.target.value});
    event.preventDefault();
  }

  signUpOrSigninUser(event) {
    //TODO send userdata for signin or signup
    $.ajax({
      type: "POST",
      url: 'http://localhost:3000/signin',
      data: JSON.stringify({username: this.state.username, password: this.state.password}),
      contentType: 'application/json',
      success: (data) => {

        console.log('ajax post success!: ', data);
      },
      error: () => {
        console.log('error ajax request')
      }
      // dataType: dataType, expected data
      // contentType: content data you are sending
    });
    this.displayUsername = this.state.username;
    this.setState({username: '', password: ''});
    event.preventDefault();
  }

  onGameTabClick(game) {
    if(game === this.state.currGame) {
      return;
    } else if (game === 'ftp') {
      this.setState({
        games: {
          rps: {navArea: '', gameArea: 'hide-game-area'},
          ftp: {navArea: 'nav-selected', gameArea: ''}
        },
        currGame: game
      });
    } else if (game === 'rps') {
      this.setState({
        games: {
          rps: {navArea: 'nav-selected', gameArea: ''},
          ftp: {navArea: '', gameArea: 'hide-game-area'}
        },
        currGame: game
      });
    }
  }

  render () {
    return (
      <div>
        <header className="header-container">
          <h1 className="title-h1">Mini-Games</h1>
          <div className="user-div">
            <span>Username: </span><input className="input-user" type="text" name="username" value={this.state.username} onChange={this.handleUsername} ></input>
            <span>Password: </span><input className="input-pass" type="text" name="lastname" value={this.state.password} onChange={this.handlePassword} ></input>
            <a className="login-button" onClick={this.signUpOrSigninUser} >Sign In/Up</a>
          </div>
          <div className="welcome-user">{this.displayUsername ? 'Welcome ' + this.displayUsername : ''}</div>
        </header>
        <nav className="game-list">
          <div className={'nav-game ' + this.state.games.rps.navArea } 
            onClick={() => this.onGameTabClick('rps')}
          >
            Rock Paper Scissor 
          </div>
          <div className={'nav-game ' + this.state.games.ftp.navArea }
            onClick={() => this.onGameTabClick('ftp')}
          > 
            Find The Pair 
          </div>
          <div className="nav-game"> Game 3 </div>
          <div className="nav-space"></div>
        </nav>
        <div className="game-area">
          <div className={'rps-div ' + this.state.games.rps.gameArea } >
            <RPS user={this.displayUsername} />
          </div>
          <div className={'ftp-div ' + this.state.games.ftp.gameArea }>
            <FTP user={this.displayUsername} />
          </div>
        </div>
        <div className="game-details"></div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));



