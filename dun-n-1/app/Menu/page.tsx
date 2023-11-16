import React, { ReactNode } from "react"
import Link from "next/link";
import NavBar from "../components/NavBar/page";

interface MenuProp{
    children : ReactNode;
}

const Menu : React.FC<MenuProp> = ({children}) =>{

    return (
        <div>
            <NavBar>

            </NavBar>
            <h2>This is Menu Page</h2>
        </div>
);

}
 
export default Menu;