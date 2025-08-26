import React from 'react';

const FirstComponent = (props) => {
    // console.log(props.num);
  return <div>num is {props.num} <button onClick={props.add}>add  </button></div>
};

export default FirstComponent;