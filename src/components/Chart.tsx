
import React from "react";

import { Pie } from "react-chartjs-2";

import { Tooltip, ArcElement, Title, Legend, Chart as ChartJS } from "chart.js";

ChartJS.register(ArcElement, Title, Legend, Tooltip);

export const Chart: React.FC<{}> = () => {

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
            hoverBackgroundColor: [
                '#ff66c4',
                '#cb6ce6',
                '#0097b2',
                '#0cc0df',
                '#5ce1e6',
                '#38b6ff',
                '#5271ff',
                '#004aad'
            ]
        }]
    };

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -mx-4 -mb-10 text-center">

                    <div className="sm:w-1/2 mb-10 px-4">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1201x501" />
                        </div>
                        <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Buy YouTube Videos</h2>
                        <p className="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
                        <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
                    </div>

                    <div className="sm:w-1/2 w-full h-full mb-10 ">
                        <div className="rounded-lg h-full overflow-hidden">
                            <Pie
                                data={data}
                                options={{
                                    plugins: {
                                        legend: { "align": "start", "position": "bottom" },
                                        title: { "position": "bottom", "align": "center", "color": "white" }
                                    }
                                }}
                            />
                        </div></div>

                </div>
            </div>
        </section>
    )
};