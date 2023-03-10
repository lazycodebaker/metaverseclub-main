import Image from 'next/image';
import Solid from 'public/logos/solid.png';
import Certik from 'public/logos/certik.png';

export const Audit: React.FC<{}> = () => {
    return (
        <div className="flex flex-col items-center justify-center pt-16">
            <h1 className='font-bold text-5xl sm:text-7xl text-gray-50 text-center self-center mb-12'> AUDIT </h1>

            <div className="container">

                <div className="flex sm:flex-wrap sm:flex-row flex-col items-center justify-center space-x-2 sm:space-y-0 space-y-6">
                    <a className="cursor-pointer" target="_blank" rel="noreferrer" href='https://solidproof.io/'>
                        <Image src={Solid} alt="Binance" width={200} height={200} />
                    </a>

                    <a className="cursor-pointer" target="_blank" rel="noreferrer" href='https://www.certik.com/'>
                        <Image src={Certik} alt="Unreal" width={200} height={200} />
                    </a>

                </div>

            </div>

        </div>
    );
};