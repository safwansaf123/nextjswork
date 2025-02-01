import React from "react";



export default async function Fakeapi() {
    
    const data = await fetch('https://fakestoreapi.com/products')
    const data1 = await data.json()
    console.log(data1);
    
    return(
        <div className="p-5 grid grid-cols-4 gap-4">
        <h1>hello data of Students method one </h1>
        
    {
        data1.map((val:any, i:number)=>{
return(

    <div className="shadow-lg border-2 rounded-lg p-5">
        <br />
        <br />
        
       <h1>Product Name =  {val.title}</h1>
        <h2>product price  = {val.price}</h2>
        <h3>Student category = {val.category}</h3>
        
               
                
        </div>
)

        })
    }
    
    
        </div>
    )
};