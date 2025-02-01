import Link from "next/link";
import React from "react";

export default function Anchor() {
    return (
      <div>
  <Link href={'../'}> HOME PAGE  </Link>      
  <Link href={'https://www.piac.com.pk'}>  <h3>PIA</h3>   </Link>   
  <Link href={'https://caapakistan.com.pk'}> <h3>CAA</h3>   </Link>   
  <a href="images\pia.png"></a>
  
  <h2>
<li>DATA PASSED IN LINK OR CALLED ANCHOR TAG</li>
<li>data passed in href is called attributes in HTML or path in simple words</li>
<li>data passed in paranthesis is called attribtes   or path in simple words</li>
<li></li>
<li> href = HYPER REFRENCE OR HYPER LINK</li>

<li>now we can say data passed in terms of function is called in simple word ARGUMENTS</li>
<li>but data passed in above case or in component is called PROPS</li>
<li>PROPS IS DATA BINDING</li>
<li>same data if passed in typescript is called Parameters </li>
<h3>see PROPS page</h3>

<h4>Element can pass data</h4>
<h4>function can pass data </h4>
<h4></h4>


</h2>
<li>Data attributes</li>
Developers can add data attributes to HTML elements opening tags to store custom data. The attribute name must start with data and be at least one character long, but it cant contain uppercase letters. The attribute value can be any string. 
For example, to attach a number to a paragraph element, you can use (p data-badges=3) in angle bracket This is a paragraph element. 
<li>Element attributes</li>
Data can be passed to a custom element using attributes. The data attribute value can be used to render the element. 
<li>The data in angle bracket is  HTML element</li>
This element links content with a machine-readable translation. If the content is related to time or date, the time element should be used instead. 
<li>Passing values using parameters</li>
A link to the destination page can be created with parameters that link the variables to be passed. The receiving page can then parse these parameters back into values. 
</div>
   )
};