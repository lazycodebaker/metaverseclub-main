
import React from 'react';
import { FaFacebook, FaInstagram, FaTelegram, FaTwitter, FaDiscord } from 'react-icons/fa';

export const About: React.FC = () => {
    return (
        <section className="text-gray-600 body-font md:mt-20 pt-16 mt-7 about">
            <h1 className='font-bold text-5xl sm:text-7xl text-white text-center self-center'>About</h1>
            <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <p className="mb-8 leading-relaxed text-lg font-bold text-white">
                        Metaverse Club is a gaming platform made up of multiple club games.
                        MCLUB token is the one-stop gaming token that will facilitate all forms of gaming with a transparent, probably fair, and widely used mechanism for funding and integrating to disparate gaming opportunities.
                        <br />
                        We are here to solve the biggest problem of club gaming which is transparency. Metaverse Club integrates all club games with blockchain and smart contracts, to provide a completely transparent and tampered-proof ecosystem to our users .
                        <br />
                        All games are integrated within a metaverse world called Club Arena. All games are designed on blockchain and smart contracts and provide a fully transparent ecosystem to our users.
                    </p>

                    <div className="flex items-center justify-start space-x-6 mr-10">
                        <a href="https://t.me/metaverseclubofficial" target="_blank" rel="noreferrer" className="text-2xl text-white hover:text-blue-500"><FaTelegram size={30} /></a>
                        <a href="https://twitter.com/METAVERSECLUB32" target="_blank" rel="noreferrer" className="text-2xl text-white hover:text-blue-500"><FaTwitter size={30} /></a>
                        <a href="https://www.instagram.com/metaverseclub32/" target="_blank" rel="noreferrer" className="text-2xl text-white hover:text-blue-500"><FaInstagram size={30} /></a>
                        <a href="https://discord.gg/fQvD2bRbmw" target="_blank" rel="noreferrer" className="text-2xl text-white hover:text-blue-500"><FaDiscord size={33} /></a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                </div>
            </div>

        </section>
    )
};