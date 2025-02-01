import Link from "next/link";



function Product1 (){
    return(

    <div>
        <Link href={'../'}> HOME PAGE  </Link>
        <Link href={'/Nested-Routing'}>  previous page </Link>
        
<h2>water bottle</h2>
    </div>
    );
}

export default Product1