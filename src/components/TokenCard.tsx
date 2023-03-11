
import React from 'react'

import { BiCopy } from 'react-icons/bi';

export const TokenCard: React.FC<{}> = () => {

    const TOKEN_CONTRACT_ADDRESS = '********************************';
    const PRESALE_CONRTACT_ADDRESS = '********************************';

    return (
        <div className="flex bg-black/50 backdrop-blur-md p-3 items-center flex-col w-full h-full py-3">
            <h1 className="font-bold text-4xl text-gray-50 text-center">Token Details</h1>

            <div className="flex w-full text-gray-50 flex-wrap px-2 py-5 ">
                <div className="flex flex-col space-y-6 mt-3 px-2">

                    <div className="w-full flex space-x-5 ">
                        <div className="flex flex-col items-start">
                            <h1 className="font-semibold">TOKEN NAME</h1>
                            <h2 className="font-bold">METAVERSE CLUB</h2>
                        </div>
                        <div className="flex flex-col items-start">
                            <h1 className="font-semibold">TOKEN SALE STAGES</h1>
                            <h2 className="font-bold">FIRST</h2>
                        </div>
                        <div className="flex flex-col items-start">
                            <h1 className="font-semibold">TOKEN TYPE</h1>
                            <h2 className="font-bold">ERC-20 (ARBITRUM)</h2>
                        </div>
                    </div>

                    <div className="w-full flex space-x-5">
                        <div className="flex flex-col items-start">
                            <h1 className="font-semibold">TOKEN SYMBOL</h1>
                            <h2 className="font-bold">MCLUB</h2>
                        </div>
                        <div className="flex flex-col items-start">
                            <h1 className="font-semibold">DECIMALS</h1>
                            <h2 className="font-bold">18</h2>
                        </div>
                    </div>

                    <div className="w-full flex space-x-5">
                    <div className="flex flex-col items-start">
                            <h1 className="font-semibold">TOKEN CONTRACT ADDRESS</h1>
                            <div onClick={() => {navigator.clipboard.writeText(TOKEN_CONTRACT_ADDRESS)}} className="flex cursor-pointer bg-gray-600 p-2 rounded-md mt-1 items-center space-x-3">
                                <h1>{ TOKEN_CONTRACT_ADDRESS }</h1>
                                <BiCopy size={20}  />                                
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex space-x-5">
                        <div className="flex flex-col items-start">
                            <h1 className="font-semibold">PRESALE CONTACT ADDRESS</h1>
                            <div onClick={() => {navigator.clipboard.writeText(PRESALE_CONRTACT_ADDRESS)}} className="flex cursor-pointer bg-gray-600 p-2 rounded-md mt-1 items-center space-x-3">
                                <h1>{ PRESALE_CONRTACT_ADDRESS }</h1>
                                <BiCopy size={20}  />                                
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col text-gray-50 items-center px-3 sm:ml-0 sm:border-l-[2px] sm:border-gray-400 h-full py-2 -ml-2">
                    <h1 className="font-bold text-xl">PRESALE DETAILS</h1>

                    <div className="flex flex-col items-center space-y-4 text-sm py-3">
                        <div className="flex flex-col items-start">
                            <h1 className="font-semibold">CURRENT STAGE SUPPLY</h1>
                            <h2 className="font-bold text-lg">250,000,000</h2>
                        </div>

                        <div className="flex flex-col items-start">
                            <h1 className="font-semibold">CURRENT STAGE PRICE</h1>
                            <h2 className="font-bold text-lg">1 MCLUB = $0.04</h2>
                        </div>

                        <div className="flex flex-col items-start">
                            <h1 className="font-semibold ">EXCHANGE LISTING PRICE</h1>
                            <h2 className="font-bold text-lg">1 MCLUB = $0.045</h2>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};