import { NextResponse } from "next/server"    // 

export function GET(){                           //GET api or custom api to call data 
    console.log("hello from custom API.s");     // will run in node.js or see developer mode in edge
    const data = [1,2,3,4,]                         // custom made data 
        return NextResponse.json({sucess:true, data});           // response(data) will be in json file will show on browser
    
}

