import React from "react";

import Link from "next/link";

function Layout () {
    return(

    <div>

<Link href={'../'}> <h4>HOME PAGE</h4>  </Link>
        <h2>LAYOUT tsx </h2>
        <h2>structure of websites</h2>
        <h3>this is root layout</h3>
        <h2> file is used to define a layout component that is shared across multiple routes or pages. </h2>
        <h2>This helps in maintaining a consistent structure and design throughout the application.</h2>
        <h2>changes made here, changes will be made every where</h2>
        
        <header>My Header</header>
      <main>children</main>
      <footer>My Footer</footer>


      <h2>in above case</h2>
      <h2>the Layout component wraps the children prop, </h2>
    <h2>which represents the nested content or pages. </h2>
    <h2>This ensures that the header and footer are consistently displayed across all pages that use this layout.</h2>

    <h2>Children Prop: It uses the children prop to render the nested routes or pages within the layout.</h2>
    <h2>children contain all pages that we have created </h2>
    <h2>Root Layout: In Next.js, the root layout is defined in the app/layout.tsx file, which sets up the basic HTML structure and globally shared UI elements1.</h2>
    <h2>Shared UI: The layout component typically includes elements like navigation bars, footers, and other UI components that are common across different pages.</h2>


<h3>if we have to made changes in some pages only not on every page </h3>
<h2>for example i have somee 500 pages and changes to be made in let say 259 pages  </h2>
<h2>let say i have main page named common layout a page name, inside this i have 258 pages and there folder name will be </h2>
<h2>or we can say we have done nested routing a page within a page </h2>
<h2>name, location, address, email,  folder created</h2>
    </div>
    );
}

export default Layout

