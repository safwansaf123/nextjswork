"use client"

import React, { useState, useEffect } from 'react';

const App = () => {
  const [message, setMessage] = useState('Hi there, how are you?');

  useEffect(() => {
    console.log('trigger use effect hook');

    setTimeout(() => {
      setMessage("I'm fine, thanks for asking.");
    }, 1000)
  }, []);

  return (
  <div>
  <h6>{message}</h6>

<h1>I added an empty array bracket ([]) as a second argument to the useEffect hook function.</h1> 
<h1>If you take a look at the console log it only shows “trigger use effect hook” once.</h1>
<h1>Here’s an example output with another console log message that says, “App component rendered,” after the effect function.</h1>
<h1>The second console message should only execute when the render lifecycle gets triggered.</h1>
<h2>By running an empty array [] as a second argument, you’re letting React know that your useEffect function doesn’t depend on any values from props or state.

This will help you avoid the componentDidUpdate lifecycle.</h2>
  </div>
  )
};

export default App;