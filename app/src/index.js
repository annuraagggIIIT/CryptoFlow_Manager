import Web3 from "web3";
import supplyChainArtifact from "../../build/contracts/SupplyChain.json";

const App = {
  web3: null,
  account: null,
  meta: null,

  start: async function() {
    const { web3 } = this;

    try {
      // get contract instance
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = supplyChainArtifact.networks[networkId];
      this.meta = new web3.eth.Contract(
        supplyChainArtifact.abi,
        deployedNetwork.address,
      );

      // get accounts
     // await App.getAccount();
      const accounts = await web3.eth.getAccounts();
      this.account = accounts[0];
      this.setRoles();

    } catch (error) {
      console.error("Could not connect to contract or chain.");
    }
  },
  fetchBufferOne: async function (){
    const {fetchItemBufferOne} = this.meta.methods;
    const id = document.getElementById("upc").value;
    const buffer1 = await fetchItemBufferOne(id).call();
    this.writeTables1(buffer1);
  },

  fetchBufferTwo: async function (){
    const {fetchItemBufferTwo} = this.meta.methods;
    const id = document.getElementById("upc").value;
    const buffer2 = await fetchItemBufferTwo(id).call();
    this.writeTables2(buffer2);
  },
  
  setStatus: function(message) {
    const status = document.getElementById("status");
    status.innerHTML = message;
  },
  writeTables1: function(buffer1){
    document.getElementById("sku").value = buffer1.itemSKU;
    document.getElementById("upc").value = buffer1.itemUPC;
    document.getElementById("ownerID").value = buffer1.ownerID;
    document.getElementById("originFarmerID").value = buffer1.originFarmerID;
    document.getElementById("originFarmName").value = buffer1.originFarmName;
    document.getElementById("originFarmInformation").value = buffer1.originFarmInformation;
    document.getElementById("originFarmLatitude").value = buffer1.originFarmLatitude;
    document.getElementById("originFarmLongitude").value = buffer1.originFarmLongitude;
    
  },
  writeTables2: function(buffer2){
    document.getElementById("sku").value = buffer2.itemSKU;
    document.getElementById("upc").value = buffer2.itemUPC;
    document.getElementById("productNotes").value = buffer2.productNotes;
    document.getElementById("productPrice").value = Web3.utils.fromWei(buffer2.productPrice, "ether");
    document.getElementById("distributorID").value = buffer2.distributorID;
    document.getElementById("retailerID").value = buffer2.retailerID;
    document.getElementById("consumerID").value = buffer2.consumerID;
  },

  harvestItem : async function (){
    const {harvestItem} = this.meta.methods;
    let upc = document.getElementById("upc").value;

    let originFarmerID = document.getElementById("originFarmerID").value;
    let originFarmName = document.getElementById("originFarmName").value;
    let originFarmInformation = document.getElementById("originFarmInformation").value;
    let originFarmLatitude = document.getElementById("originFarmLatitude").value;
    let originFarmLongitude = document.getElementById("originFarmLongitude").value;
    let productNotes = document.getElementById("productNotes").value;
    let tx = await harvestItem(upc,originFarmerID,
    originFarmName,originFarmInformation,
    originFarmLatitude,originFarmLongitude,productNotes).send({from: this.account});
    this.setStatus(tx.transactionHash)
  },
  // Implement Task 4 Modify the front end of the DAPP
  processItem: async function (){
    this.getAccount();
    const {processItem} = this.meta.methods;
    let upc = document.getElementById("upc").value;
    let tx = await processItem(upc).send({from: this.account});
    console.log(tx)
    this.setStatus(tx.transactionHash)
  },
  
  packItem: async function (){
    this.getAccount();
    const {packItem} = this.meta.methods;
    let upc = document.getElementById("upc").value;
    let tx = await packItem(upc).send({from: this.account});
    this.setStatus(tx.transactionHash)
  },

  sellItem: async function (){
    this.getAccount();
    const {sellItem} = this.meta.methods;
    let upc = document.getElementById("upc").value;
    let price = document.getElementById("productPrice").value
    price =  Web3.utils.toWei(price, "ether")
    let tx = await sellItem(upc,price).send({from: this.account});
    this.setStatus(tx.transactionHash)
  },
  buyItem: async function (){
    const {buyItem} = this.meta.methods;
    this.getAccount()
    let upc = document.getElementById("upc").value;
    let price = document.getElementById("productPrice").value;
    let distributorID= document.getElementById("distributorID").value ;
    price =  Web3.utils.toWei(price, "ether")
    
    let tx = await buyItem(upc).send({from: this.account, value: price});
    this.setStatus(tx.transactionHash)
  },
  shipItem: async function (){
    this.getAccount()
    const {shipItem} = this.meta.methods;
    let upc = document.getElementById("upc").value;
    let tx = await shipItem(upc).send({from: this.account});
    this.setStatus(tx.transactionHash)
  },
  receiveItem: async function (){
    this.getAccount();
    const {receiveItem} = this.meta.methods;
    let upc = document.getElementById("upc").value;
    let tx =await receiveItem(upc).send({from: this.account});
    this.setStatus(tx.transactionHash);
  },
  purchaseItem: async function (){
    this.getAccount();
    const {purchaseItem} = this.meta.methods;
    let upc = document.getElementById("upc").value;
    let tx = await purchaseItem(upc).send({from: this.account});
    this.setStatus(tx.transactionHash);
  },
  getAccount: async function(){
    const accounts = await this.web3.eth.getAccounts();
    this.account = accounts[0];
  },

  setRoles: async function(){
   
    const {addFarmer,addDistributor,addRetailer,addConsumer, owner} = this.meta.methods;
    const {renounceFarmer,renounceDistributor,renounceRetailer,renounceConsumer} = this.meta.methods;
    let ownerID= await owner().call();
    console.log(ownerID);
    let originFarmerID= document.getElementById("originFarmerID").value;
    let distributorID= document.getElementById("distributorID").value ;
    let retailerID= document.getElementById("retailerID").value ;
    let consumerID =document.getElementById("consumerID").value ;
    await addFarmer(originFarmerID).send({from: ownerID});
    await addDistributor(distributorID).send({from: ownerID});
    await addRetailer(retailerID).send({from: ownerID});
    await addConsumer(consumerID).send({from: ownerID});
  }

  
};

window.App = App;

window.addEventListener("click", function(){

 App.getAccount();
  
});
window.addEventListener("load", async function() {
  if (window.ethereum) {
    // use MetaMask's provider
    App.web3 = new Web3(window.ethereum);
    await window.ethereum.enable(); // get permission to access accounts
  } else {
    console.warn("No web3 detected. Falling back to http://127.0.0.1:8545. You should remove this fallback when you deploy live",);
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    App.web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"),);
  }
  App.start()
});