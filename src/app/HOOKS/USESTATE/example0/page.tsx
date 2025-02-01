'use client'

import React from "react";
import Link from "next/link";

import { useState } from "react";


export default function Usestate1(){

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
<button className="bg-purple-800 text-white rounded-full"

onClick={() => {
setCount(count-1)
   
}}>
DECREMENT

</button>

<Link href="/HOOKS">GO TO hooks</Link>
</div>
    )};