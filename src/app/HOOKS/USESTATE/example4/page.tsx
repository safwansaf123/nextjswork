'use client'

import Link from 'next/link';
import React, { useState } from 'react';


const Example4 = () => {
  const [color, setColor] = useState('black');

  const handleClick = () => {
    setColor('red');   // here no logic just onclick so red
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
    <br />


<Link href="/HOOKS">GO TO hooks</Link>
    </div>
  );
};

export default Example4;