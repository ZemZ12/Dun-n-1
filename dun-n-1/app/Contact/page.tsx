import React, { ReactNode } from "react";
import Link from "next/link";
import NavBar from "../components/NavBar/page";
import Footer from "../components/Footer/page";
import './layout.css'

interface ContactProp{
    children : ReactNode;
}

const Contact: React.FC<ContactProp> = ({children}) => {
    
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
                        <p>Contact Page</p>
                    </section>
                </div>
                <Footer/>
            </body>
        </html>
     );
}
 
export default Contact;