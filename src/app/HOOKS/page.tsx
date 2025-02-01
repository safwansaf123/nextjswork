import React from "react";
import Link from "next/link";
export default function Hooks(){

return (

<div>
<h5>statemanagent</h5>
<h1>example toogle switch in website turns directly black or white theme</h1>
<h1>so varible in function renderes one time only</h1>
<h1>web site opened one time means code of website renders one time only</h1>
<h1>when we click on togle switch to make theme dark and white it re-renders the page by HOOKS </h1>
<h1>so in above case use state hook state is used it re-renderes the web page </h1>
<h1>if NORMAL VARIABLE  updated in a function it will not re renderes </h1>
<br />

<h2>component life cycle method </h2>
<h1>when it renderes</h1>
<h1>when it re renders</h1>
<h1>when it updates </h1>
<h2>so after renderes or any update if we have to work we use hook</h2>
<h1>in above case use-effect</h1>


<h6><u>HOOKS:</u></h6>
<h1>Hooks allow function components to have access to state and other React feature</h1>
<h1> Because of this, class components are generally no longer needed.</h1>
<h2>Although Hooks generally replace class components, there are no plans to remove classes from React.</h2>
<h3>Hooks allow us to "hook" into React features such as state and lifecycle methods.</h3>
<br />
<p><strong><u>Key Principles of Hooks </u></strong></p>
<p>Hooks enable functional components to access state and manage side effects. They provide a cleaner and more concise way to handle state and side effects in React applications. Some of the most commonly used hooks include:</p>

<br />
<div>
<ul>
<li>
<p><strong><Link href="./HOOKS/USESTATE">CLICK TO SEE   <u>useState</u></Link></strong>: This hook allows you to add state to a functional component. It returns a state variable and a function to update it.</p>
</li>
<li>
<p><strong><Link href="./HOOKS/USEEFFECT">CLICK TO SEE   <u>useEffect</u></Link></strong>: This hook lets you perform side effects in functional components, such as fetching data or subscribing to events.</p>
</li>
<li>
<p><strong>useContext</strong>: This hook allows you to access context values without passing props down the component tree.</p>
</li>
<li>
<p><strong><Link href="./HOOKS/USEREF">CLICK TO SEE   <u>useREF</u></Link></strong>: This hook provides a way to access and manipulate DOM elements directly.</p>
</li>
<li>
<p><strong>useMemo</strong>&nbsp;and&nbsp;<strong>useCallback</strong>: These hooks help optimize performance by memoizing values and functions</p>
</li>
</ul>
</div>
<br />
<h2><u>Hook Rules </u></h2>
<p>There are 3 rules for hooks:</p>
<ul>
<li>Hooks can only be called inside React function components.</li>
<li>Hooks can only be called at the top level of a component.</li>
<li>Hooks cannot be conditional</li>
<li><h6>HOOKS ALWAYS RUN ON CLIENT SIDE SO ALWAYS USE CLIENT</h6></li>
<li>FUNCTION COMPONENTS ARE USED RECENTLY</li>
<li>class based components are not used now a days </li>
<li>so hooks are used in function based components </li>


</ul>



</div>

)



};