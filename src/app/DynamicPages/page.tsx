import React from 'react'

const page = () => {
  return (
    <div>
     <h5>dynamic pages</h5> 
     <h1>its like a book </h1>
     <h1>if we changes pages of book onw by one</h1>
     <h1>in http code we just write /page number</h1>
     <h1>the code will print on page number</h1>

<h2>example</h2>
<h3>http://localhost:3000/DynamicPages/one</h3>
<h3>will go to this page one </h3>
<h3>also print one on that page</h3>
<h3>http://localhost:3000/DynamicPages/two</h3>
<h3>will go to this page two </h3>
<h3>also print two on that page</h3>
<h3>http://localhost:3000/DynamicPages/three</h3>
<h3>will go to this page three </h3>
<h3>also print three on that page</h3>

    </div>
  )
}

export default page
