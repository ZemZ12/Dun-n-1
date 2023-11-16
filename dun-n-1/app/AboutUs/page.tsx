import React, { ReactNode } from "react";
import Link from "next/link";
import NavBar from "../components/NavBar/page";

interface AboutUsProp{
    children : ReactNode;
}

const AboutUs: React.FC<AboutUsProp> = ({children}) => {
    return ( 
        <div>
            <NavBar>

            </NavBar>
            <h2>this is About us Page</h2>
        </div>
        

     );
}
 
export default AboutUs;