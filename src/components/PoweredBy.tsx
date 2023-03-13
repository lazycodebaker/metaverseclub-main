
import Image from 'next/image';

import AWS from 'public/logos/aws.png';
import Unreal from 'public/logos/unreal.jpg';
import Arbitrum from 'public/logos/arbitrum.png';
import Blender from 'public/logos/blender.png';
import Solidity from 'public/logos/solidity.png';
import Metamask from 'public/logos/metamask.png';
import TrustWallet from 'public/logos/trustwallet.png';

export const PoweredBy: React.FC<{}> = () => {
    return (
        <div className="flex flex-col items-center justify-center pt-16">
            <h1 className='font-bold text-5xl sm:text-7xl text-gray-50 text-center self-center mb-12'> POWERED BY </h1>

            <div className="container">

                <div className="flex sm:flex-wrap sm:flex-row flex-col items-center justify-center space-x-2">

                    <a className="cursor-pointer" target="_blank" rel="noreferrer" href='https://arbitrum.io/'>
                        <Image src={Arbitrum} alt="Arbitrum" width={200} height={200} />
                    </a>

                    <a className="cursor-pointer" target="_blank" rel="noreferrer" href='https://www.unrealengine.com/en-US/'>
                        <Image src={Unreal} alt="Unreal" width={200} height={200} />
                    </a>

                    <a className="cursor-pointer" target="_blank" rel="noreferrer" href='https://aws.amazon.com/'>
                        <Image src={AWS} alt="AWS" width={80} height={80} />
                    </a>

                    <a className="cursor-pointer" target="_blank" rel="noreferrer" href='https://docs.soliditylang.org/en/'>
                        <Image src={Solidity} alt="Solidity" width={100} height={100} className="invert" />
                    </a>

                    <a className="cursor-pointer" target="_blank" rel="noreferrer" href='https://www.blender.org/'>
                        <Image src={Blender} alt="Blender" width={150} height={150} />
                    </a>

                    <a className="cursor-pointer" target="_blank" rel="noreferrer" href='https://metamask.io/'>
                        <Image src={Metamask} alt="Metamask" width={67} height={67} />
                    </a>

                    <a className="cursor-pointer" target="_blank" rel="noreferrer" href='https://trustwallet.com/'>
                        <Image src={TrustWallet} alt="TrustWallet" width={60} height={60} />
                    </a>

                </div>

            </div>

        </div>
    );
};