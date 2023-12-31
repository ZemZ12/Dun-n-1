import React, { ReactNode } from "react";


import Link from "next/link";
import NavBar from "../components/NavBar/page";
import Footer from "../components/Footer/page";
import MapAPI from "../components/Map/page";
import './layout.css'

interface AboutUsProp{
    children : ReactNode;
}

const AboutUs: React.FC<AboutUsProp> = ({children}) => {
    return ( 
        <html>
        <head>
           
        </head>
        <body>
            <div>
            <NavBar children={undefined}>

            </NavBar>
            </div>
            <div >
                <section className="flex justify-center items-center h-screen">
                    <MapAPI></MapAPI>
                </section>
            </div>
            <Footer/>
        </body>
    </html>
     );
}
 
export default AboutUs;