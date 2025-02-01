"use client"
import React, {useState, useEffect} from "react";


const Counter0 = () => {
    const [counter, setCounter] = useState(0);
  
    useEffect(() => {
      setCounter(c => c + 1);
    }, []);
  

    return (
      <div style={{textAlign: 'center'}}>
  <br />
        Counter: {counter}

  <br /> 
  <h1>Right above is a simple counter app. All it does is print a number to the user.</h1>   
      </div>
    );
  };

  export default Counter0