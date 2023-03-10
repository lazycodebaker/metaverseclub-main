
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import BannerImg from 'public/images/hero.jpg';
import { Products } from '@/components/Products';
import { Web3Modal } from "@web3modal/react";
import { ethereumClient } from '@/context/WalletConnect';
import { Chart } from '@/components/Chart';
import { Roadmap } from '@/components/Roadmap';
import { PoweredBy } from '@/components/PoweredBy';
import { Teams } from '@/components/Teams';
import { SeenBy } from '@/components/SeenBy';
import { Audit } from '@/components/Audit';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,700&display=swap" rel="stylesheet"></link>
        <title>Metaverse Club</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <Web3Modal
          projectId="54066b5b607f79dc62f42a9f50f26194"
          ethereumClient={ethereumClient}
        />

        <Navbar />
        <div className="h-full top-10 left-0 absolute w-screen opacity-40 -z-10 blur-[0px]">
          <Image src={BannerImg} alt="banner" layout="fill" objectFit="cover" className='-z-10' />
        </div>
        <Hero />
        <About />
        <Products />
        <Chart />
        <Roadmap />
        <PoweredBy />
        <Teams />
        <SeenBy />
        <Audit />
        <Footer />
      </main>
    </>
  );
};
