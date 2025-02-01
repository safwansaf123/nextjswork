import { NextResponse } from "next/server"    // 


export function PATCH(){                         //PATCH api or custom api to UPDATE data 
    console.log("hello from custom API.s");     // will run in node.js or see developer mode in edge
    const data = [1,2,3]                         // custom made data 
        return NextResponse.json({sucess:true, data});                   // response(data) will be in json file will show on browser
    
}

// THIS "PATCH" API WILL NOT WORK ON BROWSER BECAUSE YOU NEED TO UPDATE DATA BASE
//  ON BROWSER "GET" API WILL WORK ONLY BECAUSE JUST CALLING
// FOR PATCH API YOU NEED POSTMAN EXTENSION in visual code 
// or you need data base behind 