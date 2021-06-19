const Web3 = require("web3");
const EthereumTransaction = require("ethereumjs-tx").Transaction;
const web3 = new Web3("HTTP://127.0.0.1:7545");

const sendingAddress = "0x1632Fc53b7f2b0F0EeEdaA0fbA896c2f9687F549";
const receivingAddress = "0x7aC08C47FA6d0D4dc0876Ff93Ed89Ea07a35F0B1";
web3.eth.getBalance(sendingAddress).then(console.log);
web3.eth.getBalance(receivingAddress).then(console.log);

const rawTransaction = {
  nonce: "0x0",
  to: receivingAddress,
  gasPrice: "0x20000000",
  gasLimit: "0x30000",
  value: "0x01",
  data: "0x000",
};
console.log(rawTransaction);

web3.eth
  .getBalance(sendingAddress)
  .then(console.log(web3.utils.fromWei("1", "ether")));

web3.eth
  .getBalance(receivingAddress)
  .then(console.log(web3.utils.fromWei("1", "ether")));

privateKeySender =
  "e17956ae4a84d0eb4f20eaf5de80cf731316117d3b45da9b310dffe0d77e3e8b";
const privateKeySenderHex = new Buffer.from(privateKeySender, "hex");
const transaction = new EthereumTransaction(rawTransaction);
transaction.sign(privateKeySenderHex);

const serializedTransaction = transaction.serialize();
web3.eth.sendSignedTransaction(serializedTransaction);
