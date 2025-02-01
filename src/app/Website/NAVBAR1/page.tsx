'use client'


import Link from "next/link";
import React from "react";





export default function Navbar1(){

return (

    <div>
<nav className="bg-green-600 text-white h-auto sm:h-12 md:h-16 lg:h-16 py-2 px-3 flex flex-col sm:flex-row justify-between items-center">


<div className=" flex items-center space-x-5 mb-4 sm:mb-0">
    <img src="./imagegovernor/giaic.png"alt="pic" className="w-12 h-12 mt-10"/>
    <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
        <a href='/safwanahmed'>SAFWAN AHMED</a>
    </h1>

</div>

<div className="w-full sm:w-auto mb-4 sm:mb-0">

<ul className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-5">

    <li><Link href="./" className="hover:text-red-600"> Home</Link> </li>
    <li><Link href='/Address' className="hover:text-gray-900"> Aboutus</Link></li>
    <li><Link href='/workplaces' className="hover:text-yellow-400"> Contact</Link></li>
</ul>

</div>
<div className="w-full sm:w-auto">
<ul className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-5">
<li><Link href="#!" className = "hover:text-blue-500"> login</Link></li>
<li><Link href="#!" className = "hover:text-blue-500"> signup</Link></li>

</ul>

</div>
</nav>

    </div>

);

}

// py is used for padding vertically
// px is used for padding horizontally
// h- is used for height
// flex is used for row
// justify-around is used for gap between them will be equal, space from sides are equal
// item center is used for vertically alignment
// href="#!"  this will only show link while click not go any where