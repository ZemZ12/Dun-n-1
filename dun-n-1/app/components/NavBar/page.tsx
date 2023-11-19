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

    const [scrolled, setScrolled] = useState(true);

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
    <div className= { `bg-gray-800 pr-4 w-full rounded-md ${scrolled ? 'fixed z-50 transition bg-opacity-0 duration-500': 'opacity-100 fixed z-50'}`} >
        
        <nav className="flex justify-between items-center pr-3">
                <div>
                    <Link href="/">
                        <Image src = {Logo} alt="Logo" className="m-auto" width={150} />
                    </Link>
                </div>
            <ul className="flex items-center justify-end space-x-20">
                <li className="m-auto text-lg transform hover:scale-150 transition duration-300 hover:text-orange-400 ease-in-out"> 
                    <Link href="/Contact" >
                        Contact 
                    </Link>
                </li>
                <li className="m-auto text-lg transform hover:scale-150 transition duration-300  hover:text-orange-400 ease-in-out">
                    <Link href="/AboutUs">
                        About Us
                    </Link>
                </li>
                <li className="m-auto text-lg transform hover:scale-150 transition duration-300 hover:text-orange-400 ease-in-out">
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