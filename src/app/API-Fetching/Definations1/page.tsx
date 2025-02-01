export default function Apifetching1 (){
    return(

    <div>

<h6 className="mt-4"><u>Application Programming Interface (API), </u>often referred to as web API, is an interface that allows two systems to communicate with each other </h6>
 <h3>(share data and access resources). One of its purposes includes making visible the internal details of how a system works to only those that a programmer finds required.</h3>
<div>
           <h6 className="mt-4"><u>Fetch API:</u></h6><h1>is a Web API that uses promises to make network requests over the HTTP/1.1 protocol. </h1>
            <h1>It is an asynchronous web API that comes with native JavaScript, and it returns the data in the form of promises2. </h1>
            <h1>You can make both same or cross-origin requests using the Fetch API1. The API takes at least one argument, </h1>
            <h1>i.e., the path of the resource you are interested in fetching1. When the response is received, it is converted to JSON1</h1>
 
 <h6 className="mt-4">A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.</h6>
 <h3> It allows you to write asynchronous code in a more synchronous fashion, making it easier to read and maintain.Key Concepts</h3>
<li>A Promise can be in one of three states:</li>
<li>Pending: The initial state, neither fulfilled nor rejected.</li>
<li>Fulfilled: The operation was completed successfully.</li>
<li>Rejected: The operation failed.</li>


<h6 className="mt-4"> Backend</h6>
<h3>The backend is the server side of the website. It stores and arranges data, and also makes sure everything on the client side of the website works fine1. </h3>
<h3>It is the portion of software that does not come in direct contact with the users1. The backend is a combination of servers and databases2. Servers control how users access files, while databases are organized and structured collections of data2.</h3>


<h6>TODOS</h6>
<h1>While fetching the web site https://jsonplaceholder.typicode.com/todos</h1>  
    <h1>this web site contain data </h1>
    <h1><li>userId: number;</li>
        <li>id:number;</li>
        <li>title:string;</li>
        <li>completed: boolean;</li>
</h1> 

<h3>this contain approx 250 plus data </h3>

<h2>method used to fetch api or function used to called data is FETCH</h2>
<h5>Fetching is done by calling data from backend to front end via API's </h5>
<h1>API is used where frontend and backend is separate</h1>
<h1>in server component API fetching is very simple whats the reason?</h1>
<h1>beacuse server component can be made async function </h1>
<h1>becuse in server component we can use await key function </h1>
<h1>in client component it is difficult</h1>
<br />

<h5>AUTHENTICATION   is login </h5>
<h5>AUTHORISATION  after login or while logging you are authorised or not?</h5>
<br />
<h5>DATA BASE is never acess from client side due secirity reason </h5>
<h1>if we do we can see in the request </h1>
<h1>server site coding is done via API</h1>
<h1>EXAMPLE if request from client site to server site via API, lets say facebbok data return in html we see facebook</h1>
<h2>client request to end point via api a funtion is called in return html or what ever or json or binary or any ....</h2>
<h3>In simple word what SOURCE CODE is sent & in return what SOURCE CODE is get </h3>
<h1></h1>
<br />
<h3>IN NEXT JS we made CUSTOM API   we made api not from another third party</h3>
<h1>create a folder in APP name it api</h1>
<h1>provide end point </h1>
<h1>create another folder in api it name will be end point from data is fetched here is todos</h1>
<h1>api\todos</h1>
<h1>create file route.ts</h1>
<h1>create a function named them with function WHAT your doing if "get" so function name will get </h1>
<h5>GET(to call data), POST(used for data to insert), PATCH(used to update data in data base ), DELETE(for delete)</h5>
<h1>most common widely used API</h1>
<h2>so function name will be on name of API</h2>
<h1>must be in CAPS</h1>



<br/>

       </div>
       </div>
    )
}