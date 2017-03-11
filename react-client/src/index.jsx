import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import RPS from './components/RPS.jsx';
// import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      items: [
        {name: 'Game1', description: 'Game1 description'}, 
        {name: 'Game2', description: 'Game2 description'},
        {name: 'Game3', description: 'Game3 description'}
      ],
      username: '',
      password: ''
    };

    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.signUpOrSigninUser = this.signUpOrSigninUser.bind(this);
  }

  componentDidMount() {
    // $.ajax({
    //   url: '/items', 
    //   success: (data) => {
    //     this.setState({
    //       items: data
    //     })
    //   },
    //   error: (err) => {
    //     console.log('err', err);
    //   }
    // });
  }

  handleUsername(event) {
    this.setState({username: event.target.value});
    // console.log(this.state.username);
    event.preventDefault();
  }

  handlePassword(event) {
    this.setState({password: event.target.value});
    // console.log(this.state.password);
    event.preventDefault();
  }

  signUpOrSigninUser(event) {
    console.log(this.state.username + ' ' + this.state.password);
    //TODO send userdata for signin or signup
    $.ajax({
      type: "POST",
      url: 'http://localhost:3000/signin',
      data: JSON.stringify({username: this.state.username, password: this.state.password}),
      contentType: 'application/json',
      success: (data) => {
        console.log('ajax post success!');
      },
      error: () => {
        console.log('error ajax request')
      }
      // dataType: dataType, expected data
      // contentType: content data you are sending
    });

    event.preventDefault();
  }

  render () {
    return (
      <div>
        <header className="header-container">
          <h1 className="title-h1">Mini-Games</h1>
          <div className="user-div">
            <span>Username: </span><input className="input-user" type="text" name="username" value={this.state.username} onChange={this.handleUsername} ></input>
            <span>Password: </span><input className="input-user" type="text" name="lastname" value={this.state.password} onChange={this.handlePassword} ></input>
            <a className="login-button" onClick={this.signUpOrSigninUser} >Sign Up / Log In</a>
          </div>
        </header>
        <nav className="game-list">
          <div className="nav-game"> Game 1 </div>
          <div className="nav-game"> Game 2 </div>
          <div className="nav-game"> Game 3 </div>
        </nav>
        <div className="game-area">
          <RPS />
        </div>
        <div className="game-details"></div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));



