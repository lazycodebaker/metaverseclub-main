
import React from "react";

import RoadmapImg from 'public/images/roadmap.jpg';
import Image from "next/image";

export const Roadmap : React.FC<{}> = () =>{
    return(
        <div className="w-full h-full sm:p-20">
            <Image src={RoadmapImg} alt="Roadmap" className="w-full h-full object-fit" />          
        </div>
    )
};