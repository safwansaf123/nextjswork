
import Link from 'next/link'

import Navbar from '../Navbar';
export default function Page() {
  return (
    <div>
    <Link href={'/about'}> linkeds  </Link>
    <h2>hello</h2>
    
    <h1>definations</h1>
    <h2>creating links in next js in between all pages</h2>
    <h2>first create a page where to go via link</h2>
    <h2>lets say i have created page name linked</h2>
    <h2>now make page.tsx file init</h2>
    <h2>write a code </h2>
   <h2>import Link from next/lin</h2>
   <h2>create a function </h2>
<h2> now write a code of link</h2>
<h2>where you want to go or go to that page write in href= /about</h2>
<h2>above statment says that i am going in about Page</h2>
<h2>after giving link writes its name say linkeds</h2>
<h2>while moving cursor on its shape will change</h2>
<h2>href= ./about</h2>
<h2>i am going in about page</h2> 
<h2>href= ./</h2>
<Navbar/>
<h2>i am searching in same folder or one step back of file or see </h2>
<h2>href= ../</h2>
<h2>i am going in previous than previous page means two page back or searching out side same folder</h2>   
<h2></h2>
</div>
  );
}


