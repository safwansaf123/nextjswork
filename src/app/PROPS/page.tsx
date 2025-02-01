import Link from "next/link"
import React from "react";
import Parentcomponents from "./Parentcomponents/page";

type propsType = {profile:string}


export default function Prop (props:propsType) 
{

return(
<div>

<h1>{props.profile}</h1>

<Link href='/PROPS/Childcomponents'>      <h5> Child Component </h5>  </Link>
<Link href='/PROPS/Parentcomponents'>      <h5> Parent Component </h5>  </Link>
<Link href='/PROPS/Example1'>      <h5> Example1</h5>  </Link>

<Parentcomponents />
<h2>in early we make pages and called them in parent pages or pages .tsx called ONE WAY DATA BINDING</h2>
<h2>changes take places in page we have created </h2>
<h2>called PROPS or One way data binding </h2>
<h2>so parent can send data to child one way </h2>

<h2>from above function we can make changes in parent elements also without changing in main page</h2>
<h2>child can send data to parent in reverse</h2>

<h3>in javascript DESTRUCTURING</h3>
<h2>while calling data use our own program of calling data in our way </h2>
<h2>direct calling in curly brackets props.profile</h2>
<h2>props is in structure</h2>
<h2>DESTRUCTURING props</h2>
<h2>so we have not to write props.profile just write profile</h2>

<h2>DESTRUCTURING is java script concept used in REACT</h2>
 Create an Object
<li>
const person</li> 
<li> firstName: John,</li>
<li>  lastName: Doe,</li>
<li>  age: 50</li>

<li> Destructuring</li>
<li>let {'lastName, firstName'} = person;</li>

<h4>Note:
<li>Destructuring is not destructive.</li>

<li>Destructuring does not change the original object.</li></h4>


<Link href={'https://www.w3schools.com/JS//js_destructuring.asp'}> <h3>CLICK TO SEE MORE</h3>   </Link>   


<li><h1>Skipping Array Values</h1></li>
<li><h2>We can skip array values using two or more commas:</h2></li>

Example
<li><h2> Create an Array</h2></li>
<li><h2>const fruits = [Bananas, Oranges, Apples, Mangos];</h2></li>

<li><h2> Destructuring</h2></li>
<li><h2>let [fruit1,,,fruit2] = fruits;</h2></li>

<h6>React props</h6>
<h2>Props are arguments passed into React components.</h2>

<h2>Props are passed to components via HTML attributes.</h2>

<h4>React Props are like function arguments in JavaScript and attributes in HTML.

To send props into a component, use the same syntax as HTML attributes:</h4>






<h6>
<ol>
<li>
<p><strong>Parent Component</strong>:</p>
<ul>
<li>The&nbsp;<code>Parent</code>&nbsp;component imports the&nbsp;<code>child</code>&nbsp;component.</li>
<li>It renders the&nbsp;<code>child</code>&nbsp;component twice, passing different&nbsp;<code>name</code>&nbsp;props each time (<code>"Alice"</code>&nbsp;and&nbsp;<code>"Bob"</code>&nbsp;and&nbsp;<code>"safwan ahmed"</code>&nbsp;and&nbsp;<code>"62829"</code>).</li>
</ul>
</li>
</ol>



</h6>
<h6>
<ol>
<li>
<p><strong>Child Component </strong>:</p>
<ul>
<li>The&nbsp;<code>child</code>&nbsp;component receives the&nbsp;<code>name</code>&nbsp;prop and uses it to display a personalized way.</li>
</ul>
</li>
</ol>



</h6>

</div>
)
}; 