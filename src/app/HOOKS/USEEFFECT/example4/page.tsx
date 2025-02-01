"use client"

import React, { useState, useEffect } from 'react';

const App = () => {
  const [message, setMessage] = useState('Hi there, how are you?');

  useEffect(() => {
    console.log('trigger use effect hook');

    setTimeout(() => {
      setMessage("I'm fine, thanks for asking.");
    }, 1000)
  })

  return (
  <div>
  <h6>{message}</h6>
<h3>But now I want to useEffect to change the message a second after the component has mounted.</h3>
<h1>useEffect accepts a function as its first argument. This function handler will take care of any side effects you like when it gets run</h1>
<h1>The function is a callback function after one of the React component lifecycle has been triggered.</h1>
<h1>It worked! But theres a problem. Take a look at the console log. The effect got triggered twice.</h1>
<h1>This behavior is not optimal, because if you have multiple effects or have new prop values being tossed from a parent component, it may trigger the effect multiple times</h1>
<h1>This may cause inconsistency, weird side-effects, or freezing your app from an infinite loop.</h1>
<h1>see axample 4</h1>
</div>
  )
};

export default App;


/*
const App = () => {
  const [message, setMessage] = useState('Hi there, how are you?');

  return <h1>{message}</h1>
};

export default App;     */
//In the code example above, I’m using React useState to save a message.

//I’m then grabbing my state variable, message, and I’m printing it to the screen.