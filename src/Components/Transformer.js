import React from 'react';

function Transformer(props) {

  return (
    <img
      className = 'transformer'
      src = {props.image}
      alt = {props.name}
    />
  );
}

export default Transformer;
