'use client'

import Link from 'next/link';
import React, { useState } from 'react';


const Example5 = () => {
  const [color, setColor] = useState('black');

  const handleClick = () => {
    setColor('red');   // here no logic just onclick so red
  };
  const handleClick1 = () => {
    setColor('green');   // here no logic just onclick so green
  };
  return (
    <div>
    <button 
      onClick={handleClick} 
      style={{ color: color }}
    >
      Click me to change color Red
    </button>
<br />
    <button 
      onClick={handleClick1} 
      style={{ color: color }}
    >
      Click me to change color green


    </button>
<h2>two codes are written one is gree and other is red</h2>
<h1>here we have used useState so when we click on red color will change to red of both</h1>
<h1>now again we click on green color will change to green of both</h1>
<h2>both color changes because of it re-renders run code from last </h2>
<h2>to run from the begining just refresh the web page</h2>

<h1></h1>
    <br />
    <br />


<Link href="/HOOKS">GO TO hooks</Link>
    </div>
  );
};

export default Example5;