 function log(message) {
   document.getElementById("log").innerHTML=message;
    console.log(message);
     }
  function error(message) {
    $('#log').append($('<p>').addClass('dark-red').text(message));
    $('#log').scrollTop($('#log').prop('scrollHeight'));
  }
  function waitForReceipt(hash, cb) {
    web3.eth.getTransactionReceipt(hash, function (err, receipt) {
      if (err) {
        error(err);
      }
      if (receipt !== null) {
        // Transaction went through
        if (cb) {
          cb(receipt);
        }
      } else {
        // Try again in 1 second
        window.setTimeout(function () {
          waitForReceipt(hash, cb);
        }, 1000);
      }
    });
  }
function initOrdersPlaced() {
    shopnow.getOrdersPlacedLength((err, maxOrders) => {
        let sectionsContent = ''
        maxOrders = maxOrders.toNumber()
        for(let i = 0; i < maxOrders; i++) {
            shopnow.getOrdersPlaced(i, (err, orders) => {
                sectionsContent += `<div class="message-box">
                    <div>ProductId: ${orders[0]}</div>
                    <div>PurchaseId: ${orders[1]}</div>
                    <div>Ordered By: ${orders[2]}</div>
                     <div>Shipment Status: ${orders[3]}</div>
                </div>`

                if(i === maxOrders - 1) document.querySelector('#allOrdersPlaced').innerHTML = sectionsContent
            })
        }
    })
}
const address = "0xb57CEa2389F99cB4EFd1DFb7D6dF27e7aB640EA2";
const abi = [
	{
		"inputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "constructor"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "_productId",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_productName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_category",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_price",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_description",
				"type": "string"
			}
		],
		"name": "addProduct",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "allProducts",
		"outputs": [
			{
				"internalType": "string",
				"name": "productId",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "productName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Category",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "address payable",
				"name": "seller",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "isActive",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "_productId",
				"type": "string"
			}
		],
		"name": "buyProduct",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_email",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_deliveryAddress",
				"type": "string"
			}
		],
		"name": "createAccount",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getMyOrdersLength",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_index",
				"type": "uint256"
			}
		],
		"name": "getOrdersPlaced",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getOrdersPlacedLength",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getProductsLength",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_purchaseId",
				"type": "uint256"
			}
		],
		"name": "getShipmentAddress",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_purchaseId",
				"type": "uint256"
			}
		],
		"name": "getShipmentOrderedBy",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_purchaseId",
				"type": "uint256"
			}
		],
		"name": "getShipmentProductId",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_purchaseId",
				"type": "uint256"
			}
		],
		"name": "getShipmentStatus",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_index",
				"type": "uint256"
			}
		],
		"name": "myOrders",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			}
		],
		"name": "sellerSignUp",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "sellers",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "bankGuaraantee",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "bgPaid",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_purchaseId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_shipmentDetails",
				"type": "string"
			}
		],
		"name": "updateShipment",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
  shopnow = web3.eth.contract(abi).at(address);
  $(function () {
    shopnow = web3.eth.contract(abi).at(address);
    const abc = new Web3(window.web3.currentProvider);
    var acc=abc.eth.accounts[3];
    web3.eth.defaultAccount=acc;
     $('#getShipments').click(function (e) {
      e.preventDefault();
            shopnow.getShipmentProductId.call(document.getElementById("searchPurchaseId").value, function (err, result1) {
        if (err) {
          return error(err);
        } 
        // The return value is a BigNumber object
        document.getElementById("getProductId").innerHTML = result1;
      });
     });
    
     $('#getShipments').click(function (e) {
      e.preventDefault();
            shopnow.getShipmentStatus.call(document.getElementById("searchPurchaseId").value, function (err, result2) {
        if (err) {
          return error(err);
        } 
        // The return value is a BigNumber object
        document.getElementById("getShipmentStatus").innerHTML = result2;
      });
     });
  
     $('#getShipments').click(function (e) {
      e.preventDefault();
            shopnow.getShipmentAddress.call(document.getElementById("searchPurchaseId").value, function (err, result3) {
        if (err) {
          return error(err);
        } 
        // The return value is a BigNumber object
        document.getElementById("getShipmentAddress").innerHTML = result3;
      });
     });

     $('#getShipments').click(function (e) {
      e.preventDefault();
            shopnow.getShipmentOrderedBy.call(document.getElementById("searchPurchaseId").value, function (err, result4) {
        if (err) {
          return error(err);
        } 
        // The return value is a BigNumber object
        document.getElementById("getOrderedBy").innerHTML = result4;
      });
     });
     
    $('#createSellerAccount').click(function (e) {
      e.preventDefault();
      if(web3.eth.defaultAccount === undefined) {
        return error("No accounts found. If you're using MetaMask, " +
                     "please unlock it first and reload the page.");
      }
      log(shopnow);
      log("Transaction On its Way...");
      shopnow.sellerSignUp.sendTransaction(document.getElementById("sellerName").value, {value: window.web3.toWei(5,'ether')}, {from: acc, gas:3000000},function (err, hash) {
        if (err) {
          return error(err);
        }
        waitForReceipt(hash, function () {
          log("Account Created. Start Listing Your Products...");
        });
      });
    });
    
    $('#addProduct').click(function (e) {
      e.preventDefault();
      if(web3.eth.defaultAccount === undefined) {
        return error("No accounts found. If you're using MetaMask, " +
                     "please unlock it first and reload the page.");
      }
      log("Transaction On its Way...");
      shopnow.addProduct.sendTransaction(document.getElementById("addProductId").value, document.getElementById("addProductName").value, document.getElementById("addProductCategory").value, document.getElementById("addProductPrice").value*1, document.getElementById("addProductDescription").value, {from: acc, gas:3000000}, function (err, hash) {
        if (err) {
          return error(err);
        }
        waitForReceipt(hash, function () {
          log("Your Product Listed On Network..");
        });
      });
    });
    
    $('#updateShipment').click(function (e) {
      e.preventDefault();
      if(web3.eth.defaultAccount === undefined) {
        return error("No accounts found. If you're using MetaMask, " +
                     "please unlock it first and reload the page.");
      }
      log("Transaction On its Way...");
      shopnow.updateShipment.sendTransaction(document.getElementById("shipPurchaseId").value, document.getElementById("shipmentDetails").value, {from: acc, gas:3000000},function (err, hash) {
        if (err) {
          return error(err);
        }
        waitForReceipt(hash, function () {
          log("Shipment Details Updated...");
        });
      });
    });
    
    if (typeof(web3) === "undefined") {
      error("Unable to find web3. " +
            "Please run MetaMask (or something else that injects web3).");
    } else {
      log("Found injected web3.");
      web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
      ethereum.enable();
      if (web3.version.network != 3) {
        shopnow = web3.eth.contract(abi).at(address);
      } else {
        log("Connected to the Ropsten test network.");
        shopnow = web3.eth.contract((abi).at(address));
        $('#allOrderListings').click();
        }
    }
  });
