"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { getFullnodeUrl, SuiClient } from '@mysten/sui.js/client';
import { useCurrentAccount } from "@mysten/dapp-kit";
import {balance} from './utils/balance';
import React, { useEffect, useState } from 'react';
import Faucet from '@/components/faucet';
export default function Homepage()  {
  const currentAccount = useCurrentAccount();
  const suiClient = new SuiClient({ url: getFullnodeUrl('devnet') });
  const [suiBalance, setSuiBalance] = useState(0);


  useEffect(() => {
    async function fetchData() {
      try {
        if (!currentAccount) return;
        const balanceInMIST = await suiClient.getBalance({
          owner: currentAccount.address,
         });
        console.log({balanceInMIST});
        const res =  balance(balanceInMIST);
        console.log({res});
      
        setSuiBalance(res);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [currentAccount]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero.svg" alt="" fill/>
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
            THE <span className="text-sky-500">SUI</span> Fullstack boilerplate  
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
          The <span className="text-sky-500">SUI</span> move boilerplate coded using  Next.js, Tailwind CSS, and SUI Dapp Kit library, serves as a robust foundation for building full-stack decentralized applications (DApps) on the SUI blockchain. It streamlines the development process, allowing developers to focus on implementing the unique features of their DApp.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
          {currentAccount ? (
            <div>
              <h1 className="m-5" color="blue">Connected Wallet: <span className="bg-blue-100 text-blue-800 me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">{currentAccount?.address}</span></h1>
              <div className="m-5">
              <h1 color="blue">Balance: <span className="bg-blue-100 text-blue-800 me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">{suiBalance} Sui</span></h1>
              </div>
             
             <Faucet/>
           
             
          </div>

          ) :  
          (
            <div>
              <h1>
              <span className="bg-red-100 text-red-800 me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Please Connect your wallet</span>
              </h1>
             
            </div>
            
          )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

