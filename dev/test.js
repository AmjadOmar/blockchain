const Blockchain = require("./blockchain");

const bitcoin = new Blockchain();

const previousBlockHash = "87765DA6CCF0668238C1D27C35692E11";

const currentBlockData = [
  {
    amount: 101,
    sender: "B4CEE9C0E5CD571",
    recipient: "3A3F6E462D48E9",
  },
  {
    amount: 210,
    sender: "GDCD4334EDDSD",
    recipient: "B4CEE9C0E5CD571",
  },
  {
    amount: 350,
    sender: "IKHG434232DSD",
    recipient: "FAAAAAAAAAAAAAA",
  },
  {
    amount: 101,
    sender: "B4CEE9C0E5CD571",
    recipient: "3A3F6E462D48E9",
  },
  {
    amount: 210,
    sender: "GDCD4334EDDSD",
    recipient: "B4CEE9C0E5CD571",
  },
  {
    amount: 350,
    sender: "IKHG434232DSD",
    recipient: "FAAAAAAAAAAAAAA",
  },
  {
    amount: 101,
    sender: "B4CEE9C0E5CD571",
    recipient: "3A3F6E462D48E9",
  },
  {
    amount: 210,
    sender: "GDCD4334EDDSD",
    recipient: "B4CEE9C0E5CD571",
  },
  {
    amount: 350,
    sender: "IKHG434232DSD",
    recipient: "FAAAAAAAAAAAAAA",
  },
];

var btc = bitcoin.proofOfWOrk(previousBlockHash, currentBlockData);

console.log(btc);
