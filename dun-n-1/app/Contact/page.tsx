import React, { ReactNode } from "react";
import Link from "next/link";
import NavBar from "../components/NavBar/page";
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
                <NavBar>

                </NavBar>
                </div>
                <div >
                    <section className="flex justify-center items-center h-screen">
                        <p>Contact Page</p>
                    </section>
                </div>
                <footer className="bg-gray-800 py-4">
                    <div className="mx-auto flex justify-between items-center container">
                        <p>this is my footer</p>
                        <p>2023 Dun-N-1</p>
                    </div>
                </footer>
            </body>
        </html>
     );
}
 
export default Contact;