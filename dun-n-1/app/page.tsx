
import "/app/globals.css"
import Document, { Html,Head,Main,NextScript} from "next/document";

import Image from "next/image";
import NavBar from "./components/NavBar/page";
import Menu from "./Menu/page";
import HomePage from "./Home/page";
import Icon from "./Pics/Logo.png"

export default function Home() {
    return (
        <div>
           <NavBar children={undefined}> 
            </NavBar>  
            <HomePage children={undefined}>   
              
            </HomePage>  
            
        </div>
    );
  };
  
  