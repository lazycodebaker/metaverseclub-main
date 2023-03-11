
import Image from "next/image";


import Mint from "public/logos/mint.png";
import EconomicTimes from "public/logos/economictimes.jpg";
import Bloom from "public/logos/bloom1.png";

export const SeenBy: React.FC<{}> = () => {
    return (
        <div className="flex flex-col items-center justify-center pt-16 bg-gray-900 py-10">
            <h1 className='font-bold text-3xl sm:text-5xl text-gray-50 text-center self-center mb-12'> AS SEEN ON:  </h1>

            <div className="container">

                <div className="flex sm:flex-wrap sm:flex-row flex-col items-center justify-center sm:space-x-10 sm:space-y-0 space-y-6">

                    <a className="cursor-pointer" target="_blank" rel="noreferrer" href="https://www.mint.com/">
                        <Image src={Mint} alt="Mint" width={80} height={80} />
                    </a>

                    <a className="cursor-pointer" target="_blank" rel="noreferrer" href="https://economictimes.indiatimes.com/">
                        <Image src={EconomicTimes} alt="Economic Times" width={80} height={80} />
                    </a>

                    <a className="cursor-pointer" target="_blank" rel="noreferrer" href="https://www.bloomberg.com//">
                        <Image src={Bloom} alt="Cryptonaute" width={100} height={100} />
                    </a>

                </div>

            </div>

        </div>
    );
};