import React from 'react';

class FTPCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };

  }

  render() {

    return (
      <td className="ftp-td" onClick={() => this.props.clickCard(this.props.card)} >
        <img className="ftp-img" 
          src={this.props.card.show ? this.props.card.front : this.props.card.back}
        />
      </td>
    );

  }

}


export default FTPCard;

/*
<img className="ftp-img" 
          src={this.props.card.front}
        />
*/