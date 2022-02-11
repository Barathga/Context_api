import React from "react";
import { Context } from "./Context";
import Component3 from "./Component3";

function Component2() {
        return(
            <Context.Consumer>
                {(getValuesFromProvider) => {
                    return(
                        <>
                        <h3> Counter 2 Component </h3>
                        initial Value : {getValuesFromProvider.initialValue}<br/> <br/>
                        <button onClick={getValuesFromProvider.handleIncrement}> Increment </button> &nbsp;
                        <button onClick={getValuesFromProvider.handleDecrement}> Decrement </button> &nbsp;
                        <button onClick={getValuesFromProvider.handleReset}> Reset </button> &nbsp;
                        <Component3/>
                        </>
                    )
                }}
            </Context.Consumer>
        ) } 


export default Component2;