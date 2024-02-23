"use client"
import { Inter } from "next/font/google";
import "./globals.css";

import TransitionProvider from "@/components/transitionProvider";
import "@mysten/dapp-kit/dist/index.css";
import { getFullnodeUrl } from "@mysten/sui.js/client";

import {
  SuiClientProvider,
  WalletProvider,
  createNetworkConfig,
} from "@mysten/dapp-kit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const { networkConfig } = createNetworkConfig({
  localnet: { url: getFullnodeUrl("localnet") },
  devnet: { url: getFullnodeUrl("devnet") },
  testnet: { url: getFullnodeUrl("testnet") },
  mainnet: { url: getFullnodeUrl("mainnet") },
});

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Lama Dev Portfolio App",
//   description: "The best animated portfolio page",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <QueryClientProvider client={queryClient}>
        <SuiClientProvider networks={networkConfig} defaultNetwork="devnet">
          <WalletProvider autoConnect>
        <TransitionProvider>{children}</TransitionProvider>
        </WalletProvider>
        </SuiClientProvider>
      </QueryClientProvider>
  
      </body>
    </html>
  );
}
