import Link from "next/link";

import Navbar from "./Navbar"; // see in ./navbar means on step back


import Header from "./Props"; 

import Props from "./Props";

import Routegroups from "./(Route-Groups)/page"

export default function Home() {
  return (
    <div>
      <Navbar/>
      
<Link href='/definations'> <h5>  1-DEFINATIONS  </h5></Link>
<Link href= '/Creation-in-Next.js'><h5>  2-CREATIONS</h5> </Link>
<Link href='/linked'><h5> 3-LINKED </h5> </Link>
<Link href='/Nested-Routing'><h5>  4-NESTED-ROUTING</h5> </Link>
<Link href='/LAYOUT'>  <h5> 5-LAYOUT</h5> </Link>
<Link href={'/ANCHOR-TAG'}>  <h5> 6-ANCHOR TAG </h5></Link>
<Link href='/Rendering'>      <h5> 7-Rendering </h5>  </Link>
<Link href='/Address'> <h5> 8-Route-Groups1 </h5></Link>
<Link href='/workplaces'> <h5> 9-Route-Groups 2 </h5></Link>
<Link href={'./app/(Route-Groups)/'}><h5> 8-9-Route-Groups 1&2 </h5></Link>
<Link href='/Website'> <h5> 10-governer web page </h5></Link>
<Link href={'/Commonlayout'}> <h5> 11-Common layout </h5></Link>
<Link href={'/Dynamiclayout'}>      <h5> 12-Dynamiclayout </h5>  </Link>
<Link href='/Dynamic-Routings'>      <h5> 13-Dynamic-Routing </h5>  </Link>
<Link href='/DynamicPages'>      <h5> 19- DYNAMIC PAGES  </h5></Link>
<Link href='/safwan'>      <h5> 14-SAFWAN CV </h5>  </Link>
<Link href='/API-Fetching'>      <h5> 14-API-Fetching </h5>  </Link>
<Link href='/SERVER'>      <h5> 15- SERVER & its TYPES  </h5> </Link>
<Link href='/HOOKS'>      <h5> 16- HOOKS and its TYPES  </h5>  </Link>
<Link href='/SanityCMS'>      <h5> 17- SANITY CMS  </h5>  </Link>
<Link href='/GITHUBupload'>      <h5> 19- GITHUBupload  </h5></Link>




<Header profile='safwan ahmed' />

<Props profile={"62829"}/> <h2>data written in page prop </h2>

<h1> hello safwan say hi to world from okasha </h1>

<Routegroups/>
</div>
  );
}


