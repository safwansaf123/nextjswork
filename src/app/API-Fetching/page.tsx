import React from "react"
import Link from "next/link"


interface IData {
userId: number;
id:number;
title:string;
completed: boolean;

}


export default async function Apifetching (){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')    
    const data:IData[] = await response.json()
    console.log("data ==>>", response);
        
    return(

    <div>
    
     <Link href='/API-Fetching/Definations1'>         Definations</Link>
    <Link href='/3-tier-architecture'>            <h2>3-tier-architecture</h2></Link>
    <Link href='/SERVER'>               <h3>SERVER & ITS TYPES</h3></Link>
    <Link href='/API-Fetching/METHOD2'>               <h3>SERVER & ITS TYPES</h3></Link>
    <br />
    <h6>TODOS data in form of table see below</h6>
    
    <ul className="grid grid-cols-5 gap-3">
        <h3>Todos is form of title</h3>
{

data.map((todos) => {
return (

    <li key={todos.id} className="gap-3 py-5 px-4 shadow-xl">{todos.title}</li>

)

        })
    }
        </ul>  
    <ul className="grid grid-cols-5 gap-3">
        <h3 className="text-3xl">Todos is form of ID and title</h3>
{

data.map((todos) => {
return (
    
    <li key= {todos.id} className="gap-3 py-5 px-4 shadow-xl">{todos.title}</li>

)

        })
    }
        </ul>  
    <ul className="grid grid-cols-5 gap-3">
        <h3 className="text-3xl">Todos is form of ID only</h3>
{

data.map((todos) => {
return (
    
    <li key={todos.id} className="gap-3 py-5 px-4 shadow-xl"></li>

)

        })
    }
        </ul>  
    
 
    <ul className="grid grid-cols-5 gap-3">
        <h3 className="text-3xl">Todos is form of all</h3>
{

data.map((todos) => {
return (
    
    <li key={todos.id}className="gap-3 py-5 px-4 shadow-xl">{todos.title}{todos.completed}{todos.userId}</li>

)

        })
    }
        </ul>
           
 
    
    </div>

    )

}
