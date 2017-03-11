import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import RPS from './components/RPS.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [
        {name: 'Game1', description: 'Game1 description'}, 
        {name: 'Game2', description: 'Game2 description'},
        {name: 'Game3', description: 'Game3 description'}
      ]
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/items', 
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    return (
      <div>
        <header className="header-container">
          <h2>Mini-Games</h2>
        </header>
        <nav className="game-list">
          <div className="nav-game"> Game 1 </div>
          <div className="nav-game"> Game 2 </div>
          <div className="nav-game"> Game 3 </div>
        </nav>
        <div className="game-area">
          Game Area
          <RPS />
        </div>
        <div className="game-details"></div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));



