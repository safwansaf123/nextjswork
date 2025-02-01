'use client'

import React from "react";
import Link from "next/link";

import { useState } from "react";


export default function Usestate(){

const [count, setCount] = useState(0) 

    return(
<div>
{count}    
    <br />
<button className="bg-purple-800 text-white rounded-full"

onClick={() => {
setCount(count+1)
   
}}>
INCREMENT
</button>
<br />


<h2>The React useState Hook allows us to track state in a function component. </h2>

<h2>State generally refers to data or properties that need to be tracking in an application.</h2>
<h2>Calling the set function does not change state in the running code: </h2>
<h2>This is because states behaves like a snapshot. Updating state requests another render with the new state value,</h2>

<h6><Link href={"https://react.dev/reference/react/useState"}>click link to see more </Link></h6>

<br />
<Link href="./">GO TO HOOKS PAGE</Link>
<br />
<Link href="/HOOKS/USESTATE/example1">GO TO EXAMPLE1</Link>
<br />
<Link href="/HOOKS/USESTATE/example2">GO TO EXAMPLE2</Link>
<br />
<Link href="/HOOKS/USESTATE/example3">GO TO EXAMPLE3</Link>
<br />
<Link href="/HOOKS/USESTATE/example4">GO TO EXAMPLE4</Link>
<br />
<Link href="/HOOKS/USESTATE/example5">GO TO EXAMPLE5</Link>

</div>
    )
};