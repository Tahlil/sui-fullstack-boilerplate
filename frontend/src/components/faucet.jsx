import { getFaucetHost, requestSuiFromFaucetV0 } from '@mysten/sui.js/faucet';
import { ToastContainer, toast } from 'react-toastify';
const Faucet = (obj) => {
 
    const getSUIFromFaucet = async () => {
        await requestSuiFromFaucetV0({
            // use getFaucetHost to make sure you're using correct faucet address
            // you can also just use the address (see Sui TypeScript SDK Quick Start for values)
            host: getFaucetHost('devnet'),
            recipient: obj.address,
        });
        toast("Test SUI sent from faucet!");
     };
    return (
        <div>
            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={requestSuiFromFaucetV0}>
             Request SUI
            </button>
            <ToastContainer/>
        </div>
    )
}
export default Faucet;