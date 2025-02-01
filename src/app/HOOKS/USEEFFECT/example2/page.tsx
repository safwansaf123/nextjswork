"use client"

import React, { useState, useEffect } from "react";


const Counter1 = () => {
    const [counter, setCounter] = useState(0);
  
    useEffect(() => {
      const s = setInterval(() => {
        setCounter(c => c + 1);
      }, 1000);
    }, []);
  
    return (
      <div style={{textAlign: 'center'}}>
        <h1>Counter: {counter}</h1>

<h1>I want this counter to increase on every second.</h1>
<h2>This is good, but not good enough!</h2>

<h2>If you have multiple setStates inside this component or even receiving new props, this can throw the useEffect hook off track.</h2>

<h2>Causing your app to not be synchronized or just freeze.</h2>

      </div>
    );
};

export default Counter1