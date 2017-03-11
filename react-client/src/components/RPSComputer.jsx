import React from 'react';

class RPSComputer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      compChoice: this.props.compChoice
    };

  }


  render() {
    return (
      <div>
        <div className="rps-computer">
          <img className="comp-img" src={this.props.compChoice.image} />
        </div>
      </div>
    );
  }

}

export default RPSComputer;