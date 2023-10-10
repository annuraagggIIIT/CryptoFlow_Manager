#CryptoFlow_Manager

Experience a decentralized application (Dapp) that empowers participants in a supply chain—Farmers, Distributors, Retailers, and Consumers—to collaboratively create, engage with, and verify products. Dive into the code, take on roles such as a Farmer, Distributor, Retailer, or Consumer, and witness the seamless progression of item creation, logging, and dynamic ownership address updates at key stages of the supply chain.

Deployed on Sepolia test net:
    
    Transaction Hash: 0x************************************************************
    Contract Address: 0x*********************************************************





Requirements: 

    Truffle v5.3.14
    Ganache v7.9.0
    Solidity - 0.8.12 
    Node v18.16.0


Instructions:

1- Specific accounts were employed for testing purposes. The actor accounts can be directly embedded in the Html/JS files. This is due to the current restriction imposed by Metamask, which prevents access to the addresses of its user's wallets unless the selected one is being used. Ensure that your Metamask includes these designated accounts:

Contract Owner: 0x***************************************

Farmer:  0x******************************************

Distributor: 0x*******************************************

Retailer: 0x*******************************************

Consumer: 0x*******************************************


2- In a new terminal window, Run the command to deploy the contract to the Sepolia Network:

    truffle migrate --network sepolia --reset

3 -In another terminal window cd into the /app folder and run:

    npm run dev

4 - Browse for:

    http://localhost:8080/

5 - The Contract owner account will be prompted to engage with the smart contract to assign roles to each account. For a comprehensive understanding of the interaction capabilities, please consult the accompanying documentation.






