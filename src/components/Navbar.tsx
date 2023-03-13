// import { WalletContext } from '@/context/WalletConnect';
import { useContext, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import AnnouncementBar from './AnnouncementBar';

import MetaverseclubLogo from 'public/logos/mclublogo.png';

import { Web3Button } from '@web3modal/react';
import Image from 'next/image';


export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  // const { address, connect, disconnect, isConnected } = useContext(WalletContext);

  const isConnected = false;
  const connect = () => { };
  const disconnect = () => { };


  const handleScroll = () => {
    const navbar = document.querySelector('.navbar');
    const walletconnect = document.querySelector('.walletconnect');

    if (navbar) {
      if (window.scrollY > 0) {
        navbar.classList.add('fixed');
        navbar.classList.add('top-0');
      } else {
        navbar.classList.remove('fixed');
        navbar.classList.remove('top-0');
      }
    };

    if (walletconnect) {
      if (window.scrollY > window.innerHeight - 100) {
        walletconnect.classList.remove('hidden');
      } else {
        walletconnect.classList.add('hidden');
      }
    };

  };

  if (typeof window !== 'undefined') {
    window?.addEventListener('scroll', handleScroll);
  };

  return (
    <>
      <AnnouncementBar />
      <nav className="flex navbar fixed z-50 w-screen items-center justify-between flex-wrap bg-black/50 backdrop-blur-md p-6">

        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <h1 className="font-bold text-3xl tracking-tight">
            <Image src={MetaverseclubLogo} alt="Metaverse Club" width={50} height={50} />            
          </h1>
        </div>


        <div className="block lg:hidden backdrop-blur-md rounded-md">
          <button
            className="flex items-center px-3 py-2 text-whitehover:text-white rounded-md"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            {isNavOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
          </button>
        </div>

        <div
          className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto items-center rounded-md sm:ml-3
              ${isNavOpen ? 'block border-t-[1px] border-white mt-4' : 'hidden'
            }`}
        >
          <div className="text-lg font-bold lg:flex-grow pt-[4px] sm:flex items-center sm:space-x-6">
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:bg-blue-600/70 p-2 rounded-md mr-4"
            >
              ABOUT
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:bg-blue-600/70 p-2 rounded-md mr-4"
            >
              PRODUCTS
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:bg-blue-600/70 p-2 rounded-md"
            >
              ROADMAP
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:bg-blue-600/70 p-2 rounded-md"
            >
              WIN $50K
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:bg-blue-700 p-2 rounded-md"
            >
              NEW TO CRYPTO?
            </a>
          </div>

          <div className='walletconnect hidden sm:pt-0 pt-4'>
            <Web3Button />
          </div>

        </div>
      </nav>
    </>
  );
};