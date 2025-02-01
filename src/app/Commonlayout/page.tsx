import React from "react"

import Link from "next/link"
function Commonlayout (){

return (

    <div><h3>COMMON LAYOUT my address my name my location my email</h3>
    <Link href={'/Commonlayout/name'}>   NAME</Link>
    <Link href={'/Commonlayout/location'}>         LOCATION</Link>
    <Link href={'/Commonlayout/address'}>   address</Link>
    <Link href={'/Commonlayout//address/email'}>   email</Link>
    
    
<h3>if we have to made changes in some pages only not on every page </h3>
<h2>for example i have somee 500 pages and changes to be made in let say 259 pages  </h2>
<h2>let say i have main page named common layout a page name, inside this i have 258 pages and there folder name will be </h2>
<h2>or we can say we have done nested routing a page within a page </h2>
<h2>name, location, address, email,  folder created</h2>

    
    
    </div>
    
)


};

export default Commonlayout