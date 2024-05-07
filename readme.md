# Sui fullstack boilerplate
Fullstack boilerplate for Sui based DApp, with using Sui move for smart contract dev and next js frontend.

# Prerequisite
- Sui CLI
- Node 
- NPM

# Run the app
### Smart contract dev
- Check active address in sui
```
sui client active-address
```
- If you need coins, use sui client faucet (not available for Mainnet). For more information on getting gas tokens, see Get Sui Tokens.
```
sui client faucet
```
- Build move package
```
sui move build --skip-fetch-latest-git-deps
```
- Publish package
```
sui client publish --gas-budget 100000000 --skip-fetch-latest-git-deps
```
### Run frontend
```
cd frontend
pnpm i
pnpm run dev
```
