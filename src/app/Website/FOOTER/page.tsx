import React from "react";
import Link from "next/link";
import { SiFacebook, SiVercel  } from "react-icons/si";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaYoutube, FaSquareGithub } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";


export default function Footer() {

return (

<div className="mt-9">

<footer className="bg-gray-200 -py-8 px-10 text-black-200 flex justify-around">
<div className=" container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

<div>

    <h3 className="text-xl font-bold text-black">Core Courses</h3>
    <ul className="space-y-2 text-lg">
<li>Programming Fundamentals</li>
<li>Web2 Using Next.JS</li>
<li>Earn as You Learn</li>
    </ul>

</div>

<div>

<h3 className="text-xl font-bold text-black">Advance Courses</h3>
    <ul className="space-y-2 text-lg">
<li>Web 3.0 and Metavarse</li>
<li>Cloud-Native (AI) and Deep Learning</li>
<li>Ambient Computing and IoT</li>
<li>Genomics and Bioinformatics</li>
<li>Network Programmability and Automation</li> 
    
       </ul>

</div>

<div>

<h3 className="text-xl font-bold text-black">Social Links</h3>
<div className=" mt-2 flex space-x-5 mb-4">
<Link href =""><SiFacebook className=" w-7 h-7 text-blue-700 pt"/></Link>
<Link href =""><FaYoutube className="w-7 h-7 text-red-600 rounded-full "/></Link>
<Link href =""><FaInstagram className=" w-7 h-7 text-red-600 rounded-full"/></Link>
<Link href =""><FaLinkedin className="w-7 h-7 text-blue-700 rounded-full"/></Link>
<Link href =""><FaTwitter className="w-7 h-7 text-blue-700 rounded-full"/></Link>
<Link href =""><FaSquareGithub className="w-7 h-7"/></Link>
<Link href =""><SiVercel className="w-7 h-7"/></Link>
</div>

<div className=" mt-2 flex space-x-5 mb-4">
<Link href =""><SiFacebook className=" w-7 h-7 text-white rounded-full bg-blue-700 pt-1 pb-1"/></Link>
<Link href =""><FaYoutube className="w-7 h-7 text-white rounded-full bg-red-600 pt-1 pb-1"/></Link>
<Link href =""><FaInstagram className=" w-7 h-7 text-white rounded-full bg-red-500  pt-1 pb-1"/></Link>
<Link href =""><FaLinkedin className="w-7 h-7 text-white rounded-full bg-blue-700 pt-1 pb-1"/></Link>
<Link href =""><FaTwitter className="w-7 h-7 text-white rounded-full bg-blue-700 pt-1 pb-1"/></Link>
<Link href =""><FaSquareGithub className="w-7 h-7  text-white rounded-full bg-black pt-1 pb-1"/></Link>
<Link href =""><SiVercel className="w-7 h-7  text-white rounded-full bg-black pt-1 pb-1"/></Link>
</div>
<a href="mailto:safwan_saf@ymail.com" className="text-black flex items-center gap-2 "><TfiEmail className="w-7 h-7  text-white rounded-full bg-black pt-1 pb-1"/>safwan_saf@ymail.com</a>

    


</div>

</div>

</footer>


    </div>

)

}