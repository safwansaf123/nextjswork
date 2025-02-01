"use client"
import React from "react"
import Link from "next/link"



export default function Useeffect(){

  
  
  return(
<div>
<br />
<h1>The useEffect hook in React allows you to perform side effects in your components</h1>
<h1>such as fetching data, directly updating the DOM, and setting up timers.</h1>
<h2>side Effects are those functions that interact with the outside world, or out of React Js ecosystem and with useEffect, we can separate them into another Function</h2>
<h3> It is used to mimic the lifecycle methods of class-based components. The motivation behind the introduction of useEffect Hook is to eliminate the side effects of using class-based components.</h3>

<br />
<Link href="/HOOKS/USEEFFECT/example1">GO TO EXAMPLE0</Link>
<br />
<Link href="/HOOKS/USEEFFECT/example1">GO TO EXAMPLE1</Link>
<br />
<Link href="/HOOKS/USEEFFECT/example2">GO TO EXAMPLE2</Link>
<br />
<Link href="/HOOKS/USEEFFECT/example3">GO TO EXAMPLE3</Link>
<br />
<Link href="/HOOKS/USEEFFECT/example4">GO TO EXAMPLE4</Link>
<br />
<Link href="/HOOKS/USEEFFECT/example5">GO TO EXAMPLE5</Link>
<br />
<Link href="/HOOKS/USEEFFECT/example6">GO TO EXAMPLE6</Link>
<br />
<br />
<h1>React useEffect is a function that gets executed for 3 different React component lifecycles.</h1>
<br />
<Link href="https://www.w3schools.com/react/react_lifecycle.asp"><h4 className="text-red-800 text my-2 font-semibold">click to see react lifecycle</h4> </Link>
<h1>Those lifecycles are</h1>

<h6>1-componentDidMount or Mounting</h6><h2>Mounting means putting elements into the DOM.</h2>
<h6>2-componentDidUpdate or Updating</h6><h2>Method is called after the component is rendered.</h2><h2>This is where you run statements that requires that the component is already placed in the DOM.</h2>
<h6>3-componentWillUnmount or UnMounting</h6><h2>The next phase in the lifecycle is when a component is removed from the DOM, or unmounting as React likes to call it.</h2>

</div>



  )
  
};