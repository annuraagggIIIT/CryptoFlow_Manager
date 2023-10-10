# SupplyChainTracker
Dapp that allows actors in a supply chain to create, interact and validate products.

Interact with the code, as a Farmer, Distributor, Retailer or Consumer and watch how the item is created, logged and how its owner's address changes
during every crucial step in a supply chain.

Deployed on Goerli test net:
    
    Transaction Hash: 0x39dd4a1bd4c147ea1aeac367b1ee30b15cef2425d290c2ca8cbcf375e2569957
    Contract Address: 0x385deEFe6428b382Acb1b8484611b87755a88172
Requirements: 

    Truffle v5.11.2 (core: 5.11.2)
    Ganache v7.9.0
    Solidity - 0.8.12 (solc-js)
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


2- In a new terminal window, Run the command to deploy the contract to the local testnet (provided by ganache):

    truffle migrate --reset

3 -In another terminal window cd into the /app folder and run:

    npm run dev

4 - Go to this location on your browser:

    http://localhost:8080/

5 - Your Contract owner account will be asked to interact with the smart contract, in order to give the roles to each account.
    To see the possibilities of interaction, you can refer to the write up document.


6 - Have fun!



