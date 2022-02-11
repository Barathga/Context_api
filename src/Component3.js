import React from "react";
import {Context} from './Context';

class Component3 extends React.Component{
    static contextType = Context;

    constructor() {
        super()
    }
    render(){
        return(
            <>
                <h3>Counter 3 Component</h3>
                initial Value : {this.context.initialValue} <br/><br/>
                <button onClick={this.context.handleIncrement}> Increment </button> &nbsp;
                <button onClick={this.context.handleDecrement}> Decrement </button> &nbsp;
                <button onClick={this.context.handleReset}> Reset </button>
            
            </>
        )
    }
}

export default Component3;