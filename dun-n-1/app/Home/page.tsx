
'use client'

import React, { ReactNode } from "react";
import Image from "next/image";
import Outside from "app/Pics/Dun-N-1Outside.jpg"
import Coffee from "app/Pics/VideoDNN1.mp4"
import NavBar from "../components/NavBar/page";
import './layout.css'


interface homeProp {
    children: ReactNode;
}

const HomePage: React.FC<homeProp> = (children) => {

    return ( 
        <html>
            <head>
                </head>
                    <body>
                        <div>
                            <NavBar></NavBar>
                        </div>
                        <div className="flex flex-col justify-center">
                            <div className="relative w-full h-screen overflow-hidden">
                                    <video autoPlay loop  muted className="w-full h-full object-cover absolute top-0 left-0 z-0">
                                        <source src={Coffee} type="video/mp4"/>
                                    </video>
                                </div>
                            </div>
                        <div className="text-center uppercase text-8xl italic font-custom">
                    <h1>hello</h1>
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
 
export default HomePage;


