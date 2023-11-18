
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
            <div className="max-w-screen-lg mx-auto px-4 py-6">
                <h1>Hello</h1>
            </div>
        </div>
        

     );
}
 
export default HomePage;