import React from "react";
import Link from "next/link";

const Layout = ({children}: { children : React.ReactNode}) => {

    return (
      
        <div> <h4>COMMON LAY OUT FOR MY INFORMATION wiil be display on address location name email only </h4>
           <Link href={'/Commonlayout'}>home page to common layout</Link>
           
             {
        children
    }
    </div>
    )

}

export default Layout