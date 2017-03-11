import React from 'react';
import RSP from './RSP.jsx';

const GameList = (props) => (
  <div>
    <h4> Game List </h4>
    There are { props.items.length } items.
    { props.items.map(item => <ListItem item={item}/>)}
  </div>
)

export default List;