
'use client'
import React, { ReactNode , useState, useEffect} from "react"
import Link from "next/link";
import NavBar from "../components/NavBar/page";
import './layout.css'
import Footer from "../components/Footer/page";


interface MenuProp{
    children : ReactNode;
}

const Menu : React.FC<MenuProp> = ({children}) =>{

    
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
                        <p>Menu Page</p>
                    </section>
                </div>
                <Footer/>
            </body>
        </html>
    );
}
 
export default Menu;