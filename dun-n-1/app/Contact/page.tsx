import React, { ReactNode } from "react";
import Link from "next/link";
import NavBar from "../components/NavBar/page";

interface ContactProp{
    children : ReactNode;
}

const Contact: React.FC<ContactProp> = ({children}) => {



    
    return ( 
        <div>
            <NavBar>

            </NavBar>
            <h2>this is Contact Page</h2>
        </div>
     );
}
 
export default Contact;