import Image from "next/image";
import React from "react";

import "./style.css";

import SAFOO1 from "../safwan/SAFOO1.jpg"
import twitter from "../safwan/twitter.jpg"
import facebook from "../safwan/facebook.jpg"
import soundcloud from "../safwan/soundcloud.jpg"
import linkedin from "../safwan/linkedin.jpg"
import pia from "../safwan/pia.png"
import skype from "../safwan/skype.jpg"
import vercel from "../safwan/vercel.jpg"
import tiktok from "../safwan/tiktok.jpg"
import youtube from "../safwan/youtube.jpg"
import insta from "../safwan/insta.jpg"
import whatsapp from "../safwan/whatsapp.jpg"
import github from "../safwan/github.jpg"


export default function safwan () {

    return (

        <html lang="en">
        <head>
            <meta charSet="UTF-8"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <title>Safoo resume</title>
            <link rel="stylesheet" href="style.css"></link>
        </head>
        <body>

        <div className="resume-container">
            
            <div className="left-section">
                <p>        
                    <Image src={SAFOO1} className = "profile-picture"  alt="pic" ></Image>
                <span className="height:0pt; display:block; position:absolute; z-index:-1"></span>
                </p>
            
            <p className="ss">
                <strong><b>SAFWAN AHMED</b></strong>
            </p>
            <p className="ss1">
                HOUSE #330, BLOCK-6, LIAQUATABAD KARACHI PAKISTAN
            </p>
            <p className="ss3">
                Email: <a href="mailto:safwan_saf@ymail.com" className="color: wheat;"><span className="Hyperlink ;
                text-decoration:none">safwan_saf@ymail.com</span></a> or <a href="mailto:safwan_saf@hotmail.com" className="color: wheat;"><span className="Hyperlink *:text-decoration:none">safwan_saf@hotmail.com</span></a> 
            </p>
           <p className="ss3">
                Contact # 0092-3002203047 or 00923090121932
            </p>
                
                <section id="Objective"></section>
                <h3>My Career</h3>
                <p className="color: black; text-align: justify; hyphens: auto;">I want to say that I have completed my three years of Apprenticeship training in Aircraft Maintenance Engineering in Aerospace from Pakistan International Airline in 2006.
                    My professional aviation career includes the working experience as an Aircraft Maintenance Technician in Line (Light) Maintenance of Pakistan International Airline from March 2007 to July 2016, I have also worked as Officer Engineering in Line Maintenance Planning Division from August 2016 to March 2019 and have little experience in Technical Services Engineering and Corporate Safety & Quality Assurance April 2019 to April 2021. Now I am currently working in Technical Publication & Record (Cardex section).
                     I have completed my Boeing 737-300 Airframe, Basic Airframe, Basic Gas Turbine course and more courses from PIA Training Center (Approved from CAA-PAK).
                    I have given the written and oral exam of LWTR (License Without Type Rating) License from Pakistan Civil Aviation Authority (CAA- PAK) and I have passed my written and Oral exam and I have got my basic (LWTR) license in Basic Airframe and Basic Gas Turbine Category and also Conversion of my LWTR into EASA B1 (SARI based) is completed. B2 Conversion is in Progress.
                    </p>               
                        
                <section id="Qualification"></section>
                <h3>Educations</h3>
                <ul>
                <li className="color: black; text-align: justify; hyphens: auto;"><b>Higher Secondary Education in ‘C’ grade from Bahria Foundation College in 2003.</b>(Major subjects Physics, Mathematics, Chemistry and English).</li>
                <li className="color: black; text-align: justify; hyphens: auto;"><b>Secondary School Education in ‘A’ grade from National High School, Karachi in 2001.</b>(Major subjects Physics, Mathematics, Chemistry, Biology and English)</li>
                <li className="color: black; text-align: justify; hyphens: auto;"><b>Bachelors of Science in 2nd division from University of Karachi in 2007.</b>(Major subjects Physics, Mathematics, Chemistry and English).</li>
            </ul>

            <section id="Social"></section>
                <h3>Social Activity</h3>
            
                    <a href="https://twitter.com/@SafwanAhmed_"><Image src={twitter} alt = "pic" width = "25" height = "25" className="profile-picture2"/></a>
                    <a href="https://www.facebook.com/safwan.ahmed.777"><Image src={facebook} alt = "pic" width = "25" height = "25" className="profile-picture2"/></a>
                    <a href="https://www.instagram.com/safwanahmed_"><Image src={insta} alt = "pic" width = "25" height = "25"  className="profile-picture2"/></a>
                    <a href="https://github.com/safwansaf123"><Image src={github} alt = "pic" width = "25" height = "25"  className="profile-picture2"/></a>
                    <a href="https://vercel.com/teams/invite/undefined"> <Image src={vercel} alt = "pic" width = "25" height = "25"  className="profile-picture2"/>      </a>
                    <a href="https://www.piac.com.pk"> <Image src={pia} alt = "pic" width = "25" height = "25"  className="profile-picture2"/> </a>
                    <a href="https://www.youtube.com/@safwanahmed4216"> <Image src={youtube} alt = "pic" width = "25" height = "25"  className="profile-picture2"/> </a>       
                    <a href="https://soundcloud.com/safwan-ahmed-6"> <Image src={soundcloud} alt = "pic" width = "25" height = "25"  className="profile-picture2"/> </a>    
                    <a href="https://join.skype.com/invite/vVzBYMKUHWma"> <Image src={skype} alt = "pic" width = "25" height = "25"  className="profile-picture2"/> </a>
                    <a href="https://www.tiktok.com/@safwansafahmed"> <Image src={tiktok} alt = "pic" width = "25" height = "25"  className="profile-picture2"/> </a>               
                    <a href="https://wa.me/923002253047"> <Image src={whatsapp} alt = "pic" width = "25" height = "25"  className="profile-picture2"/> </a>               
                    <a href="https://wa.me/923002253047"> <Image src= {linkedin} alt = "pic" width = "25" height = "25"  className="profile-picture2"/> </a>               
                    </div>
            


<div className="right-section"> 
  <h1 className="ss4">CURRICULUM VITAE</h1>  
                <section id="Technical Qualification"></section>
                <h3>Technical Qualification</h3>
 
<li>ELECTRIC WIRING INTERCONNECTION SYSTEM (EWIS) from PIA Training Centre. Approved from Civil Aviation Authority of Pakistan in 2022.</li>
<li>Fuel Tank Safety Level II Training (CDCCL) from Pakistan International Airline Training Centre. Approved from Civil Aviation Authority of Pakistan in 2014.</li>
<li>Soft Skills Training for Engineering Personnel Level I from PTC in 2018.</li>
<li>Basic Gas Turbine Course from Pakistan International Airline Training Centre. Approved from Civil Aviation Authority of Pakistan in 2012.</li>
<li>B737-300 Airframe Maintenance Course from PIA, PCAA approved in 2011. </li>
<li>Basic Airframe Course from Pakistan International Airline Training Centre. Approved from Civil Aviation Authority of Pakistan in 2009.</li>
<li>Standard Maintenance Practices Course from PIA Training Centre in 2008.</li>
<li>Apprenticeship Training in Aircraft Maintenance Engineering in Aerospace from Pakistan International Airline Training Centre in 2006.</li>
         2003-2004	a)01 Year Classroom Training: Total Classroom Training: 1645 Hours / 52 Weeks
         2004-2006	b)02 Years On-the-job training in Line & Base Maintenance, shops etc….
			Total time: 4160 Hours / 104 Weeks


        


        <section id="Technical Qualification"></section>
                <h3>Work Experience</h3>            

<li>Working in Technical Publication & Record of Pakistan International Airline as an Officer Engineering (April 2021 to date…..)</li>
<li>Have worked in Corporate safety & Quality Assurance of Pakistan International Airline as an Officer Engineering (August 2020 to April 2021).</li>
<li>Have worked in Technical Services Engineering Line Maintenance of Pakistan International Airline as an Officer Engineering (April 2019 to July 2020).</li>
<li>Have worked in Line Maintenance Planning Division of Pakistan International Airline as an Officer Engineering “Planning Coordiantor” (Jul 2016 to Mar 2019).</li>
<li>Have worked in Line Maintenance (Light Maintenance also have Heavy maintenance experience) Division of Pakistan International Airline as an Aircraft Maintenance Technician (July 2007 to July2016).</li>
                            

                <section id="License"></section>
                <h3>License</h3>
                <ul>
                <li className="color: black; text-align: justify; hyphens: auto;"> <b>License # PCAA.66.02576</b> B1 SARI based, License from Pakistan Civil Aviation Authority (PCAA)
                    </li>
                </ul>
                         

            </div>


            </div>
            </body>
            </html>          
    )
};