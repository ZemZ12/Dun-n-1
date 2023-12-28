 'use client'

import React, { ReactNode ,useState,useEffect} from "react"
import "/app/globals.css"

import Link from "next/link";
import Menu from "../../Menu/page";
import Image from "next/image";
import Logo from "app/Pics/Logo.png"



interface NavBarProp{
    children: ReactNode;
}


const NavBar: React.FC <NavBarProp>= ({children}) => {

        const [scrolled, setScrolled] = useState(false);

        useEffect(() => {
            const handleScroll = () => {
                const isScrolled = window.scrollY > 50;
                setScrolled(isScrolled);
            }
            window.addEventListener("scroll", handleScroll);
    
            return () => {
                window.removeEventListener("scroll",handleScroll);
            }
        } ,[scrolled]);
    
    
    return (  
    <div className= { `bg-gray-800 pr-4 w-full rounded-md  ${scrolled ? 'fixed z-50 transition bg-opacity-0 duration-500': ' fixed opacity-100 shadow-2xl z-50'}`} >
        
        <nav className="flex justify-between items-center pr-3">
                <div className="hover:bg-white/10 rounded-lg duration-300  ">
                    <Link href="/">
                        <Image src = {Logo} alt="Logo" className="m-auto" width={150} />
                    </Link>
                </div>
            <ul className="flex items-center justify-end space-x-20 ">
                <li className="text-lg  hover:text-orange-400 duration-300 hover:bg-white/10 p-2 rounded-lg"> 
                    <Link  href="/Contact" >
                        Contact
                    </Link>
                    
                </li>
                <li className=" text-lg  hover:text-orange-400 duration-300 hover:bg-white/10 p-2 rounded-lg">
                    <Link href="/AboutUs">
                        About Us
                    </Link>
                </li>
                <li className=" text-lg hover:text-orange-400 duration-300  hover:bg-white/10 p-2 rounded-lg">
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