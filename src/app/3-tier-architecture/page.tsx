import React from "react";

export default function Tier3(){

return(

    <div>


<h6>The logical tiers of a 3-tier application architecture</h6>
<p><strong>Presentation tier.</strong>&nbsp;This tier, which is built with HTML5,&nbsp;<a href="https://www.theserverside.com/definition/cascading-style-sheet-CSS">cascading style sheets</a>&nbsp;and&nbsp;<a href="https://www.theserverside.com/definition/JavaScript">JavaScript</a>, is deployed to a computing device through a web browser or a web-based application. The presentation tier communicates with the other tiers through&nbsp;<a href="https://www.techtarget.com/searchapparchitecture/definition/application-program-interface-API">application programming interface</a>&nbsp;calls.</p>
<p><strong>Application tier.</strong>&nbsp;The application tier, which may also be referred to as the logic tier, is written in a programming language such as&nbsp;Java&nbsp;and contains the&nbsp;<a href="https://www.techtarget.com/whatis/definition/business-logic">business logic</a>&nbsp;that supports the applications core functions. The underlying application tier can either be hosted on distributed servers in the cloud or on a dedicated in-house server, depending on how much processing power the application requires.</p>
<p><strong>Data tier.</strong>&nbsp;The data tier consists of a database and a program for managing read and write access to a database. This tier may also be referred to as&nbsp;the storage tier&nbsp;and can be hosted on-premises or in the cloud. Popular database systems for managing read/write access include&nbsp;<a href="https://www.techtarget.com/searchoracle/definition/MySQL">MySQL</a>, PostgreSQL, Microsoft SQL Server and&nbsp;<a href="https://www.techtarget.com/searchdatamanagement/definition/MongoDB">MongoDB</a>.</p>


    </div>
)

}

