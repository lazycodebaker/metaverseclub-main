/*
import React from 'react';
import { createClient, useAccount, useConnect, useDisconnect } from 'wagmi';
import { getDefaultProvider } from 'ethers';
import { InjectedConnector } from 'wagmi/connectors/injected';

type WalletContextType = {
    address: string;
    isConnected: boolean;
    connect: () => void;
    disconnect: () => void;
};

export const WalletContext = React.createContext<WalletContextType>({
    address: '',
    isConnected: false,
    connect: () => { },
    disconnect: () => { },
});

export const WalletContextProvider: any = ({ children }: React.PropsWithChildren<{}>) => {

    const client = createClient({ autoConnect: true, provider: getDefaultProvider() });

    const { address, isConnected }: any = useAccount();

    const { connect } = useConnect({
        connector: new InjectedConnector(),
    });
    
    const { disconnect } = useDisconnect();

    return (
        <WalletContext.Provider value={{ address, isConnected, connect, disconnect }}>
            {children}
        </WalletContext.Provider>
    );
};

*/



import {
    EthereumClient,
    modalConnectors,
    walletConnectProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { arbitrum, mainnet, polygon } from "wagmi/chains";

export const chains = [arbitrum, mainnet, polygon];

export const { provider } = configureChains(chains, [
    walletConnectProvider({ projectId: "54066b5b607f79dc62f42a9f50f26194" }),
]);

export const wagmiClient = createClient({
    autoConnect: true,
    connectors: modalConnectors({
        projectId: "54066b5b607f79dc62f42a9f50f26194",
        version: "1",
        appName: "web3Modal",
        chains,
    }),
    provider,
});

export const ethereumClient = new EthereumClient(wagmiClient, chains);

export default function WalletContextProvider({ children }: any) {
    return (
        <WagmiConfig client={wagmiClient}>
            {children}
        </WagmiConfig>
    );
};