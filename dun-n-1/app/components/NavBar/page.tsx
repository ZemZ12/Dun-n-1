import React, { ReactNode } from "react"
import Link from "next/link";
import Menu from "../../Menu/page";

interface NavBarProp{
    children: ReactNode;
}


const NavBar: React.FC <NavBarProp>= ({children}) => {
    
    return (  
    <div className="bg-gray-800 p-6">
        
        <nav className="flex justify-end">
            <ul className="flex space-x-5">
                <li>
                    <Link href="/Contact">
                        Contact 
                    </Link>
                </li>
                <li>
                    <Link href="/AboutUs">
                        About Us
                    </Link>
                </li>
                <li>
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