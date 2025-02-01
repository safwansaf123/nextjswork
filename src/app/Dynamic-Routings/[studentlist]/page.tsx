import React from "react";


const Student = ({params} : { params : { studentlist : string} }) => {
    
    console.log(params);
    
    return (

        <div>
<h1>STUDENT DETAILS</h1>
<h3>Name: {params.studentlist}</h3>

        </div>
    )
}

export default Student