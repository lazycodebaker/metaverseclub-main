
import React from "react";

import { Doughnut } from "react-chartjs-2";

import { Tooltip, ArcElement, Title, Legend, Chart as ChartJS } from "chart.js";
import { TokenCard } from "./TokenCard";

import Background from 'public/images/background.jpg';

ChartJS.register(ArcElement, Title, Legend, Tooltip);

export const Chart: React.FC<{}> = ({}) => {

    const data = {
        labels: [
            'Private Sale',
            'Presale',
            'Foundation and Development',
            'Marketing and CEX Listings',
            'Founders & Partners',
            'Advisors and Legal Teams',
            'Liquidity',
            'Team Allocation'
        ],
        datasets: [{
            data: [2, 35, 10, 20, 10, 5, 8, 10],
            backgroundColor: [
                '#ff66c4',
                '#cb6ce6',
                '#0097b2',
                '#0cc0df',
                '#5ce1e6',
                '#38b6ff',
                '#5271ff',
                '#004aad'
            ],
        }]
    };

    return (
        <section className="text-gray-600 bg-indigo-800 body-font w-full h-full py-5">
            <h1 className='font-bold text-5xl sm:text-7xl text-gray-50 text-center self-center mt-12'>TOKENOMICS</h1>


            <div className="container px-5 py-24 mx-auto z-50">
                <div className="flex flex-wrap -mx-4 -mb-10 text-center ">

                    <div className="sm:w-3/5 w-full mb-10 px-2">
                        <div className="rounded-lg w-full h-full overflow-hidden">
                            <TokenCard />
                        </div>
                    </div>

                    <div className="sm:w-2/5 w-full h-full mb-10 px-6 z-50">
                        <div className="rounded-lg h-full overflow-hidden font-bold text-white">
                            <Doughnut
                                data={data}
                                style={{ color: 'white' }}
                                options={{
                                    plugins: {
                                        legend: { "align": "start", "position": "bottom" },
                                        title: { "position": "bottom", "align": "center", "color": "white" }
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};