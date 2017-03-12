import React from 'react';

class FTPCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };

  }

  render() {

    return (
      <td className="ftp-td">
        <img className="ftp-img" 
          src={this.props.card.back}
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