import Link from "next/link";



function NestedRouting(){
    return(

    <div>
        <Link href={'../'}> HOME PAGE  </Link>

        <h3>NESTED-ROUTING</h3>
        <h2>a page within a page is called nested browsing</h2>
        <h2>product1/GLUCERNA/details</h2>
<h2>like Daraz online shopping</h2>
<li>Simply create a folder and name it PRODUCTS and create another folder glucerna</li>
<li>create a page in it </li>

<Link href='/Nested-Routing/Products'><h3>Product1</h3></Link>
    </div>
    );
}

export default NestedRouting