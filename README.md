#CryptoFlow_Manager

Experience a decentralized application (Dapp) that empowers participants in a supply chain—Farmers, Distributors, Retailers, and Consumers—to collaboratively create, engage with, and verify products. Dive into the code, take on roles such as a Farmer, Distributor, Retailer, or Consumer, and witness the seamless progression of item creation, logging, and dynamic ownership address updates at key stages of the supply chain.

Deployed on Sepolia test net:
    
    Transaction Hash: *x************************************************************
    Contract Address: *x*********************************************************





Requirements: 

    Truffle v5.3.14
    Ganache v7.9.0
    Solidity - 0.8.12 
    Node v18.16.0


Instructions:


1- Fixed Accounts were used for testing purpuses. 
If ganache-cli is run with this command, the accounts for the actors can be hard-coded into the Html/JS files. (given the fact that
metamask is not allowing, at the moment, access to the addresses of its user's wallets, unless it is the one in the selection). Your metamask should also have these accounts: 

    ganache-cli -m "spirit supply whale amount human item harsh scare congress discover talent hamster" 

Contract Owner: 0xba1d5313f63916588fbe5b912801c07d3a7ec0b6

Farmer:  0x0a896038580ef8c2ec81ccedb531f9ad484be6ca

Distributor: 0xb705dd03a3981590b942fafffe318470f05597f9

Retailer: 0x3dfe9d12025f4c4b9271b872a8820de44d82e9c5

Consumer: 0x18d0ed0cb978ddd066c9e681de8aafcfab497648


2- In a new terminal window, Run the command to deploy the contract to the Sepolia Network:

    truffle migrate --network sepolia --reset

3 -In another terminal window cd into the /app folder and run:

    npm run dev

4 - Browse for:

    http://localhost:8080/

5 - The Contract owner account will be prompted to engage with the smart contract to assign roles to each account. For a comprehensive understanding of the interaction capabilities, please consult the accompanying documentation.






