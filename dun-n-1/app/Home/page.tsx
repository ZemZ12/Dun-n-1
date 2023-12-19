
'use client'

import React, { ReactNode } from "react";
import Image from "next/image";
import PIC from "app/Pics/DUN.png"
import Outside from "app/Pics/Dun-N-1Outside.jpg"
import Coffee from "app/Pics/VideoDNN1.mp4"
import NavBar from "../components/NavBar/page";
import Footer from "../components/Footer/page";
import Testimonials from "../components/Testomonials/page";
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
                            <NavBar children={undefined}></NavBar>
                        </div>
                        <div className="flex flex-col justify-center">
                            <div className="relative w-full h-screen overflow-hidden">
                                    <video autoPlay loop  muted className="w-full h-full object-cover absolute top-0 left-0 z-0">
                                        <source src={Coffee} type="video/mp4"/>
                                    </video>
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-8xl p-4">
                                            <Image src={PIC} className="w-144 h-144" alt="Logo"></Image>
                                    </div>
                                </div>
                            </div>
                        <div className="text-center uppercase text-8xl italic font-custom">
                        <Testimonials></Testimonials>
                </div>
                <Footer></Footer>
            </body>
        </html>
    
        

     );
}
 
export default HomePage;


