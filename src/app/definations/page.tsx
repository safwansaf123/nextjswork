import Link from "next/link"

import Header from "../Props"; 

import Prop from "../PROPS/page";

function Definations() {
    return (
  <div>
<Link href={'../'}> HOME PAGE  </Link>

  <h3> DEFINATIONS</h3>
  
<h2> A FUNCTION created above is called COMPONENT </h2>
<h2>every component in react is by default server</h2>
<h2> A FUNCTION who return a HTML is called a component of REACT or next js</h2>
<h2> a peice of code where it can run or execute called component </h2>
<h2>  next-js component based articheture </h2>
<h2>benefits create many code called component and compile them</h2>
<h2> many codes are made and connected means many componenys are made and connected to create web page </h2>
<h2> NEXT-JS is a framework which comes with some set up rules that we have to obey </h2>
<h2> TSX is Type Script XML </h2>
<h2>div is not HTML CODE</h2>
<h2>div is type script xml code called JSX</h2>

<h3>create next app project</h3>
<h2>write code npx create-create-app@latest</h2>
<h2>npx create-create-app@latest ./    will not ask folder name</h2>

<h3>BEBBEL is transpiler </h3>
<h3>browser understand javascript and jsx not understand by him </h3>
<h3>browser doesnt understand jsx so compiler is there </h3>
<h2> DOM Document object module</h2>
<h2> here we can write only on heading h1 for more heading or codes we have to use div/div</h2>
<h2> npm run dev    means run local development server</h2>
<h2> localhost3000    3000 is port where server recieve </h2>
<h2> home page or landing page    when browser is open </h2>
<h2> browser dosnt understand tsx it understand only html css javascript </h2>
<h2>To run .tsx files in a browser, they need to be compiled into JavaScript using a TypeScript compiler. </h2>
<h2>This process converts the TypeScript and JSX code into plain JavaScript that browsers can execute. </h2>
<h2> cd change directory </h2>
<h2> page .tsx by nauture is component of next.js </h2>
<h2> The div tag in HTML is used to define a division or a section in a document. 
It acts as a container for other HTML elements, allowing you to group them together for styling or scripting purposes.
 page.tsx work as pages on browser compiler runs page.tsx if we change the file name will not run </h2>
<h2> http://localhost:3000/definations</h2>
<h2>npx run dev</h2>
<h2>attributes in HTML</h2>
<h2>proP in COMPONENTS</h2>
<Header profile='safwan ahmed' />
<Link href='../PROPS'>PROPS</Link>
<Prop profile={"62829"}/> 
<h2>attributes and probes  are same </h2>
<h2>after opening tag the things passed is called attributes in HTML</h2>
<h2> example <Link href={'../'}></Link></h2>
<h2>after opening tag the things passed is called PROBES in COMPONENTS see</h2> <h3><Link href={'/ANCHOR-TAG'}>ANCHOR TAG</Link></h3>
<h2>COMPONENT is code or typscript function which retuns HTML</h2>
<h2>CUSTOM COMPONENTS </h2>
<h2>HTML TAG IN BRACKETS  opening or closing tags</h2>
<h2>HTML TAG which not have closing tag called self closing tag have slash on end of closing tag </h2>

<h2>import Link from next/link  // this is for <link></link></h2>

<h2>import Navbar from ../Navbar; // this is for Navbar </h2>

<h3>LAYOUT.TSX  or ROOT LAYOUT</h3>
<h2>this is used for structure of websites </h2>
<h2>see layout tsx page</h2>

<h3>fAVICON </h3>
<h2>used for icon  logs just put image init</h2>

<h3>ROUTES</h3>
<h2>pages also called routes or </h2><h3>GROUP ROUTINGS</h3>
<h2>for example pages for LOGIN, SINGNUP, FORGET PASSWORD, etc PUT THIS PAGES IN ONE CATEGORY CALLED AUTHENTICATION</h2>


<h3>RENDERING</h3>
<h2>Convert Build to HTML, CSS, javaSCRIPT ETCC.....</h2>
<h2>it determines how your application handles content fetching and rendering, either on the server or as static files</h2>
<h2>CLIENT SITE RENDERING is done on browser, CLIENT means Browser or front END</h2>
<h2>when we request FRPM CLIENT TO SERVER and server is forexample localhost3000 in response a build is created </h2>
<h2>and this BUIld is shifted on browser </h2>
<h2>from BUILD to creation of the PAGES or we say displaying of the pages on browser is called Rendereing</h2>
<h2>and when this Rendering done on Browser is called </h2><h3>CLIENT SIDE RENDERING </h3>
<h2>when we search on search engine it sends request to our website server in response BUILD is return and in this Build </h2>
<h2>Draw backs of Client site rendereing is SEO down if content not found while searching , website performance down, Computer power or system is utilized higly,</h2>
<h2>computational power is used more beacuse of heavy code if website is heavy</h2>
<h2>and when this rendering done on SERVER is called </h2><h3>SERVER SITE RENDERING</h3>
<h2>Build is run on server or rendering done on server, server already has more RAM more power , easily serached, SEO increased,  </h2>
<h3>by default rendering on next js is server site </h3>
<h2>every component in react is server by default</h2>

<h2>STATIC SITE RENDERING (SSR)   rendering </h2>

<h3>SEO = Search Engine Optimization</h3>
<h2>website ranking is done on it </h2>

<h3>ameen alam def</h3>
<h2>absolute path @/   tells go to root then </h2>
<h2>relative part ../  or  ./about/def</h2>
<h2>JSX is markup language means data in angle bracket <></> </h2>
<h2>jsx requiremnt is open tag and close tag</h2>
<br />
<h2>DOM is run in browser</h2>
<h2>in JSX file HTML is written by nextjs or react </h2>
<h2>we write our program but next js writes HTML in background to run websites</h2>
<h2>DECLARATIVE APPROACH = some one is behind the scene who operates </h2>
<h2>IMPERATRIVE APPROACH = every single qoute OR code is define by USER </h2>
<h2>React is declarative programing  run by its own not depended on user </h2>
<h4>REAL DOM   where data is displayed</h4>
<h4>VIRTUAL DOM  where data is build not displayed this is for checking</h4>

<h2>npx shadcn@latest</h2>
<h2>it is react next.js library</h2>
<h2>pre build components are there init</h2>
<h2>ready made components are there like buttons, forms,etc....</h2>


<h5>STATE MANAGEMENT</h5>

</div>


);
}
    export default Definations