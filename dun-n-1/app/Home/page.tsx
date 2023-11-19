
'use client'

import React, { ReactNode } from "react";
import Image from "next/image";
import Outside from "app/Pics/Dun-N-1Outside.jpg"
import Coffee from "app/Pics/VideoDNN1.mp4"


interface homeProp {
    children: ReactNode;
}

const HomePage: React.FC<homeProp> = (children) => {



    return ( 
        <div>
            <div className="flex flex-col justify-center">
                <div className="relative w-full h-screen overflow-hidden">
                    <video autoPlay loop  muted className="w-full h-full object-cover absolute top-0 left-0 z-0">
                        <source src={Coffee} type="video/mp4"/>
                    </video>
                </div>
            </div>
            <div className="text-center uppercase text-8xl italic font-custom">
                <h1>Welcome To <span>DUN-N-1</span></h1>
            </div>
            <div>

            </div>
        </div>
        

     );
}
 
export default HomePage;