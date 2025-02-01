'use client'
import Link from "next/link";
import React from "react";

export default function Example1(){

let ss=10;

    return(
        <div>
            <br />
{ss}
<br />

<button className="bg bg-red-800 text-white rounded-full"

onClick={() => {                            /*  THIS IS EVENT ON CLICK IT WILL COUNT THE CLICK*/

console.log("clicked");        
ss=ss+1

}}>
    INCREMENT

</button>
<br />

CLICK ON INCREMEMNT BUTTON
<br />

<h2>see in inspect items of browser on chrome and developer tool in edge </h2>
<h2>the above function will work on transcript or java script</h2>
<h2>data will not update on display or jsx or html</h2>
<h2>data will update on browser </h2>
<br />
<h4>INCREMEMNT will be done browser </h4>
<h2>becuase here it is use as a variable    ss  ,   not function</h2>
<h5>In ABOVE case OR CODE, THE VARIABLE after rendering,  re-rendering is NOT done WHEN CLICKING</h5>
<h5>while using USESTATE re-rendering every time work as loop when ever i click on button of increment</h5>
<Link href="/HOOKS">GO TO hooks</Link>
</div>



    )  
};