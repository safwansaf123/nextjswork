'use client'

import Link from 'next/link';
import React, { useState } from 'react';


const Example3 = () => {
  const [color, setColor] = useState('black');

  const handleClick = () => {
    setColor(prevColor => (prevColor === 'black' ? 'red' : 'black'));  // here logic if black so red and if red so black
  };

  return (
    <div>
    <button 
      onClick={handleClick}      // here on click it will go to handleClick
      style={{ color: color }}
    >
      Click me to change color
    </button>
    <br />
    <br />
    
    <Link href="/HOOKS">GO TO hooks</Link>


    </div>
  );
};

export default Example3;
