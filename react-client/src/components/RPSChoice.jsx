import React from 'react';

class Choice extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };

    this.scaleup = '';

  }

  onPlayerClick() {
    // this.scaleup = this.scaleup ? '' : 'on-click';
  }
 
  render() {
    return (
      <th>
        <img className={'rps-choice ' + this.props.choice.visibility} 
          src={this.props.choice.image}  
          onClick={
            () => {
              this.props.onPlayerPicked(this.props.choice.id);
              // this.onPlayerClick();
            }
          } />
      </th>
    );
    
  }
}

export default Choice;

/*

var Choice = (props) => (
  <th>
    <img className="rps-choice" src={props.choice.image}  onClick={() => props.onPlayerPicked(props.choice.id)} />
  </th>
);


*/