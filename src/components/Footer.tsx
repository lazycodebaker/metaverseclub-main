
import React from 'react';

export const Footer: React.FC<{}> = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-16 px-7 py-10 bg-black w-screen border-t-[1px] border-white">
            <h1 className="text-white text-md font-bold">
                Disclaimer: The information provided on this website does not constitute investment advice, financial advice, trading advice, or any other sort of advice and you should not treat any of the website’s content as such. Cryptocurrency investments are volatile and high-risk in nature. Do not invest more than you can afford to lose.
            </h1>
            <h1 className="text-gray-100 text-md font-bold">
                @COPYRIGHT 2023 BY METAVERSE CLUB. ALL RIGHTS RESERVED.
            </h1>
        </div>
    );
};