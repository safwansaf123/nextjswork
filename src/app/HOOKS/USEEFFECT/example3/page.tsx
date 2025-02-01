

"use client"
import React, { useState, useEffect } from "react";

const Counter2 = () => {
    const [counter, setCounter] = useState(0);
  
    useEffect(() => {
      const s = setInterval(() => {
        setCounter(c => c + 1);
      }, 1000);
  
      return () => clearInterval(s);
    }, [counter]);
  
    return (
      <div style={{textAlign: 'center'}}>
        <h1>Counter: {counter}</h1>
        <br />
        Now its more self-sufficient.

One, Ive added a clean up function to clear the interval whenever the component will unmount.

Two, Ive added the counter variable inside the array bracket thats found in the second argument of the useEffect function.

This tells React to only trigger the effect when counter is a different value.

If counter has not changed in value, the effect wont execute.

This is helpful because you can safely add multiple useEffects, setStates, or even pass down new prop values, and it wont desynchronize your counter component.
      </div>
    );
  };

  export default Counter2