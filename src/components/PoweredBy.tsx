
import Image from 'next/image';

import Binance from  'public/logos/binance.jpg';
import Unreal from  'public/logos/unreal.jpg';
import AWS from  'public/logos/aws.png';
import Solidity from  'public/logos/solidity.jpg';
import Blender from  'public/logos/blender.png';
import Metamask from  'public/logos/metamask.png';
import TrustWallet from  'public/logos/trustwallet.png';

export const PoweredBy: React.FC<{}> = () => {
    return (
        <div className="flex flex-col items-center justify-center pt-16">
            <h1 className='font-bold text-5xl sm:text-7xl text-gray-50 text-center self-center mb-12'> POWERED BY </h1>

            <div className="container">

                <div className="flex sm:flex-wrap sm:flex-row flex-col items-center justify-center space-x-2">
                    <div>
                        <Image src={Binance} alt="Binance" width={200} height={200} />
                    </div>

                    <div>
                        <Image src={Unreal} alt="Unreal" width={200} height={200} />
                    </div>

                    <div>
                        <Image src={AWS} alt="AWS" width={80} height={80} />
                    </div>
                    
                    <div>
                        <Image src={Solidity} alt="Solidity" width={200} height={200} />
                    </div>
                    
                    <div>
                        <Image src={Blender} alt="Blender" width={150} height={150} />
                    </div>
                    
                    <div>
                        <Image src={Metamask} alt="Metamask" width={100} height={100} />
                    </div>

                    <div>
                        <Image src={TrustWallet} alt="TrustWallet" width={100} height={100} />
                    </div>

                </div>

            </div>

        </div>
    );
};