 'use client'

import React, { ReactNode } from "react"
import "/app/globals.css"

import Link from "next/link";
import Menu from "../../Menu/page";
import Image from "next/image";
import Logo from "app/Pics/Logo.png"



interface NavBarProp{
    children: ReactNode;
}


const NavBar: React.FC <NavBarProp>= ({children}) => {
    
    return (  
    <div className="bg-gray-800 pr-4">
        <nav className="flex justify-between items-center">
                <div>
                    <Link href="/">
                        <Image src = {Logo} alt="Logo" className="m-auto" width={150} />
                    </Link>
                </div>
            <ul className="flex items-center justify-end space-x-20">
                <li className="m-auto text-lg transform hover:scale-150 transition duration-300 "> 
                    <Link href="/Contact" >
                        Contact 
                    </Link>
                </li>
                <li className="m-auto text-lg transform hover:scale-150 transition duration-300 ">
                    <Link href="/AboutUs">
                        About Us
                    </Link>
                </li>
                <li className="m-auto text-lg transform hover:scale-150 transition duration-300 ">
                    <Link href="/Menu">
                        Menu
                    </Link>
                </li>
                
            </ul>
        </nav>
        
    </div>
    );
}
 
export default NavBar;