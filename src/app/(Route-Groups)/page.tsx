
import Link from "next/link";

import React from "react";

export default function RouteGroups(){

    return(

        <div>
<Link href={'../'}> HOME PAGE  </Link>
        <h4>my wallet SAFWAN AHMED</h4>


        <h2>
        Route groups are useful for:</h2>

<li>Organizing routes into groups e.g. by site section, intent, or team.</li>
<li>Enabling nested layouts in the same route segment level:</li>
<li>Creating multiple nested layouts in the same segment, including multiple root layouts</li>
<li>Adding a layout to a subset of routes in a common segment</li>
<li>Adding a loading skeleton to specific route in a common segment</li>
Convention
<li>A route group can be created by wrapping a folders name in parenthesis: (folderName)</li>
        
        </div>
    )
};
