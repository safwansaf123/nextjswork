"use client"
import React from "react";

import { useEffect } from "react"


    function RenderUseEffectOnEveryComponentRender (){

//==> example 1

    useEffect(() => {
        document.title = "Render Use Effect on Every Component Render"
    });
    return(
    
        <React.Fragment>
        <h1>Render Use Effect on Every Component Render</h1>
        </React.Fragment>
    )};
            export default RenderUseEffectOnEveryComponentRender

//   It will run useffect every time, whenever the component renders/re-renders.


//==> example 2

    useEffect(() => {
        document.title = "Render Use Effect on Every Component Render"},[]);
    
//   It will run useffect only one time, whenever the component renders

    
//==> example 3    

//    useEffect(() => {
//      document.title = pageTitle;}, [pageTitle]);
    
//  It will run useffect once by default. After that, 
//  If passed props value in dependencies array changes, 
//  it will trigger useEffect to run again.
    

//==> example 4   

//    useEffect (()=> {
//      document.title = currentTitle;    
//        }, [currentTitle]);

//    It will run useffect once by default.
//    After that, If the current state changes //in dependencies array changes, it will /trigger useffect to run again.
// ‹React.Fragment>
// <h1>Render Use Effect on Every Component Render</h1>
// ‹input type="text" value-(currentTitle) onchange-(updatePageTitle) /›
//  </ React.Fragment>
  
    