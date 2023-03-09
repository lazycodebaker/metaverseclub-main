
export const PoweredBy: React.FC<{}> = () => {
    return (
        <div className="flex flex-col items-center justify-center pt-16">
            <h1 className='font-bold text-5xl sm:text-7xl text-gray-50 text-center self-center mb-12'> POWERED BY </h1>

            <div className="container">

                <div className="flex sm:flex-wrap sm:flex-row flex-col items-center justify-center space-x-4">
                    <h1>Metamask</h1>
                    <h1>Web3</h1>
                    <h1>Chainlink</h1>
                    <h1>Uniswap</h1>
                    <h1>OpenSea</h1>
                    <h1>Covalent</h1>
                    <h1>Infura</h1>
                </div>

            </div>

        </div>
    );
};