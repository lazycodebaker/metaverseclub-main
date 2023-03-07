
export const TokenCard: React.FC<{}> = () => {
    return (
        <div className="flex bg-gray-600/50 backdrop-blur-md p-3 items-center flex-col w-full h-full py-3">
            <h1 className="font-bold text-4xl text-gray-50 text-center">Token Details</h1>

            <div className="flex w-full text-gray-50 flex-wrap px-1 py-5 ">

                <div className="flex items-start justify-between space-x-4 mt-3 px-2">

                    <div className="flex flex-col">
                        <h1 className="font-semibold">TOKEN NAME</h1>
                        <h2 className="font-bold">Metro Monsters Guild</h2>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="font-semibold">TOKEN SALE STAGES</h1>
                        <h2 className="font-bold">7</h2>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="font-semibold">TOKEN TYPE</h1>
                        <h2 className="font-bold">ERC-20 (Ethereum)</h2>
                    </div>
                </div>

                <div className="flex flex-col text-gray-50 items-center px-3 sm:border-l-[2px] sm:border-gray-400 h-full py-2">
                    <h1 className="font-bold text-xl">PRESALE DETAILS</h1>

                    <div className="flex flex-col items-center space-y-4 text-sm py-3">
                        <div className="flex flex-col items-start">
                            <h1 className="font-semibold">CURRENT STAGE SUPPLY</h1>
                            <h2 className="font-bold text-lg">35,000,000</h2>
                        </div>

                        <div className="flex flex-col items-start">
                            <h1 className="font-semibold">CURRENT STAGE PRICE</h1>
                            <h2 className="font-bold text-lg">1 MEMAG = $0.023</h2>
                        </div>

                        <div className="flex flex-col items-start">
                            <h1 className="font-semibold ">EXCHANGE LISTING PRICE</h1>
                            <h2 className="font-bold text-lg">1 MEMAG = $0.023</h2>
                        </div>
                    </div>



                </div>

            </div>
        </div>
    );
};