import React from 'react';
import './App.css'
import Component1 from './Component1';
import {Context} from './Context';

function App() {
  const [counter,setcounter] = React.useState(0);
  const handleIncrement = () => {
    setcounter(counter +  1);
  }
  const handleDecrement = () => {
    setcounter(counter - 1);
  }
  const handleReset = () => {
    setcounter(0);
  }
  return (
    <div>
      <h3> App component </h3>
      Initial value : {counter} <br /> <br />
      <button onClick={() => handleIncrement()}>Increment</button> &nbsp;
      <button onClick={() => handleDecrement()}>Decrement</button> &nbsp;
      <button onClick={() => handleReset()}>Reset</button>
      <Context.Provider
      value = {{
        initialValue: counter,
        handleIncrement: handleIncrement,
        handleDecrement: handleDecrement,
        handleReset: handleReset}}>

          <Component1/>
      </Context.Provider>
    </div>
  );
}

export default App;
