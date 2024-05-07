import { MIST_PER_SUI } from '@mysten/sui.js/utils';
export function balance (balance) {
	return Number.parseInt(balance.totalBalance) / Number(MIST_PER_SUI);
}