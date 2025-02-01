'use client'

import Link from "next/link";
import { useState } from "react";


function FavoriteColor() {
  const [color, setColor] = useState("black");

  return (
    <div>
      <h1>My favorite color is {color}!</h1>
      
      <br />
      <button className="bg-blue-800  text-white"
        onClick={() => setColor("blue")} // just one click text will be changed to blue
      >Blue</button>
      
      <br />
      <button className="bg-red-700  text-white"
        onClick={() => setColor("red")}
      >Red</button>
      
      <br />
      <button className="bg-pink-600 text-white"
        onClick={() => setColor("pink")}
      >Pink</button>
      
      <br />
      <button className="bg-green-700  text-white"
        onClick={() => setColor("green")}
      >Green</button>
      
      <div>
<br />
<h1>in this case or above code variable is color and function is set the color name to the click</h1>
<h1>The first value, color, is our current state.</h1>
<h1>The second value, setColor, is the function that is used to update our state.</h1>
<h1>These names are variables that can be named anything you would like.</h1>
      </div>
      <Link href="/HOOKS">GO TO hooks</Link>
    </div>
  );
}

export default FavoriteColor;