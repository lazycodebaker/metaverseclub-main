
import React from "react";

import RoadmapImg from 'public/images/roadmap.jpg';
import Image from "next/image";

export const Roadmap : React.FC<{}> = () =>{
    return(
<<<<<<< HEAD
        <div className="w-full h-full sm:px-90 px-3">
            <Image src={RoadmapImg} alt="Roadmap" className="w-full h-full object-fit" />          
=======
        <div className="w-full h-full">
            <h1 className='font-bold text-5xl sm:text-7xl text-gray-50 text-center self-center mb-12'>RoadMap</h1>
            <Image src={RoadmapImg} alt="Roadmap" className="w-full h-full object-fit sm:px-80 px-3" />          
>>>>>>> ecdc18ec81215c05398b7bf1e11ac5975c16c9ad
        </div>
    )
};