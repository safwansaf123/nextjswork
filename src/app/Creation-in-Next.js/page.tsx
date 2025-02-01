import Link from "next/link";
import Navbar from "@/app/Navbar";


function Creations() {
    return (
  <div>

<Link href='../'><h4>home Page</h4></Link>
<br />
<h3>HOW TO CREATE MULTIPLE PAGES</h3>
<h1>create a folder in app and named it, it will be your page name </h1>
<h1>create page.tsx in a folder that you have created its called component</h1>
<h1>now create a component or function name(params:type) {} </h1>
<h1>now make function export default to see on web page</h1>
<h3>CALLED ONE WAY DATA BINDING</h3>
<br />
<h3>HOW TO CREATE A TEXT THAT WILL DISPLAY ON EVERY page</h3>
<h2>there are many ways</h2>
<li>1-write on every page</li>
<li>2-write a code and create link and share</li>
<li>3-This method totally different open layout.tsx file</li>
<li>write code there in layout.tsx file OR share link init OR write text</li>
<li>create link in layout.tsx file</li>
<br />

<h3>HOW TO CREATE TSX FILE IN SAME FOLDER AND WHAT IT WILL DO OR HAPPEN called CUSTOM COMPONENT</h3>
<h3>If we need same code on every page so write it on every page(difficult) or create a component and import it(EASY)</h3>
<h2>creating tsx file in same folder twice with different name </h2>
<h2>the second tsx file created, the content in this file will DISPLAY on top of the browser it is not page </h2>
<li>Create a .tsx file in app or any folder that already have tsx file and name it let say Navbar</li>
<li>create a code function</li>
<li>now this code can be imported or exported on other pages</li>
<li>write this code on other tsx file import Navbar from ./navbar</li>
<li>if named it safoo so import safoo from ./safoo</li>
<li>write a self closingtag of Navbar where the same code u want to repeat</li>
<br />
<h3>HOW TO CREATE COMPONENT</h3>
<li>simple create page.tsx file or .tsx file or any name.tsx or Navabr.tsx</li>
<li>create a peace of code called component and use where u want</li>
<br />
<h3>HOW TO CREATE CUSTOM COMPONENT (MAY BE USE AS A LINK)& HOW TO IMPORT</h3>
<li>simple create page.tsx file in app folder not in other folder</li>
<li>name of custom component will be any like Navbar.tsx file </li>
<li>use this custom component as a code in TAG, NOT as HTML tag like <></></li>
<li>like <Navbar/> </li>
<li>here tag has forward slash in end</li>
<li>Component Tags is represneted by first letter IS capital and </li>
<li>HTML tag First letter will be small always</li>
<li>write this code  =   import Navbar from ../Navbar this should be in inverted commas;</li>

<br />
<h3>WHAT IS ATTRIBUTES OR PROBES & HOW TO CREATE</h3>
<li>SEE DEFINATIONS</li>

<br />
<h3>HOW TO CREATE or DO NESTED ROUTING and for what it will be used</h3>
<h2>it is used for just say a example A product name is GLUCERNA when we will click on it, its detail will be seen</h2>
<h2>/GLUCERNA/details</h2>
<h2>like Daraz online shopping</h2>
<li>Simply create a folder and name it PRODUCTS and create another folder glucerna</li>
<li>create a page in it </li>

<br />
<h3>WHAT IS RENDERING HOW TO CREATE IT</h3>
<h2>it determines how your application handles content fetching and rendering, either on the server or as static files.</h2>
<h2>Create a component </h2>
<h2>and top of component write use client in inverted comaas single one to make Client site Rendering</h2>
<h2>By default next js file run on= server site rendering </h2>

<br />
<h3>What is is ROUTE GROUP and used for and how to create</h3>
<h2>In the app directory, nested folders are normally mapped to URL paths.
 <li>However, you can mark a folder as a Route Group to prevent the folder from being included in the routes URL path.</li>
<li>This allows you to organize your route segments and project files into logical groups without affecting the URL path structure.</li></h2>
<h4><li>In Simple words you dont have to go to other pages one by one just jump into that page</li></h4>
<h2>example: if i wanted to go in address page i have to type http://localhost:3001/Route-Groups/Address,</h2>
 <h2>after creating Route groups easily jump there  http://localhost:3001/Address, http://localhost:3001/workplaces </h2>
<h2>do nested browsing and move all folder in one place </h2>
<h2>later rename name the folder by paranthesis means in curly brackets</h2>

<br />
<h3>how to import react icon from react icon</h3>
<h2>first install react icon from react by command</h2>
<h2>npm install react-icons</h2>
<h2>open react icon in browser and install which icon you want</h2>
<br />
<h3>how create hooks in react js</h3>
<h3>just export default a function</h3>
<h2>now create a event with callback function</h2>

<br />
<h3>how to embed sanity in nextjs project</h3>
<h2>npm create sanity@latest</h2>
<h2>after installing many question are asked</h2>
<h2>create a folder in named schema in sanity folder</h2>
<h2>create product.ts file or what ever name you want</h2>
<h2>in product.ts file create an object what ever you need, see sanity project in same file and in other folder project</h2>
<h2>in new project you defined the structure, field, images, .....  etc.... called schema</h2>
<h2>run project npm run dev</h2>
<h2>http://localhost:3000/studio</h2>
<h2>in case of new project you put name app instead of studio  http://localhost:3000/APP</h2>
<h2>it will ask authentication</h2>
<h2>will show no document type</h2>
<h1>you have to define structure</h1>
<h2>you have define schema but it has not made you have to define</h2>
<h2>you have to registered your schema in schema types</h2>
<h2>now go in schema types in index.ts</h2>
<h1>in index.ts file add your schema in square brackets by separating by commas[]</h1>
<h3>now go to page.tsx file</h3>
<h2>write code to get data and fetch data </h2>
<h2>client file connect from sanity data base </h2>
<h2>so while writing code in page.tsx </h2>
<h1>code will be async function because it will return promise</h1>
<h1>first connect with sanity data base that is client</h1>
<h1>now fetch it and return it </h1>
<h1>while fetching you need URL OR QUERY </h1>
<h1>QUERY in form of GROQ</h1>

<h3>now call back the async function </h3>



</div>
    );
}

export default Creations