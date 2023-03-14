
import React from 'react';
import { Product } from './Product';



import imageCasino from 'public/images/mclubcasino1.jpg';
import imageBCasino from 'public/images/aboutb.jpg';


import imageGaming from 'public/images/mclubgames.jpg';
import imageBGaming from 'public/images/aboutb1.jpg';

import imageDex from 'public/images/dex.jpg';
import imageBDex from 'public/images/aboutb.jpg';

import imageStaking from 'public/images/mclubstaking.jpg';
import imageBStaking from 'public/images/aboutb1.jpg';

import imageMarketplace from 'public/images/mclubswap.jpg';
import imageBMarketplace from 'public/images/aboutb.jpg';

import imageArena from 'public/images/mclubarena.jpg';
import imageBArena from 'public/images/aboutb1.jpg';


export const Products: React.FC = () => {
    return (
        <section className="text-gray-600 body-font pt-16 ">
            <h1 className='font-bold text-5xl sm:text-7xl text-gray-50 text-center self-center mb-12'>OUR PRODUCTS </h1>

            <Product
                desc={"MCLUB casino is the worlds frist fully decentralized  blockchain NFT-based casino games . MCLUB casino is a new breed of online gambling platform that operate using blockchain technology. Unlike traditional online casinos that rely on a centralized server to manage their operations, MCLUB casinos run on a decentralized network, which ensures transparency, security, and fairness.MCLUB casino also provide dealership to our users in which any one can become dealer on our platform . So we will become  more transparent .User who want to become a dealer they have to buy NFT passes to become a dealer on MCLUB."}
                image={imageCasino}
                imageB={imageBCasino}
                title={"MCLUB CASINO"}
            />

           

            <Product
                title={"MCLUB DEX"}
                desc={"MCLUB SWAP is a decentralized exchange.A decentralized exchange (better known as a DEX) is a peer-to-peer marketplace where transactions occur directly between crypto traders. DEXs fulfill one of crypto's core possibilities: fostering financial transactions that aren't officiated by banks, brokers, payment processors, or any other kind of intermediary."}
                image={imageDex}
                imageB={imageBDex}
            />

            <Product
                title={"MCLUB STAKING"}
                desc={"In this users can stake thier MCLUB tokens to earn high APY's on their tokens .Staking is often considered a way to earn passive income on cryptocurrency holdings, and it can also be a way to support the security and decentralization of a blockchain network.Liquidity pools are created on the basis of monthly , half yearly and yearly time periods."}
                image={imageStaking}
                imageB={imageBStaking}
            />

            <Product
                title={"MCLUB MARKETPLACE"}
                desc={"MCLUB marketplace refers to an online platform where users can buy, sell, and trade non-fungible tokens (NFTs). NFTs are unique digital assets that are stored on a blockchain, which is a decentralized digital ledger. Each NFT represents a one-of-a-kind item, such as a piece of artwork, a tweet, or a collectible, and can be bought and sold like any other asset.Every NFT contains a digital signature which makes each one unique. NFTs are digital assets and could be photos, videos, audio files, or another digital format."}
                image={imageMarketplace}
                imageB={imageBMarketplace}
            />

        </section>
    )
}

