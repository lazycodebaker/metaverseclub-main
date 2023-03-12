
import React from "react";

import RoadmapImg from 'public/images/roadmap.png';
import Image from "next/image";

export const Roadmap: React.FC<{}> = () => {
    return (
        <div className="w-full h-full py-10">
            <h1 className='font-bold text-5xl sm:text-5xl text-gray-50 text-center self-center mb-12'>ROADMAP</h1>
            <Image src={RoadmapImg} alt="Roadmap" className="w-full h-full object-fit sm:px-80 px-5" />
        </div>
    )
};