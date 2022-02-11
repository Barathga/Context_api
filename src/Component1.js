import React from 'react'
import {Context} from './Context'
import Component2 from './Component2';

function Component1() {
const getValuesFromProvider = React.useContext(Context);
  return (
    <div>
        <h3>Counter 1 Component</h3>
        initialValue :{getValuesFromProvider.initialValue} <br/> <br/>
        <button onClick={() => getValuesFromProvider.handleIncrement()}> Increment </button> &nbsp;
        <button onClick={() => getValuesFromProvider.handleDecrement()}> Decrement </button> &nbsp;
        <button onClick={() => getValuesFromProvider.handleReset()}> Reset </button>
        <Component2/>
    </div>
  )
}

export default Component1;  