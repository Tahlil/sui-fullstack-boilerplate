import { getFaucetHost, requestSuiFromFaucetV0 } from '@mysten/sui.js/faucet';
import { ToastContainer, toast } from 'react-toastify';
import { getFullnodeUrl, SuiClient } from '@mysten/sui.js/client';
import {balance} from '../app/utils/balance';
import React, { useEffect, useState } from 'react';

const Faucet = (obj) => {
    const suiClient = new SuiClient({ url: getFullnodeUrl('devnet') });
    const [suiBalance, setSuiBalance] = useState(0);
    const userAddress= obj.address;
    async function fetchData() {
        try {
          const balanceInMIST = await suiClient.getBalance({
            owner: userAddress,
           });
          console.log({balanceInMIST});
          const res =  balance(balanceInMIST);
          console.log({res});
        
          setSuiBalance(res);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }

  useEffect(() => {
    fetchData();
  }, [userAddress]);
 
    const getSUIFromFaucet = async () => {
        await requestSuiFromFaucetV0({
            // use getFaucetHost to make sure you're using correct faucet address
            // you can also just use the address (see Sui TypeScript SDK Quick Start for values)
            host: getFaucetHost('devnet'),
            recipient: userAddress,
        });
        fetchData();
        toast("10 Test SUI sent from faucet!");
     };
    return (
        <div>
            <div className="m-5">
              <h1 color="blue">Balance: <span className="bg-blue-100 text-blue-800 me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">{suiBalance} Sui</span></h1>
              </div>
            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={getSUIFromFaucet}>
             Request SUI
            </button>
            <ToastContainer/>
        </div>
    )
}
export default Faucet;