import React, { useState } from "react";

const Counter = (props) => {
    console.log("Counter COmponent");
    return (
        <div>
            <h1>Counter</h1>
            <p>The Count is {props.count}</p>
        </div>
    );
};

export default Counter;