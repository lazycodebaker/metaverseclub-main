
// import { WalletContext } from '@/context/WalletConnect';
import React, { useContext } from 'react';

import { Web3Button } from '@web3modal/react';
import { FaArrowCircleRight } from 'react-icons/fa';
import {BsBoxArrowUpRight} from 'react-icons/bs';


export const Hero: React.FC = () => {

  // const { address, connect, disconnect, isConnected } = useContext(WalletContext);

  const disconnect = () => { };
  const connect = () => { };
  const isConnected = false;

  const handleScroll = () => {

    const walletconnect = document.querySelector('.walletconnecthero');

    if (walletconnect) {
      if (window.scrollY > window.innerHeight - 100) {
        walletconnect.classList.add('hidden');
      } else {
        walletconnect.classList.remove('hidden');
      }
    };

  };

  if (typeof window !== 'undefined') {
    window?.addEventListener('scroll', handleScroll);
  };


  return (
    <section className="text-gray-50 body-font z-40 mt-24">
      <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">

        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="welcome title-font sm:text-7xl text-4xl mb-10 font-bold text-gray-50">
            WELCOME <br /> TO <br /> METAVERSE CLUB
          </h1>
 
          <a href='https://metaverseclub.gitbook.io/whitepaper/' target={"_blank"} className="flex items-center justify-center bg-gray-50 hover:bg-gray-200 cursor-pointer font-bold text-lg px-8 py-2 rounded-md">
            <h1 className='text-gray-900'>WhitePaper</h1>
            <BsBoxArrowUpRight className='inline-block ml-2 font-bold text-gray-900' size={20} />
          </a>

        </div>

        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full rounded-md">
          <div className='w-full h-full flex flex-col items-center bg-black/50 backdrop-blur-md rounded-lg p-1 '>

            <h1 className='text-4xl py-6 self-center text-center font-bold text-gray-50'>
              Last Stage
            </h1>

            <div className='flex items-center w-full h-16 justify-center m-4 rounded-md'>

              <div className="days flex flex-col ">
                <h1 className='font-bold text-3xl'>4</h1>
                <h1 className='font-bold text-xl'>Days</h1>
              </div>

              <h1 className='font-bold text-3xl mx-4'>:</h1>

              <div className="hours">
                <h1 className='font-bold text-3xl'>4</h1>
                <h1 className='font-bold text-xl'>Hours</h1>
              </div>

              <h1 className='font-bold text-3xl mx-4'>:</h1>

              <div className="minu">
                <h1 className='font-bold text-3xl'>4</h1>
                <h1 className='font-bold text-xl'>Min</h1>
              </div>

              <h1 className='font-bold text-3xl mx-4'>:</h1>

              <div className="sec">
                <h1 className='font-bold text-3xl'>4</h1>
                <h1 className='font-bold text-xl'>Sec</h1>
              </div>
            </div>

            <div className='m-10 walletconnecthero'>
              <Web3Button />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};